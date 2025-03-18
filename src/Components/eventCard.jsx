function eventCard({ newEvent }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div className="card bg-base-100 w-96 shadow-sm m-6">
          <figure>
            <img src={newEvent.img} alt={newEvent.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {newEvent.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <p>{newEvent.date}</p>
            </div>
            <p>{newEvent.description}</p>
            <button className="mt-6 bg-slate-950 rounded-lg h-[35px] text-white hover:bg-stone-300 text-center content-center">
              show more
            </button>
            {/* <div className="card-actions justify-end">
              <div className="badge badge-outline">Rock</div>
              <div className="badge badge-outline">Classic</div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default eventCard;
