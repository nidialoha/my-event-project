import axios from "axios";
import { useEffect, useState } from "react";
import eventCard from "../Components/eventCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const event1 = {
    id: 1,
    title: "Disney on ice",
    description: "Some Description for the Event",
    date: "2025-03-18T10:37:10.580Z",
    location: "Schloßbezirk 10, 76131 Karlsruhe",
    latitude: 8.404746955649602,
    longitude: 49.01438194665317,
    organizerId: 1,
    createdAt: "2025-03-18T10:37:10.580Z",
    updatedAt: "2025-03-18T10:37:10.580Z",
  };

  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/events");
        // console.log(response);
        setEvent(response.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, []);

  const navigate = useNavigate();
  const showMoreBtn = () => {
    navigate("show-more-page");
  };

  return (
    <>
      <h1 className="m-6 font-black">Events</h1>
      <div className="grid grid-cols-3 gap-2">
        <div className="card bg-base-100 w-96 shadow-sm m-6">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2016/11/20/09/12/castle-1842324_1280.jpg"
              alt="konzert1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {event1.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <p>{event1.date}</p>
            </div>
            <p>{event1.description}</p>
            <button
              className="mt-6 bg-slate-950 rounded-lg h-[35px] text-white hover:bg-stone-300 text-center content-center"
              onClick={showMoreBtn}
            >
              Show More
            </button>
            {/* <div className="card-actions justify-end">
              <div className="badge badge-outline">Rock</div>
              <div className="badge badge-outline">Classic</div>
            </div> */}
          </div>
        </div>

        {/* {event.map((newEvent) => (
          <eventCard key={newEvent.id} events={newEvent.title} />
        ))} */}

        {/* <div className="card bg-base-100 w-96 shadow-sm m-6">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2019/03/12/20/29/music-4051779_1280.jpg"
              alt="konzert1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <p>Ort, Datum 2025</p>
            </div>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Rock</div>
              <div className="badge badge-outline">Classic</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm m-6">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2019/03/12/20/29/music-4051779_1280.jpg"
              alt="konzert1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <p>Ort, Datum 2025</p>
            </div>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Rock</div>
              <div className="badge badge-outline">Classic</div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
