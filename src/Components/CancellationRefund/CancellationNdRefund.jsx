import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mb-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
      <p className="mb-4">
        At <span className="font-semibold">DigiSky</span>, we strive to ensure the satisfaction of both our freelancers and clients. However, we understand that there may be instances where a refund is necessary. This Refund Policy outlines the conditions under which refunds are issued and the process for requesting a refund.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Eligibility for Refunds</h2>
      <ul className="list-disc list-inside mt-2">
        <li><span className="font-semibold">Service Not Delivered:</span> If the freelancer fails to deliver the agreed-upon service within the specified timeframe and no satisfactory resolution is reached.</li>
        <li><span className="font-semibold">Service Not as Described:</span> If the delivered service significantly deviates from the agreed-upon terms or description provided by the freelancer.</li>
        <li><span className="font-semibold">Mutual Agreement:</span> If both the client and the freelancer mutually agree to cancel the project and request a refund.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">2. Refund Request Process</h2>
      <ul className="list-disc list-inside mt-2">
        <li><span className="font-semibold">Contact the Freelancer:</span> Initially, try to resolve the issue directly with the freelancer.</li>
        <li><span className="font-semibold">Submit a Refund Request:</span> If the issue remains unresolved, contact DigiSky customer support at <a href="digiskyhelp@gmail.com" className="text-blue-600">digiskyhelp@gmail.com</a>.</li>
        <li><span className="font-semibold">Investigation:</span> Our team will review the request, including communication and project details.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">3. Refund Approval</h2>
      <p className="mt-2">Upon approval, refunds will be processed to the original payment method within 5-8 business days. A notification email will be sent once the refund has been processed.</p>

      <h2 className="text-xl font-semibold mt-4">4. Non-Refundable Circumstances</h2>
      <ul className="list-disc list-inside mt-2">
        <li><span className="font-semibold">Change of Mind:</span> If you change your mind after the freelancer has started working.</li>
        <li><span className="font-semibold">Partial Satisfaction:</span> If there is no sufficient justification for a full refund.</li>
        <li><span className="font-semibold">Violation of Terms:</span> If the refund request results from a violation of DigiSky Terms and Conditions.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">5. Contact Us</h2>
      <p>If you have any questions or concerns about this Refund Policy, please contact us at:</p>
      <p className="mt-2 font-semibold">DigiSky</p>
      <p>Email: <a href="digiskyhelp@gmail.com" className="text-blue-600">digiskyhelp@gmail.com</a></p>
      {/* <p>Address: Mohali,Punjab</p> */}
    </div>
  );
};

export default RefundPolicy;
