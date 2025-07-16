import React, { useState } from "react";
import "./signup.css";

const countryData = [
  { name: "Sri Lanka", code: "+94" },
  { name: "India", code: "+91" },
  { name: "USA/Canada", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "Japan", code: "+81" },
  { name: "France", code: "+33" },
  { name: "Germany", code: "+49" },
  { name: "Italy", code: "+39" },
  { name: "Russia", code: "+7" },
  { name: "China", code: "+86" },
  { name: "Spain", code: "+34" },
  { name: "Brazil", code: "+55" },
  { name: "South Africa", code: "+27" },
  { name: "New Zealand", code: "+64" },
  { name: "Singapore", code: "+65" },
  { name: "Malaysia", code: "+60" },
  { name: "Thailand", code: "+66" },
  { name: "Bangladesh", code: "+880" },
  { name: "Pakistan", code: "+92" },
  { name: "South Korea", code: "+82" },
  { name: "Indonesia", code: "+62" },
  { name: "Egypt", code: "+20" },
  { name: "Morocco", code: "+212" },
  { name: "UAE", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Turkey", code: "+90" },
  { name: "Poland", code: "+48" },
  { name: "Netherlands", code: "+31" },
  { name: "Switzerland", code: "+41" },
  { name: "Sweden", code: "+46" },
  { name: "Norway", code: "+47" },
  { name: "Finland", code: "+358" },
  { name: "Nigeria", code: "+234" },
  { name: "Kenya", code: "+254" },
  { name: "Uganda", code: "+256" },
  { name: "Vietnam", code: "+84" },
  { name: "Philippines", code: "+63" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Ukraine", code: "+380" },
  { name: "Estonia", code: "+372" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Moldova", code: "+373" },
  { name: "Belarus", code: "+375" },
  { name: "Romania", code: "+40" },
  { name: "Austria", code: "+43" },
  { name: "Czech Republic", code: "+420" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Croatia", code: "+385" },
  { name: "Serbia", code: "+381" },
  { name: "Hungary", code: "+36" },
  { name: "Belgium", code: "+32" },
  { name: "Denmark", code: "+45" },
  { name: "Ireland", code: "+353" },
  { name: "Mexico", code: "+52" },
  { name: "Chile", code: "+56" },
  { name: "Colombia", code: "+57" },
  { name: "Venezuela", code: "+58" },
  { name: "Peru", code: "+51" },
  { name: "Argentina", code: "+54" },
  { name: "Bolivia", code: "+591" },
  { name: "Paraguay", code: "+595" },
  { name: "Uruguay", code: "+598" },
];

const SignUpPage = () => {
  const [role, setRole] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    const found = countryData.find((c) => c.name === country);
    setCountryCode(found ? found.code : "");
  };

  return (
    <div className="signup-page">
      <div className="signup-background"></div>
      <div className="signup-container">
        <h2>Welcome to Way To Pearl</h2>
        <p className="subtitle">Create your account to get started</p>
        <label htmlFor="role">Select User Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="tourist">Tourist</option>
          <option value="guider">Guider</option>
          <option value="hotel">Hotel Management</option>
          <option value="vehicle">Vehicle Owner</option>
        </select>
        {role === "tourist" && (
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Age" required />
            <select required value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {countryData.map((c) => (
                <option key={c.code} value={c.name}>{c.name}</option>
              ))}
            </select>
            <select required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
              <input type="text" value={countryCode} placeholder="Country Code" readOnly style={{ minWidth: '110px', background: '#f4f4f4' }} />
              <input type="text" placeholder="Contact Number" required style={{flex: 1}} />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Preferred Language" required />
            <button type="submit">Sign Up</button>
          </form>
        )}

        {role === "guider" && (
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="number" placeholder="Age" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Contact Number" required />
            <select required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" placeholder="Language" required />
            <button type="submit">Sign Up</button>
          </form>
        )}

        {role === "hotel" && (
          <form>
            <input type="text" placeholder="Hotel Name" required />
            <input type="text" placeholder="Located Area" required />
            <input type="text" placeholder="Hotel Registration Number" required />
            <input type="text" placeholder="Contact Number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Sign Up</button>
          </form>
        )}

        {role === "vehicle" && (
          <form>
            <input type="text" placeholder="Owner Name" required />
            <input type="text" placeholder="Type of Vehicle" required />
            <input type="text" placeholder="Contact Number" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;

