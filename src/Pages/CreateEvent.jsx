import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const navigate = useNavigate();
  const postEvent = async () => {
    const newEvent = {
      title: formData.title,
      date: formData.date,
      location: formData.location,
      description: formData.description,
    };
    try {
      const token = localStorage.getItem("token");
      if (!token) throw Error("No User");

      const res = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        body: JSON.stringify(newEvent),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = [formData, ...existingEvents];
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    await postEvent();
    setFormData({
      title: "",
      date: "",
      location: "",
      description: "",
    });
    setImageUrl("");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Create Event</h1>
      <div>
        <div className="flex flex-col items-center justify-center space-x-4 text-center gap-4">
          {/* <input
            type="text"
            placeholder="Unesi URL slike..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border p-2 w-1/2 sm:w-1/3 rounded"
          /> */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Event"
              className="w-1/4 sm:w-1/2 ml-2 h-full object-cover"
            />
          )}
        </div>
        <form onSubmit={handleSubmit} className="w-1/2 sm:w-full space-y-4">
          <div className="flex flex-col items-center">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              className="w-full h-10 rounded-md border-2 border-gray-300 p-2"
              type="text"
              id="name"
              name="title"
              value={formData.title}
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

          <div className="flex flex-col items-center">
            <label
              htmlFor="location"
              className="text-sm font-medium text-gray-200"
            >
              Location
            </label>
            <input
              className="w-full h-10 rounded-md border-2 border-gray-300 p-2"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Start typing a location"
            />
          </div>

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
