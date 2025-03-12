import React from 'react'
import { motion } from "framer-motion";

function CancellationNdRefund() {
  return (
   

    <motion.div
      className="max-w-3xl mx-auto px-6 py-12 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Cancellation & Refund Policy
      </h1>

      <p className="text-gray-700 mb-4">
        We understand that plans change. This policy explains our cancellation
        and refund terms.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Cancellation Policy</h2>
      <p className="text-gray-700 mb-4">
        - You can cancel your order within 24 hours of purchase for a full
        refund.  
        - Cancellations after 24 hours may be subject to a cancellation fee.  
        - To cancel your order, contact our support team at{" "}
        <a href=" digiskyhelp@gmail.com." className="text-blue-600 underline">
        digiskyhelp@gmail.com.
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Refund Policy</h2>
      <p className="text-gray-700 mb-4">
        - Refunds are processed within 7-10 business days after approval.  
        - If the service has already been used, a refund may not be available.  
        - Refunds will be issued to the original payment method.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Late or Missing Refunds</h2>
      <p className="text-gray-700 mb-4">
        - If you haven't received a refund, first check your bank account.  
        - Then contact your credit card company, as processing time may vary.  
        - If you've done all this and still haven't received your refund, contact us.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Non-Refundable Items</h2>
      <p className="text-gray-700 mb-4">
        - Digital products that have been downloaded or accessed.  
        - Services already rendered.  
        - Customized or personalized products.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions, contact us at{" "}
        <a href=" digiskyhelp@gmail.com." className="text-blue-600 underline">
        digiskyhelp@gmail.com.
        </a>
        .
      </p>
    </motion.div>
  );
}

      
   
export default CancellationNdRefund;
