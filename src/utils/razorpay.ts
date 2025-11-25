// src/utils/razorpay.ts
export const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      console.log('✅ Razorpay already loaded');
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      console.log('✅ Razorpay script loaded successfully');
      resolve(true);
    };
    script.onerror = (error) => {
      console.error('❌ Failed to load Razorpay script:', error);
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    package: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

// ✅ DIRECT PAYMENT - No backend needed
export const initiateDirectPayment = async (
  amount: number, 
  packageName: string, 
  userDetails: { name: string; email: string; phone: string },
  onSuccess: (response: any) => void,
  onFailure: (error: string) => void
): Promise<void> => {
  try {
    console.log('💰 Initiating direct payment for:', packageName, 'Amount:', amount);

    // Load Razorpay first
    const razorpayLoaded = await loadRazorpay();
    if (!razorpayLoaded) {
      onFailure('Razorpay failed to load');
      return;
    }

    // Get Razorpay key from environment
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      onFailure('Razorpay key not configured');
      return;
    }

    // Razorpay options for direct payment
    const options: any = {
      key: razorpayKey,
      amount: amount * 1, // Convert to paise
      currency: 'INR',
      name: 'KPrealtors',
      description: `Package: ${packageName}`,
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      notes: {
        package: packageName,
      },
      theme: {
        color: '#2563eb',
      },
      handler: function (response: any) {
        console.log('✅ Payment successful:', response);
        
        // ✅ Direct success - no verification needed
        if (response.razorpay_payment_id) {
          onSuccess(response);
        } else {
          onFailure('Payment ID not received');
        }
      },
      modal: {
        ondismiss: function() {
          console.log('❌ Payment cancelled by user');
          onFailure('Payment cancelled');
        }
      }
    };

    // Create Razorpay instance and open
    const razorpayInstance = new (window as any).Razorpay(options);
    razorpayInstance.open();

  } catch (error) {
    console.error('❌ Payment initiation error:', error);
    onFailure(error instanceof Error ? error.message : 'Payment failed');
  }
};

// ✅ Simple payment function with minimal parameters
export const simplePayment = (
  amount: number,
  packageName: string,
  userName: string,
  userEmail: string,
  userPhone: string
): void => {
  const userDetails = {
    name: userName,
    email: userEmail,
    phone: userPhone
  };

  initiateDirectPayment(
    amount,
    packageName,
    userDetails,
    // Success callback
    (response) => {
      console.log('🎉 Payment Completed!', response);
      alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      // Redirect or update UI here
      window.location.href = '/payment-success';
    },
    // Failure callback
    (error) => {
      console.error('💥 Payment Failed:', error);
      alert(`Payment Failed: ${error}`);
      // Handle failure UI here
    }
  );
};