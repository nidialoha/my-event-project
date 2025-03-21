import Empty from "./Empty";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvider";

function Home() {
  const { isAuthenticated } = useAuth();
  const [events, setEvents] = useState([]);
  const [editingEventId, setEditingEventId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/events", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (data && Array.isArray(data.results)) {
          setEvents(data.results);
        } else {
          console.error("Expected an array but got:", data);
          setEvents([]);
        }
      } catch (error) {
        console.log(error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = (event) => {
    setEditingEventId(event.id);
    setEditFormData({
      title: event.title,
      date: event.date.slice(0, 10),
      location: event.location,
      description: event.description,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) throw Error("No User");

      const res = await fetch(
        `http://localhost:3001/api/events/${editingEventId}`,
        {
          method: "PUT",
          body: JSON.stringify(editFormData),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res.ok) {
        const updatedEvent = await res.json();
        setEvents(
          events.map((event) =>
            event.id === editingEventId ? updatedEvent : event
          )
        );
        setEditingEventId(null);
      } else {
        console.error("Failed to update event");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (eventId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw Error("No User");

      const res = await fetch(`http://localhost:3001/api/events/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        setEvents(events.filter((event) => event.id !== eventId));
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isAuthenticated) {
    return <Empty />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="card bg-base-100 shadow-xl p-4">
            {editingEventId === event.id ? (
              <form onSubmit={handleEditSubmit}>
                <p>Name</p>
                <input
                  className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-2"
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  placeholder="Enter event title"
                />
                <p>Date</p>
                <input
                  className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-2"
                  type="date"
                  name="date"
                  value={editFormData.date}
                  onChange={handleEditChange}
                />
                <p>Location</p>
                <input
                  className="w-full h-10 rounded-md border-2 border-gray-300 p-2 mb-2"
                  type="text"
                  name="location"
                  value={editFormData.location}
                  onChange={handleEditChange}
                  placeholder="Enter event location"
                />
                <p>Description</p>
                <textarea
                  className="w-full h-32 rounded-md border-2 border-gray-300 p-2 mb-2"
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  placeholder="Enter event description"
                ></textarea>
                <button className="btn btn-primary w-full mb-2" type="submit">
                  Save
                </button>
                {/* <button
                  className="btn btn-secondary w-full"
                  onClick={() => setEditingEventId(null)}
                >
                  Cancel
                </button> */}
              </form>
            ) : (
              <>
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p>{event.date.slice(0, 10)}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(event)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
