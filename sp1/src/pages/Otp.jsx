import React, { useState , useRef} from "react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  // State for OTP input
  const inputsRef = useRef([]);
  const [user, setUser] = useState({ otp: "" });
  const navigate = useNavigate();

  // Function to handle OTP input changes
  const handleOTPChange = (e) => {
    const { value } = e.target;
    // Update the `otp` field in the user object
    
    if (value.length === 1 && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    // Clear and move to the previous field if backspace is pressed
    if (value === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
    setUser({ ...user, otp: value });
  };

  // Function to handle submission of OTP
  const handleSubmit = () => {
    console.log("Entered OTP:", user.otp);
    // Add logic to verify OTP
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Email Icon */}
      <div className="mb-6">
        <img
          src="https://imgs.search.brave.com/aOj_PlCvfpibVcM9p_um6Qzz32F-YlKqpWBqUZokzDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8y/MC8yMS82L2luYm94/LWJ5LWdtYWlsLWVt/YWlsLWdvb2dsZS1h/Y2NvdW50LWljb24t/cG5nLWZhdnBuZy1T/RTFkTmNCRVl2R3RN/OGs5d0p0WXdQY3li/X3QuanBn"
          alt="OTP Email"
          className="w-22 h-16"
        />
      </div>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-700 text-center mb-2">
        Check your email for OTP
      </h1>
      <p className="text-gray-600 text-center mb-6">
        An OTP has been sent to your registered email address.
      </p>

      {/* OTP Input */}
      <div className="flex justify-center space-x-2 mb-6">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            ref={(el) => (inputsRef.current[index] = el)}
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:ring focus:ring-red-300"
            onChange={(e) => handleOTPChange(e,index)}
            onKeyDown={(e) => {
            if (e.key === "Backspace" && index > 0 && !e.target.value) {
              inputsRef.current[index - 1].focus();
            }
            }}

          />
        ))}
      </div>

      {/* Submit OTP Button */}
      <button
        onClick={handleSubmit}
        className="w-full max-w-xs bg-red-500 text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition duration-200 mb-4"
      >
        Verify OTP
      </button>

      {/* Resend OTP Button */}
      <button className="w-full max-w-[12rem] border border-gray-300 text-gray-600 font-semibold py-2 rounded-lg hover:bg-gray-200 transition duration-200">
        Resend OTP
      </button>
    </div>
  );
};

export default Otp;