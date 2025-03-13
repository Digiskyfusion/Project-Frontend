import { motion } from "framer-motion";

 function PrivacyPolicy() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-12 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect personal information such as your name, email address, and
        usage data to improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your information to personalize your experience, send updates,
        and improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Cookies and Tracking</h2>
      <p className="text-gray-700 mb-4">
        We use cookies to enhance your experience. You can disable cookies in
        your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement security measures to protect your personal data. However,
        no method is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. Please check this
        page periodically.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions, contact us at{" "}
        <a href="mailto:digiskyhelp@gmail.com" className="text-blue-600 underline">
        digiskyhelp@gmail.com
        </a>
        .
      </p>
    </motion.div>
  );
}
export default PrivacyPolicy;