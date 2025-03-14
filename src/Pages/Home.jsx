function Home() {
  return (
    <>
      <h1 className="m-6 font-black">Events</h1>
      <div className="grid grid-cols-3 gap-2">
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
        </div>
      </div>
    </>
  );
}

export default Home;
