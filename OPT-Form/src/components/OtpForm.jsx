import React, { useState } from 'react';

const OtpForm = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(false);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue === '1234') { // Mock successful OTP
      setError(false);
      alert('OTP Verified Successfully!');
    } else {
      setError(true);
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);
    setError(false);
    alert('OTP Resent!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
        <div className="flex space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        {error && (
          <div className="text-red-500 mb-4">
            Incorrect OTP. Please try again.
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Verify OTP
        </button>
        {error && (
          <div className="mt-4 text-center">
            <p>Didn't receive an OTP?</p>
            <button
              type="button"
              onClick={handleResend}
              className="text-blue-500 hover:underline"
            >
              Resend
            </button>
          </div>
        )}
      </form>
      <a href="https://chaicode.com" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4">
        <img src="/logo.jpg" alt="Chaicode Logo" className="w-16 h-16" />
      </a>
    </div>
  );
};

export default OtpForm;
