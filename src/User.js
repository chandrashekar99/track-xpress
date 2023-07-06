
import React, { useState } from "react";
import './User.css';
import MapContainer from "./MapContainer";


function LoginFrom() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform phone number verification with OTP
    if (otp === '123456') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
          <div class="form">
            <h1>Track Xpress</h1>
            <form>
              <input type="text" id="phoneNumber" maxLength={10} placeholder="Enter Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
              <input type="text" id="otp" maxLength={6} placeholder="Enter OTP Here"
                value={otp}
                onChange={(e) => setOtp(e.target.value)} />
              <button class="btnn" onClick={handleLogin}>Login</button>
            </form>
          </div>
        </>

      ) : (
        <div>
          {/* Display the rest of your application */}
          <MapContainer />
        </div>
      )}
    </>
  )
}

export default LoginFrom;
