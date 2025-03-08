import React from 'react';

const TermsAndConditions = () => {
  const handleAccept = () => {
    // Implement your acceptance logic here (e.g., store in local storage, send to server)
    alert('Terms and Conditions Accepted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Terms and Conditions</h1>
            </div>
            <div className="divide-y divide-gray-200 mt-6 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {/* Your terms and conditions content here (same as before) */}
                <p>
                  <strong>1. Acceptance of Terms</strong>
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                </p>

                <p>
                  <strong>2. Use of Services</strong>
                </p>
                <p>
                  You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions. You agree not to engage in any activity that could damage, disable, or impair our services.
                </p>

                <p>
                  <strong>3. Intellectual Property</strong>
                </p>
                <p>
                  All content and materials provided on our services are the property of [Your Company] and are protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
                </p>

                <p>
                  <strong>4. Limitation of Liability</strong>
                </p>
                <p>
                  [Your Company] shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our services.
                </p>

                <p>
                  <strong>5. Changes to Terms</strong>
                </p>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
                </p>

                <p>
                  <strong>6. Governing Law</strong>
                </p>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
                </p>

                <p>
                  <strong>7. Contact Information</strong>
                </p>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at [Your Email Address].
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleAccept}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-colors duration-300"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;