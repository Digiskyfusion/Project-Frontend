import React from 'react'
import { motion } from "framer-motion";

function ShippingNdDelivery() {
  return (
 
    <motion.div
      className="max-w-3xl mx-auto px-6 py-12 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Shipping & Delivery Policy
      </h1>

      <p className="text-gray-700 mb-4">
        Thank you for shopping with us! This policy outlines our shipping and
        delivery process to ensure a smooth experience.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Processing Time</h2>
      <p className="text-gray-700 mb-4">
        - Orders are processed within 1-3 business days.  
        - Orders placed on weekends or holidays will be processed on the next business day.  
        - You will receive a confirmation email once your order is shipped.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Shipping Rates & Delivery Estimates</h2>
      <p className="text-gray-700 mb-4">
        - Standard shipping: 5-7 business days.  
        - Express shipping: 2-3 business days.  
        - International shipping: 7-14 business days.  
        - Shipping costs are calculated at checkout based on location and package weight.
      </p>

      <h2 className="text-xl font-semibold mt-6">3. Tracking Your Order</h2>
      <p className="text-gray-700 mb-4">
        - Once shipped, you will receive an email with tracking details.  
        - You can track your order using the link provided in the email.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Shipping Restrictions</h2>
      <p className="text-gray-700 mb-4">
        - We currently do not ship to P.O. Boxes or APO/FPO addresses.  
        - Some remote locations may experience longer delivery times.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Lost or Damaged Packages</h2>
      <p className="text-gray-700 mb-4">
        - If your package is lost or arrives damaged, please contact us within 7 days.  
        - We will work with the shipping carrier to resolve the issue.
      </p>

      <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions, contact us at{" "}
        <a href="digiskyhelp@gmail.com." className="text-blue-600 underline">
        digiskyhelp@gmail.com.
        </a>
        .
      </p>
    </motion.div>
  );
}

      
   


export default ShippingNdDelivery
