import React, { useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function CreateEvent() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceSelect = (autocomplete) => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setFormData((prevData) => ({
        ...prevData,
        location: place.formatted_address || "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = [formData, ...existingEvents];
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setFormData({
      name: "",
      date: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Create Event</h1>
      <div className="flex sm:flex-row flex-col items-center justify-center space-x-4 text-center">
        <img
          src="https://img.freepik.com/free-vector/music-concert-vertical-banner_23-2150921484.jpg"
          alt="Event"
          className="w-1/4 sm:w-1/2 ml-2 h-full"
        />
        <form onSubmit={handleSubmit} className="w-1/2 sm:w-full space-y-4">
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              className="w-full h-10 rounded-md border-2 border-gray-300 p-2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter event name"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="date" className="text-sm font-medium text-gray-200">
              Date
            </label>
            <input
              className="w-full h-10 rounded-md border-2 border-gray-300 p-2"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
            <div className="flex flex-col items-center">
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-200"
              >
                Location
              </label>

              <Autocomplete
                className="w-full"
                onLoad={(autocomplete) => (window.autocomplete = autocomplete)}
                onPlaceChanged={() => handlePlaceSelect(window.autocomplete)}
              >
                <input
                  className="w-full h-10 rounded-md border-2 border-gray-300 p-2"
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Start typing a location"
                />
              </Autocomplete>
            </div>
          </LoadScript>
          <div className="flex flex-col items-center">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-200"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-32 rounded-md border-2 border-gray-300 p-1"
              placeholder="Enter event description"
            ></textarea>
          </div>
          <button
            className="w-full py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            type="submit"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
