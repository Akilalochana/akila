import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 rounded-[32px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I'm always open to discussing new opportunities, collaborations, or simply chatting about tech. Feel free to reach out!
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 mb-10 text-left max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {submitted ? (
            <motion.div
              className="text-center text-emerald-600 text-xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent. 🚀
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-emerald-400 transition`}
                  placeholder="Your Name"
                  autoComplete="off"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-emerald-400 transition`}
                  placeholder="you@email.com"
                  autoComplete="off"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-emerald-400 transition`}
                  placeholder="Type your message..."
                  rows={5}
                />
                {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-emerald-600 transition-all text-lg flex items-center justify-center gap-2 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full inline-block"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-8 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-emerald-500 text-3xl hover:scale-110 transition-transform"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
