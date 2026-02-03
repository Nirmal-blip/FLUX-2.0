"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import toast from "react-hot-toast";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Message sent successfully!');
    setFormData({ email: '', message: '' });
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-pink-500 uppercase font-mono">
              CONTACT
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-space-grotesk text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 font-inter leading-relaxed">
            Have questions about our events or clubs? We're here to help you navigate campus life.
          </p>
        </motion.div>

        {/* content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Info List */}
            <div className="space-y-6">
              <ContactItem
                icon={EnvelopeIcon}
                label="Email"
                value="SAC@iitram.ac.in"
                href="mailto:SAC@iitram.ac.in"
                color="text-pink-400"
                bg="bg-pink-500/10"
              />
              <ContactItem
                icon={PhoneIcon}
                label="Phone"
                value="+91 70911 82409"
                href="tel:+917091182409"
                color="text-purple-400"
                bg="bg-purple-500/10"
              />
              <ContactItem
                icon={MapPinIcon}
                label="Address"
                value="IITRAM, Ahmedabad, Gujarat"
                href="https://maps.google.com"
                color="text-cyan-400"
                bg="bg-cyan-500/10"
              />
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">Follow Us</h3>
              <div className="flex gap-4">
                <SocialIcon icon={FaInstagram} href="https://www.instagram.com/saciitram?igsh=MW1sdGwxMms0M28xaw==" color="hover:text-pink-500 hover:border-pink-500" />
                <SocialIcon icon={FaFacebookF} href="https://www.facebook.com/share/1BnddyXUoX/" color="hover:text-blue-500 hover:border-blue-500" />
                <SocialIcon icon={FaLinkedinIn} href="https://www.linkedin.com/in/student-activity-center-iitram-2b80a331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" color="hover:text-cyan-500 hover:border-cyan-500" />
                <SocialIcon icon={FaYoutube} href="https://youtube.com/@saciitram?si=dIP3z6Q6kusU4rhp" color="hover:text-red-500 hover:border-red-500" />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative overflow-hidden group"
          >
            {/* Animated Form Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 font-mono uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-inter"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 font-mono uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all font-inter resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white font-bold font-space-grotesk rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
              >
                Send Message <PaperAirplaneIcon className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-inter">
          <p>© {new Date().getFullYear()} IITRAM SAC. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed with <span className="text-pink-500">♥</span> by Students
          </p>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon: Icon, label, value, href, color, bg }) => (
  <div className="flex items-center gap-4 group">
    <div className={`p-4 rounded-xl border border-white/5 ${bg} group-hover:scale-110 transition-transform`}>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div>
      <p className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
      <a href={href} className="text-lg font-space-grotesk text-white hover:text-cyan-400 transition-colors">
        {value}
      </a>
    </div>
  </div>
);

const SocialIcon = ({ icon: Icon, href, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all ${color} hover:bg-white/10`}
  >
    <Icon className="w-4 h-4" />
  </a>
)

export default Footer;
