function Details() {
  return (
    <>
    <div className="flex ml-6 gap-8">
    <img src="https://splash.festivalcdn.de/image?url=https://media.appmiral.com/prod/card/0055/24/thumb_5423182_card_720.jpeg&w=1920&q=75" alt="Splash-Image" 
    className="rounded-2xl w-2/5" />
        <div className="w-3/5">
            <div className="border-2 rounded-2xl p-8"><h2 className="font-bold">Titel</h2><h2>Datum</h2><h2>Ort</h2></div>
            <p className="border-2 rounded-2xl p-8">Description</p>
            <p className="border-2 rounded-2xl p-8">Location</p>
            <p className="border-2 rounded-2xl p-8">Preis</p>
        </div>
    </div>


    </>
  )
}

export default Details