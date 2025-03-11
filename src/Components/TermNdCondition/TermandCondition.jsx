import React from 'react';

const TermandCondition = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200'>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-10">
      <div className="min-w-full min-h-full"> {/* Removed max-w and added h-full */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 mx-auto max-w-screen-lg"> {/* Added max-w-screen-lg and mx-auto */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-[#004930]tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-black text-lg">
              Please read these terms carefully.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            {/* ... (Your Terms and Conditions content here) ... */}
            <p>
              <strong>1. Acceptance of Terms</strong>
            </p>
            <p>
              By accessing and using our service, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our service.
            </p>

            <p>
              <strong>2. Use of Service</strong>
            </p>
            <p>
              You agree to use our service only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the service by any third party.
            </p>

            <p>
              <strong>3. Intellectual Property</strong>
            </p>
            <p>
              All content provided on our service, including but not limited to text, graphics, logos, and software, is the property of Digisky and is protected by intellectual property laws.
            </p>
            <p>
              <strong>4. Limitation of Liability</strong>
            </p>
            <p>
              Digisky fusion shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our service.
            </p>
            <p>
              <strong>5. Changes to Terms</strong>
            </p>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the revised terms.
            </p>
           
            <p>
              <strong>6. Contact Information</strong>
            </p>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at digiskyhelp@gmail.com.
            </p>
            <p>
              <strong>7. User Accounts</strong>
            </p>
            <p>
              If our service requires you to create an account, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
            <p>
              <strong>8. Termination</strong>
            </p>
            <p>
              We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              <strong>9. Third-Party Links</strong>
            </p>
            <p>
              Our service may contain links to third-party websites or services that are not owned or controlled by Digisky. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </div>
          {/* <div className="mt-10 flex justify-center">
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => {
                alert('Terms and Conditions Accepted!');
              }}
            >
              Accept & Continue
            </button>
          </div> */}
        </div>
      </div>
    </div>
</div>
    </>
  );
};

export default TermandCondition;