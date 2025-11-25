// src/components/PaymentButton.tsx
import React, { useState } from 'react';
import { CreditCard, Loader } from 'lucide-react';
import { initiateDirectPayment } from '../utils/razorpay';

interface PaymentButtonProps {
  amount: number; // Fixed amount from packages page
  packageName: string;
  packageDescription: string;
  onSuccess: (paymentId: string) => void;
  onFailure: (error: string) => void;
  className?: string;
  children?: React.ReactNode;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount, // ✅ Yeh fixed amount hai jo packages se aayega
  packageName,
  packageDescription,
  onSuccess,
  onFailure,
  className = "",
  children
}) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (loading) return;
    
    setLoading(true);
    console.log('🚀 Starting payment for fixed amount:', amount);

    try {
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
      
      if (!razorpayKey) {
        throw new Error('Payment gateway not configured');
      }

      // ✅ Yaha pe fixed amount hi use hoga
      const paymentAmount = amount; // No changes to amount

      // User details (yeh tum user se input le sakte ho)
      const userDetails = {
        name: 'Customer Name', // Replace with actual
        email: 'customer@example.com', // Replace with actual  
        phone: '+919999999999' // Replace with actual
      };

      console.log(`💰 Processing fixed amount: ₹${paymentAmount}`);

      await initiateDirectPayment(
        paymentAmount, // ✅ Fixed amount as is
        packageName,
        userDetails,
        // Success
        (response) => {
          console.log('✅ Payment successful');
          onSuccess(response.razorpay_payment_id);
          setTimeout(() => {
            window.location.href = '/payment/success';
          }, 1000);
          setLoading(false);
        },
        // Failure
        (error) => {
          console.error('❌ Payment failed:', error);
          onFailure(error);
          setTimeout(() => {
            window.location.href = '/payment/failed';
          }, 1000);
          setLoading(false);
        }
      );

    } catch (error: any) {
      console.error('💥 Payment error:', error);
      onFailure(error.message || 'Payment failed');
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <>
          <Loader className="h-5 w-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <CreditCard className="h-5 w-5" />
          <span>{children || `Pay ₹${amount}`}</span> 
          {/* ✅ Button pe bhi fixed amount dikhega */}
        </>
      )}
    </button>
  );
};

export default PaymentButton;