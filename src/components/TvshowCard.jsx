function TvshowCard({ item, index }) {
  return (
    <>
      <div key={index} className="m-2 border border-slate-200">
        <img className="object-center w-full h-min" src={item} alt={item} />
      </div>
    </>
  );
}

export default TvshowCard;
