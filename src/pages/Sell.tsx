// Sell.tsx
import React, { useState } from 'react';
import PaymentButton from '../components/PaymentButton';

const Sell: React.FC = () => {
  const [formData, setFormData] = useState({
    propertyType: '',
    title: '',
    location: '',
    price: '',
    area: '',
    beds: '',
    baths: '',
    description: '',
    ownerName: '',
    phone: '',
    email: '',
    images: [] as File[]
  });

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const propertyTypes = [
    'Apartment',
    'Independent House',
    'Villa',
    'Floor',
    'Independent Floor',
    'Commercial Shop',
    'Agriculture Land',
    'Farm House Land',
    'R Zone Land'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        images: Array.from(e.target.files!)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (paymentId: string) => {
    alert(`Payment Successful! Your property listing will be active soon. Payment ID: ${paymentId}`);
    setShowPaymentModal(false);
    // Reset form after successful payment
    setFormData({
      propertyType: '',
      title: '',
      location: '',
      price: '',
      area: '',
      beds: '',
      baths: '',
      description: '',
      ownerName: '',
      phone: '',
      email: '',
      images: []
    });
    setCurrentStep(1);
  };

  const handlePaymentFailure = (error: string) => {
    alert(`Payment Failed: ${error}`);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const listingFee = 999; // ₹999 listing fee

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sell Your Property</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            List your property with us and reach thousands of genuine buyers
          </p>
          <p className="text-lg opacity-90">
            Quick • Secure • Premium Visibility
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step === currentStep 
                    ? 'bg-green-600 text-white' 
                    : step < currentStep 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {step < currentStep ? '✓' : step}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-4 ${
                    step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 px-2">
            <span className={currentStep >= 1 ? 'text-green-600 font-semibold' : ''}>Property Details</span>
            <span className={currentStep >= 2 ? 'text-green-600 font-semibold' : ''}>Contact Info</span>
            <span className={currentStep >= 3 ? 'text-green-600 font-semibold' : ''}>Review & Pay</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Property Details */}
            {currentStep === 1 && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Property Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Property Type */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    >
                      <option value="">Select Property Type</option>
                      {propertyTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Property Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="e.g., Beautiful 3BHK Apartment in Prime Location"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Location */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Address *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter complete address with landmark"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Price and Area */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Expected Price (₹) *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., 5000000"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Area (sq ft) *
                    </label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder="e.g., 1500"
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Beds and Baths */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      name="beds"
                      value={formData.beds}
                      onChange={handleInputChange}
                      placeholder="e.g., 3"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      name="baths"
                      value={formData.baths}
                      onChange={handleInputChange}
                      placeholder="e.g., 2"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Property Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your property features, amenities, location advantages..."
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Image Upload */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Property Images *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                        required
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-gray-600 mb-2">Click to upload property images</p>
                        <p className="text-sm text-gray-500">Maximum 10 images • PNG, JPG, JPEG</p>
                      </label>
                    </div>
                    {formData.images.length > 0 && (
                      <p className="text-green-600 mt-2">{formData.images.length} images selected</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
                  >
                    Next: Contact Details →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-600 transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
                  >
                    Next: Review & Pay →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review & Payment */}
            {currentStep === 3 && (
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Review Your Listing</h2>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><strong>Type:</strong> {formData.propertyType}</div>
                    <div><strong>Title:</strong> {formData.title}</div>
                    <div><strong>Location:</strong> {formData.location}</div>
                    <div><strong>Price:</strong> ₹{parseInt(formData.price).toLocaleString()}</div>
                    <div><strong>Area:</strong> {formData.area} sq ft</div>
                    <div><strong>Bedrooms:</strong> {formData.beds || 'Not specified'}</div>
                    <div><strong>Bathrooms:</strong> {formData.baths || 'Not specified'}</div>
                  </div>
                  <div className="mt-4">
                    <strong>Description:</strong>
                    <p className="text-gray-600 mt-1">{formData.description}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><strong>Name:</strong> {formData.ownerName}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Images:</strong> {formData.images.length} uploaded</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Listing Package</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Premium Listing</h4>
                      <p className="text-gray-600">30 days visibility • Featured placement • Priority in search</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">₹{listingFee}</div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-600 transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
                  >
                    Pay ₹{listingFee} & List Property
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Payment</h3>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Premium Property Listing</h4>
              <p className="text-gray-600 text-sm mb-2">One-time payment for 30 days</p>
              <p className="text-xl font-bold text-green-600">₹{listingFee}</p>
            </div>

            <div className="space-y-4">
              <PaymentButton
                amount={listingFee * 100} // Convert to paise
                currency="INR"
                onSuccess={handlePaymentSuccess}
                onFailure={handlePaymentFailure}
                description="Premium Property Listing Fee"
              />
              
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full bg-gray-500 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              🔒 Secure payment powered by Razorpay
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why List With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
              <p className="text-gray-600">Connect with thousands of verified buyers across platforms</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quick Listing</h3>
              <p className="text-gray-600">Your property goes live within hours of verification</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
              <p className="text-gray-600">End-to-end encrypted process with privacy protection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;