"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  UserIcon,
  PlayIcon,
  EnvelopeIcon, // Added Icon
} from "@heroicons/react/24/outline";
import { ClipLoader } from "react-spinners";

export default function EsportsRegistration() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGame, setSelectedGame] = useState("");
  const [participationType, setParticipationType] = useState("");
  const [rulebookAccepted, setRulebookAccepted] = useState(false);

  const [formData, setFormData] = useState({
    teamLeaderName: "",
    teamLeaderEmail: "", // Added Email
    teamLeaderMobile: "",
    teamName: "",
    collegeName: "",
    teamLeaderCollegeId: "",
    players: [],
    // Payment screenshot removed
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isGoingBack, setIsGoingBack] = useState(false);

  const router = useRouter();

  const gameConfigs = {
    BGMI: {
      name: "BGMI",
      teamSize: 6,
      mainPlayers: 4,
      substitutes: 2,
      fields: ["name", "ign", "uid"],
    },
    FREE_FIRE: {
      name: "Free Fire",
      teamSize: 6,
      mainPlayers: 4,
      substitutes: 2,
      fields: ["name", "ign", "uid"],
    },
    MINI_MILITIA: {
      name: "Mini Militia",
      teamSize: 6,
      mainPlayers: 4,
      substitutes: 2,
      fields: ["name", "ign", "uid"],
    },
    VALORANT: {
      name: "Valorant",
      teamSize: 7,
      mainPlayers: 5,
      substitutes: 2,
      fields: ["name", "ign", "uid"],
    },
    CODM: {
      name: "Call of Duty Mobile",
      teamSize: 7,
      mainPlayers: 5,
      substitutes: 2,
      fields: ["name", "ign", "uid"],
    },
    EA_FC: {
      name: "EA FC",
      teamSize: 1,
      mainPlayers: 1,
      substitutes: 0,
      fields: ["name", "uniqueId"],
    }, // uniqueId here acts as identifier
    CLASH_ROYAL: {
      name: "Clash Royale",
      teamSize: 1,
      mainPlayers: 1,
      substitutes: 0,
      fields: ["name", "ign", "uid"],
    },
  };

  const gameOptions = Object.keys(gameConfigs);

  const initializePlayers = (game) => {
    const config = gameConfigs[game];
    if (!config) return [];

    return Array(config.teamSize)
      .fill(null)
      .map((_, index) => {
        const player = { id: index + 1 };
        // Initialize specific fields based on game config
        config.fields.forEach((field) => {
          player[field] = "";
        });
        return player;
      });
  };

  const handleGameSelection = (game) => {
    setSelectedGame(game);
    setFormData((prev) => ({
      ...prev,
      players: initializePlayers(game),
    }));
    setCurrentStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePlayerChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      players: prev.players.map((player, i) =>
        i === index ? { ...player, [field]: value } : player
      ),
    }));
    const errorKey = `player${index}_${field}`;
    if (errors[errorKey]) setErrors((prev) => ({ ...prev, [errorKey]: "" }));
  };

  const validateCurrentStep = () => {
    const newErrors = {};

    if (currentStep === 2) {
      if (!formData.teamLeaderName.trim())
        newErrors.teamLeaderName = "Team leader name is required";

      // Email Validation
      if (!formData.teamLeaderEmail.trim()) {
        newErrors.teamLeaderEmail = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.teamLeaderEmail)) {
        newErrors.teamLeaderEmail = "Invalid email format";
      }

      if (!formData.teamLeaderMobile.trim()) {
        newErrors.teamLeaderMobile = "Mobile number is required";
      } else if (!/^[6-9]\d{9}$/.test(formData.teamLeaderMobile)) {
        newErrors.teamLeaderMobile = "Enter valid 10-digit number";
      }

      if (
        gameConfigs[selectedGame]?.teamSize > 1 &&
        !formData.teamName.trim()
      ) {
        newErrors.teamName = "Team name is required";
      }
    }

    if (currentStep === 3) {
      if (participationType === "college") {
        if (!formData.collegeName.trim())
          newErrors.collegeName = "College name is required";
        if (!formData.teamLeaderCollegeId.trim())
          newErrors.teamLeaderCollegeId = "College ID is required";
      }
    }

    if (currentStep === 4) {
      const config = gameConfigs[selectedGame];
      formData.players.forEach((player, index) => {
        // Validate only Main Players, Substitutes are usually optional but sticking to required logic if needed
        // Assuming all fields in config are required for main players
        if (index < config.mainPlayers) {
          config.fields.forEach((field) => {
            if (!player[field]?.trim()) {
              newErrors[
                `player${index}_${field}`
              ] = `${field.toUpperCase()} required`;
            }
          });
        }
      });
    }

    if (currentStep === 5) {
      if (!rulebookAccepted)
        newErrors.rulebookAccepted = "You must accept the rulebook";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    // Prepare payload
    const payload = {
      ...formData,
      selectedGame,
      participationType,
    };

    try {
      const response = await fetch(
        "https://sac.iitram.in/api/esports_registration.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmitStatus("success");
        setTimeout(() => {
          window.location.href = "https://hr.iitram.ac.in/onlinepayment/create";
        }, 500);
      } else {
        setSubmitStatus("error");
        console.error(result.message);
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {!showContent ? null : (
        <section
          className="min-h-screen py-20 px-6 font-athletic"
          style={{ backgroundColor: "#111111", color: "#FFFFFF" }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12 font-athletic"
            >
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  setIsGoingBack(true);
                  setTimeout(() => {
                    router.push("/Pratyancha");
                  }, 800);
                }}
                disabled={isGoingBack}
                className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-athletic ${
                  isGoingBack
                    ? "cursor-not-allowed opacity-60"
                    : "hover:bg-white/10"
                }`}
                style={{ color: "#F97316" }}
              >
                {isGoingBack ? (
                  <>
                    <ClipLoader color="#F97316" size={16} />
                    <span>Going Back...</span>
                  </>
                ) : (
                  <>
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Go Back</span>
                  </>
                )}
              </motion.button>

              <motion.h1
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-5xl md:text-6xl font-athletic athletic-heading mb-6 tracking-wide"
                style={{
                  background:
                    "linear-gradient(135deg, #F97316 0%, #8B5CF6 50%, #F97316 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.4))",
                }}
              >
                E-Sports Registration
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 rounded-2xl border backdrop-blur-md inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                }}
              >
                <div className="flex items-center gap-4 text-sm font-athletic">
                  <div className="flex items-center gap-2">
                    <UsersIcon
                      className="w-4 h-4"
                      style={{ color: "#3B82F6" }}
                    />
                    <span className="font-athletic">
                      Multiple Games Available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-athletic">
                      Registration Fee: ₹200
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Progress Bar */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-athletic ${
                          step <= currentStep
                            ? "bg-gradient-to-r from-orange-500 to-blue-500 text-white"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {step}
                      </div>
                      {step < 5 && (
                        <div
                          className={`w-12 h-1 mx-2 ${
                            step < currentStep
                              ? "bg-gradient-to-r from-orange-500 to-blue-500"
                              : "bg-gray-700"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* STEP 1: Rulebook & Game */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="backdrop-blur-md rounded-3xl p-8 border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                    borderColor: "rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                    style={{ color: "#FFFFFF" }}
                  >
                    <DocumentTextIcon
                      className="w-6 h-6"
                      style={{ color: "#F97316" }}
                    />
                    Rulebook & Game Selection
                  </h2>
                  <div className="mb-8 p-6 bg-red-500/10 border border-red-400/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <ExclamationCircleIcon className="w-6 h-6 text-red-400" />
                      <h3 className="text-lg font-bold text-red-400 font-athletic">
                        Mandatory Rulebook Download
                      </h3>
                    </div>
                    <motion.a
                      href="/rulebook-esports.pdf"
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold font-athletic hover:bg-red-700 transition-colors"
                    >
                      <ArrowDownTrayIcon className="w-5 h-5" />
                      Download Rulebook (PDF)
                    </motion.a>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-4 font-athletic"
                      style={{ color: "#FFFFFF" }}
                    >
                      Select Your Game
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {gameOptions.map((game) => (
                        <motion.button
                          key={game}
                          onClick={() => handleGameSelection(game)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-4 bg-white/5 border border-gray-600 rounded-xl text-left hover:border-orange-500 transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <PlayIcon className="w-6 h-6 text-orange-400" />
                            <h4 className="font-bold text-white font-athletic">
                              {gameConfigs[game].name}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-400 font-athletic">
                            {gameConfigs[game].teamSize === 1
                              ? "Individual Game"
                              : `Team Size: ${gameConfigs[game].teamSize} (${gameConfigs[game].mainPlayers} main + ${gameConfigs[game].substitutes} subs)`}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Team Leader Info */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="backdrop-blur-md rounded-3xl p-8 border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                    borderColor: "rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                    style={{ color: "#FFFFFF" }}
                  >
                    <UserIcon
                      className="w-6 h-6"
                      style={{ color: "#F97316" }}
                    />
                    Team Leader Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 font-athletic"
                        style={{ color: "#FFFFFF" }}
                      >
                        Team Leader Name *
                      </label>
                      <input
                        type="text"
                        name="teamLeaderName"
                        value={formData.teamLeaderName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition-all font-athletic ${
                          errors.teamLeaderName
                            ? "border-red-400"
                            : "border-gray-600"
                        }`}
                        style={{ color: "#FFFFFF" }}
                        placeholder="Full Name"
                      />
                      {errors.teamLeaderName && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.teamLeaderName}
                        </p>
                      )}
                    </div>

                    {/* Added Email Field */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 font-athletic"
                        style={{ color: "#FFFFFF" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="teamLeaderEmail"
                        value={formData.teamLeaderEmail}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition-all font-athletic ${
                          errors.teamLeaderEmail
                            ? "border-red-400"
                            : "border-gray-600"
                        }`}
                        style={{ color: "#FFFFFF" }}
                        placeholder="Email Address"
                      />
                      {errors.teamLeaderEmail && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.teamLeaderEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2 font-athletic"
                        style={{ color: "#FFFFFF" }}
                      >
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="teamLeaderMobile"
                        value={formData.teamLeaderMobile}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition-all font-athletic ${
                          errors.teamLeaderMobile
                            ? "border-red-400"
                            : "border-gray-600"
                        }`}
                        style={{ color: "#FFFFFF" }}
                        placeholder="10-digit mobile"
                        maxLength="10"
                      />
                      {errors.teamLeaderMobile && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.teamLeaderMobile}
                        </p>
                      )}
                    </div>

                    {gameConfigs[selectedGame]?.teamSize > 1 && (
                      <div>
                        <label
                          className="block text-sm font-medium mb-2 font-athletic"
                          style={{ color: "#FFFFFF" }}
                        >
                          Team Name *
                        </label>
                        <input
                          type="text"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 transition-all font-athletic ${
                            errors.teamName
                              ? "border-red-400"
                              : "border-gray-600"
                          }`}
                          style={{ color: "#FFFFFF" }}
                          placeholder="Team Name"
                        />
                        {errors.teamName && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.teamName}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between mt-8">
                    <motion.button
                      onClick={handleBack}
                      className="px-6 py-3 bg-gray-600 text-white rounded-xl font-bold font-athletic"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-xl font-bold font-athletic"
                    >
                      Next
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Participation Type */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="backdrop-blur-md rounded-3xl p-8 border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                    borderColor: "rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                    style={{ color: "#FFFFFF" }}
                  >
                    <BuildingOfficeIcon
                      className="w-6 h-6"
                      style={{ color: "#F97316" }}
                    />
                    Participation Type
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.button
                      onClick={() => setParticipationType("college")}
                      className={`p-6 border-2 rounded-xl font-athletic ${
                        participationType === "college"
                          ? "border-orange-500 bg-orange-500/20"
                          : "border-gray-600 bg-white/5"
                      }`}
                    >
                      <BuildingOfficeIcon className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                      <h3 className="text-lg font-bold text-white mb-2">
                        College
                      </h3>
                    </motion.button>
                    <motion.button
                      onClick={() => setParticipationType("self")}
                      className={`p-6 border-2 rounded-xl font-athletic ${
                        participationType === "self"
                          ? "border-blue-500 bg-blue-500/20"
                          : "border-gray-600 bg-white/5"
                      }`}
                    >
                      <UserIcon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                      <h3 className="text-lg font-bold text-white mb-2">
                        Self
                      </h3>
                    </motion.button>
                  </div>
                  {participationType === "college" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-medium mb-2 font-athletic"
                          style={{ color: "#FFFFFF" }}
                        >
                          College Name *
                        </label>
                        <input
                          type="text"
                          name="collegeName"
                          value={formData.collegeName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl font-athletic ${
                            errors.collegeName
                              ? "border-red-400"
                              : "border-gray-600"
                          }`}
                          style={{ color: "#FFFFFF" }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-2 font-athletic"
                          style={{ color: "#FFFFFF" }}
                        >
                          College ID (Leader) *
                        </label>
                        <input
                          type="text"
                          name="teamLeaderCollegeId"
                          value={formData.teamLeaderCollegeId}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl font-athletic ${
                            errors.teamLeaderCollegeId
                              ? "border-red-400"
                              : "border-gray-600"
                          }`}
                          style={{ color: "#FFFFFF" }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between mt-8">
                    <motion.button
                      onClick={handleBack}
                      className="px-6 py-3 bg-gray-600 text-white rounded-xl font-bold font-athletic"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      disabled={!participationType}
                      className={`px-6 py-3 rounded-xl font-bold font-athletic ${
                        participationType
                          ? "bg-gradient-to-r from-orange-500 to-blue-500 text-white"
                          : "bg-gray-600 text-gray-400"
                      }`}
                    >
                      Next
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Player Details */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="backdrop-blur-md rounded-3xl p-8 border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(126, 126, 126, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
                    borderColor: "rgba(126, 126, 126, 0.3)",
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                    style={{ color: "#FFFFFF" }}
                  >
                    Player Details ({gameConfigs[selectedGame]?.name})
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {formData.players.map((player, index) => {
                      const config = gameConfigs[selectedGame];
                      const isSubstitute = index >= config.mainPlayers;
                      return (
                        <motion.div
                          key={index}
                          className={`bg-white/5 rounded-xl p-4 border ${
                            isSubstitute
                              ? "border-yellow-500/30"
                              : "border-white/30"
                          }`}
                        >
                          <h3
                            className="text-lg font-semibold mb-3 font-athletic flex items-center gap-2"
                            style={{ color: "#FFFFFF" }}
                          >
                            {gameConfigs[selectedGame]?.teamSize === 1
                              ? "Player"
                              : `Player ${index + 1}`}{" "}
                            {isSubstitute && (
                              <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                SUBSTITUTE
                              </span>
                            )}
                          </h3>
                          <div className="space-y-3">
                            {config.fields.map((field) => (
                              <div key={field}>
                                <label
                                  className="block text-xs font-medium mb-1 font-athletic"
                                  style={{ color: "#FFFFFF" }}
                                >
                                  {field === "name"
                                    ? "Name"
                                    : field === "ign"
                                    ? "IGN"
                                    : field === "uid"
                                    ? "UID"
                                    : field === "uniqueId"
                                    ? "Unique ID"
                                    : field.toUpperCase()}{" "}
                                  *
                                </label>
                                <input
                                  type="text"
                                  value={player[field] || ""}
                                  onChange={(e) =>
                                    handlePlayerChange(
                                      index,
                                      field,
                                      e.target.value
                                    )
                                  }
                                  className={`w-full px-3 py-2 bg-white/5 border rounded-lg text-sm font-athletic ${
                                    errors[`player${index}_${field}`]
                                      ? "border-red-400"
                                      : "border-gray-600"
                                  }`}
                                  style={{ color: "#FFFFFF" }}
                                />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-8">
                    <motion.button
                      onClick={handleBack}
                      className="px-6 py-3 bg-gray-600 text-white rounded-xl font-bold font-athletic"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-xl font-bold font-athletic"
                    >
                      Next
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Final & Submit */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <motion.div
                    className="backdrop-blur-md rounded-3xl p-8 border"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(126, 126, 126, 0.1) 100%)",
                      borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <h2
                      className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                      style={{ color: "#FFFFFF" }}
                    >
                      <CheckCircleIcon
                        className="w-6 h-6"
                        style={{ color: "#3B82F6" }}
                      />
                      Confirmation
                    </h2>
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-400/30 rounded-xl">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rulebookAccepted}
                          onChange={(e) =>
                            setRulebookAccepted(e.target.checked)
                          }
                          className="mt-1 w-5 h-5 text-red-500 bg-transparent border-2 border-red-400 rounded"
                        />
                        <div>
                          <p className="text-white font-bold font-athletic mb-1">
                            I have read and agree to follow the rulebook *
                          </p>
                        </div>
                      </label>
                      {errors.rulebookAccepted && (
                        <p className="mt-2 text-sm text-red-400 flex items-center gap-1 font-athletic">
                          <ExclamationCircleIcon className="w-4 h-4" />
                          {errors.rulebookAccepted}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between mt-8">
                      <motion.button
                        onClick={handleBack}
                        className="px-6 py-3 bg-gray-600 text-white rounded-xl font-bold font-athletic"
                      >
                        Back
                      </motion.button>
                      <motion.button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-blue-500 text-white rounded-xl font-bold font-athletic disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-3">
                            <ClipLoader color="#FFFFFF" size={20} />
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <span>Submit Registration</span>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center font-athletic ${
                    submitStatus.includes("success")
                      ? "bg-green-500/20 border border-green-400/30 text-green-300"
                      : "bg-red-500/20 border border-red-400/30 text-red-300"
                  }`}
                >
                  {submitStatus}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
