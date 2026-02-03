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
  TrophyIcon,
  EnvelopeIcon, // Added Icon
} from "@heroicons/react/24/outline";
import { ClipLoader } from "react-spinners";

export default function FutsalRegistration() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  });
  // Futsal: 5 on field + subs. Based on your code: 7 Required, 11 Total
  const REQUIRED_PLAYERS = 7;
  const TOTAL_PLAYERS = 11;

  const [formData, setFormData] = useState({
    collegeName: "",
    captainName: "",
    email: "", // Added Email
    mobileNumber: "",
    // Payment Screenshot removed
    players: Array(TOTAL_PLAYERS)
      .fill("")
      .map(() => ({
        name: "",
        enrollmentNumber: "",
      })),
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isGoingBack, setIsGoingBack] = useState(false);

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...formData.players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setFormData((prev) => ({ ...prev, players: newPlayers }));

    const errorKey = `player${index}_${field}`;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.collegeName.trim())
      newErrors.collegeName = "College name is required";
    if (!formData.captainName.trim())
      newErrors.captainName = "Captain name is required";

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    formData.players.forEach((player, index) => {
      // Validate required players
      if (index < REQUIRED_PLAYERS) {
        if (!player.name.trim())
          newErrors[`player${index}_name`] = "Player name is required";
        if (!player.enrollmentNumber.trim())
          newErrors[`player${index}_enrollmentNumber`] =
            "Enrollment number is required";
      } else {
        // Validate optional substitutes only if partially filled
        if (player.name.trim() || player.enrollmentNumber.trim()) {
          if (!player.name.trim())
            newErrors[`player${index}_name`] = "Player name is required";
          if (!player.enrollmentNumber.trim())
            newErrors[`player${index}_enrollmentNumber`] =
              "Enrollment number is required";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Pointing to the new Futsal PHP API
      const response = await fetch(
        "https://sac.iitram.in/api/futsal_registration.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmitStatus("success");
        setTimeout(() => {
          // Redirect to payment portal
          window.location.href = "https://hr.iitram.ac.in/onlinepayment/create";
        }, 500);
      } else {
        console.error("Server Error:", result.message);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12 font-athletic"
            >
              {/* Go Back Button */}
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
                style={{ color: "#3B82F6" }}
              >
                {isGoingBack ? (
                  <>
                    <ClipLoader color="#3B82F6" size={16} />
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
                    "linear-gradient(135deg, #3B82F6 0%, #F97316 50%, #3B82F6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))",
                }}
              >
                Futsal Registration
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 rounded-xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-4 text-sm font-athletic">
                  <div className="flex items-center gap-2">
                    <UsersIcon
                      className="w-4 h-4"
                      style={{ color: "#3B82F6" }}
                    />
                    <span style={{ color: "#FFFFFF" }}>
                      Registration Fee: ₹3,000 per team
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <TrophyIcon
                      className="w-4 h-4"
                      style={{ color: "#F97316" }}
                    />
                    <span
                      className="font-athletic"
                      style={{ color: "#FFFFFF" }}
                    >
                      Prize Pool: ₹5,000 + Trophy
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <h2
                  className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                  style={{ color: "#FFFFFF" }}
                >
                  <BuildingOfficeIcon
                    className="w-6 h-6"
                    style={{ color: "#F97316" }}
                  />
                  Team Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      College Name *
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.collegeName
                          ? "#EF4444"
                          : "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                        focusRingColor: "#3B82F6",
                      }}
                      placeholder="Enter your college name"
                    />
                    {errors.collegeName && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <ExclamationCircleIcon className="w-4 h-4" />
                        {errors.collegeName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      Team Captain Name *
                    </label>
                    <input
                      type="text"
                      name="captainName"
                      value={formData.captainName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.captainName
                          ? "#EF4444"
                          : "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                      }}
                      placeholder="Enter captain's name"
                    />
                    {errors.captainName && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <ExclamationCircleIcon className="w-4 h-4" />
                        {errors.captainName}
                      </p>
                    )}
                  </div>

                  {/* Added Email Field */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      Captain Email ID *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.email
                          ? "#EF4444"
                          : "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                      }}
                      placeholder="Enter email address"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <ExclamationCircleIcon className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border bg-white/10 backdrop-blur-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.mobileNumber
                          ? "#EF4444"
                          : "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#FFFFFF",
                      }}
                      placeholder="Enter 10-digit mobile number"
                      maxLength="10"
                    />
                    {errors.mobileNumber && (
                      <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <ExclamationCircleIcon className="w-4 h-4" />
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Payment Screenshot Section Removed */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <h2
                  className="text-2xl font-bold mb-6 font-athletic flex items-center gap-3"
                  style={{ color: "#FFFFFF" }}
                >
                  <UsersIcon className="w-6 h-6" style={{ color: "#7E7E7E" }} />
                  Player List (7 Required + 4 Optional Substitutes)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.players.map((player, index) => {
                    const isSubstitute = index >= REQUIRED_PLAYERS;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border bg-white/5 backdrop-blur-sm ${
                          isSubstitute
                            ? "border-yellow-500/30"
                            : "border-white/30"
                        }`}
                      >
                        <h3
                          className="text-lg font-semibold mb-3 flex items-center gap-2"
                          style={{ color: "#FFFFFF" }}
                        >
                          Player {index + 1}
                          {isSubstitute && (
                            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                              OPTIONAL
                            </span>
                          )}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <label
                              className="block text-xs font-medium mb-1"
                              style={{ color: "#FFFFFF" }}
                            >
                              Name{" "}
                              {index < REQUIRED_PLAYERS ? "*" : "(Optional)"}
                            </label>
                            <input
                              type="text"
                              value={player.name}
                              onChange={(e) =>
                                handlePlayerChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 rounded-lg border bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-1 text-sm"
                              style={{
                                borderColor: errors[`player${index}_name`]
                                  ? "#EF4444"
                                  : "rgba(255, 255, 255, 0.3)",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                color: "#FFFFFF",
                              }}
                              placeholder={`Player ${index + 1} name`}
                            />
                            {errors[`player${index}_name`] && (
                              <p className="mt-1 text-xs text-red-400">
                                {errors[`player${index}_name`]}
                              </p>
                            )}
                          </div>
                          <div>
                            <label
                              className="block text-xs font-medium mb-1"
                              style={{ color: "#FFFFFF" }}
                            >
                              Enrollment No{" "}
                              {index < REQUIRED_PLAYERS ? "*" : "(Optional)"}
                            </label>
                            <input
                              type="text"
                              value={player.enrollmentNumber}
                              onChange={(e) =>
                                handlePlayerChange(
                                  index,
                                  "enrollmentNumber",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 rounded-lg border bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-1 text-sm"
                              style={{
                                borderColor: errors[
                                  `player${index}_enrollmentNumber`
                                ]
                                  ? "#EF4444"
                                  : "rgba(255, 255, 255, 0.3)",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                color: "#FFFFFF",
                              }}
                              placeholder="Enrollment number"
                            />
                            {errors[`player${index}_enrollmentNumber`] && (
                              <p className="mt-1 text-xs text-red-400">
                                {errors[`player${index}_enrollmentNumber`]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 rounded-xl font-bold text-white shadow-xl transition-all duration-300 font-athletic text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <ClipLoader color="#FFFFFF" size={20} />{" "}
                      <span className="ml-2">Submitting...</span>
                    </>
                  ) : (
                    <span>Register Team</span>
                  )}
                </motion.button>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 p-4 rounded-xl bg-green-500/20 border border-green-400/30 text-green-400"
                  >
                    <CheckCircleIcon className="w-5 h-5 inline mr-2" />
                    Registration submitted successfully! Redirecting...
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-400/30 text-red-400"
                  >
                    <ExclamationCircleIcon className="w-5 h-5 inline mr-2" />
                    Registration failed. Please try again.
                  </motion.div>
                )}
              </motion.div>
            </motion.form>
          </div>
        </section>
      )}
    </>
  );
}
