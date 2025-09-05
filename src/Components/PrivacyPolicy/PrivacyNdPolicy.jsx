import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mb-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">DigiSky</span>, a platform dedicated to connecting freelancers with clients for various services. Your privacy is of utmost importance to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
      <p className="mt-2"><span className="font-semibold">Personal Data:</span> When you register on our Site, create a profile, or place an order, we may collect personal information such as your name, email address, phone number, payment information, and other necessary details.</p>
      <p className="mt-2"><span className="font-semibold">Non-Personal Data:</span> We may collect data such as your browser type, operating system, IP address, and the pages you visit on our Site to enhance our services.</p>
      <p className="mt-2"><span className="font-semibold">Cookies:</span> Our Site uses cookies to improve user experience. You can manage cookie settings through your browser.</p>

      <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Providing and managing your account</li>
        <li>Processing transactions and sending related information</li>
        <li>Improving our services and developing new features</li>
        <li>Communicating updates, promotions, and news</li>
        <li>Personalizing your experience on our Site</li>
        <li>Providing customer support</li>
        <li>Monitoring and analyzing usage trends</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. How We Share Your Information</h2>
      <ul className="list-disc list-inside mt-2">
        <li>With service providers who assist us</li>
        <li>With other users to facilitate freelance services</li>
        <li>In response to legal requests</li>
        <li>To protect the rights, property, or safety of DigiSky, our users, or others</li>
        <li>In connection with business mergers, sales, or acquisitions</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">4. Contact Us</h2>
      <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at:</p>
      <p className="mt-2 font-semibold">DigiSky</p>
      <p>Email: <a href="digiskyhelp@gmail.com" className="text-blue-600">digiskyhelp@gmail.com</a></p>
      {/* <p>Address: Mohali,Punjab</p> */}
    </div>
  );
};

export default PrivacyPolicy;


