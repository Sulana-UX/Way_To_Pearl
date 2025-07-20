import React, { useState } from "react";
import "./admin.css";

const HotelOwnerDashboard = () => {
  const [hotelName, setHotelName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [packages, setPackages] = useState([{ name: "", price: "" }]);
  const [facilities, setFacilities] = useState([""]);
  const [photos, setPhotos] = useState([]);
  const [roomsAvailable, setRoomsAvailable] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const handleAddPackage = () => {
    setPackages([...packages, { name: "", price: "" }]);
  };

  const handlePackageChange = (index, field, value) => {
    const newPackages = [...packages];
    newPackages[index][field] = value;
    setPackages(newPackages);
  };

  const handleAddFacility = () => {
    setFacilities([...facilities, ""]);
  };

  const handleFacilityChange = (index, value) => {
    const newFacilities = [...facilities];
    newFacilities[index] = value;
    setFacilities(newFacilities);
  };

  const handlePhotoChange = (e) => {
    setPhotos(Array.from(e.target.files));
  };

  const generateEmbedUrl = () => {
    if (!locationInput.trim()) return "";
    const query = encodeURIComponent(locationInput);
    return `https://www.google.com/maps?q=${query}&output=embed`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("hotelName", hotelName);
    formData.append("registrationNumber", registrationNumber);
    formData.append("roomsAvailable", roomsAvailable);
    formData.append("location", locationInput);

    formData.append("packages", JSON.stringify(packages));
    formData.append("facilities", JSON.stringify(facilities));

    photos.forEach((photo) => {
      formData.append("photos[]", photo);
    });

    fetch("http://localhost/way_to_pearl/backend/api/hotelD.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          alert("Hotel saved successfully!");
        } else {
          alert("Server error: " + data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Check your backend & console.");
      });
  };

  return (
    <div className="owner-dashboard">
      <h1>Hotel Owner Dashboard</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Hotel Name:</label>
        <input
          type="text"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          required
        />

        <label>Registration Number:</label>
        <input
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <label>Packages:</label>
        {packages.map((pkg, index) => (
          <div key={index} className="package-item">
            <input
              type="text"
              placeholder="Package Name"
              value={pkg.name}
              onChange={(e) =>
                handlePackageChange(index, "name", e.target.value)
              }
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={pkg.price}
              onChange={(e) =>
                handlePackageChange(index, "price", e.target.value)
              }
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddPackage}>
          Add Package
        </button>

        <label>Facilities:</label>
        {facilities.map((facility, index) => (
          <div key={index} className="facility-item">
            <input
              type="text"
              placeholder="Facility"
              value={facility}
              onChange={(e) => handleFacilityChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddFacility}>
          Add Facility
        </button>

        <label>Upload Hotel Photos:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handlePhotoChange}
        />

        {photos.length > 0 && (
          <div className="photos-preview">
            <h3>Photos Preview:</h3>
            <div className="photos-grid">
              {photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(photo)}
                  alt={`Preview ${idx}`}
                  style={{ width: "150px", margin: "10px" }}
                />
              ))}
            </div>
          </div>
        )}

        <label>Rooms Available:</label>
        <input
          type="number"
          value={roomsAvailable}
          onChange={(e) => setRoomsAvailable(e.target.value)}
          required
        />

        <label>Hotel Location:</label>
        <input
          type="text"
          placeholder="Ex: Silver Crown Hotel, Anuradhapura"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          required
        />

        {locationInput.trim() && (
          <div className="map-preview">
            <h3>Map Preview:</h3>
            <iframe
              src={generateEmbedUrl()}
              title="Hotel Location"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}

        <button type="submit" className="submit-btn">
          Save Hotel Template
        </button>
      </form>
    </div>
  );
};

export default HotelOwnerDashboard;
