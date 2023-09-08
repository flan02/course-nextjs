import React from "react";

function TvshowGet({ setImage }) {
  return (
    <button
      onClick={async () => {
        const res = await fetch("http://localhost:3000/api/cloudinary");
        const image = await res.json();
        console.log(image);
        setImage(image);
      }}
      className="mx-auto mb-2 w-max p-2 mt-4 text-white bg-slate-600 hover:bg-slate-500 rounded-md"
      type="button"
    >
      get image
    </button>
  );
}

export default TvshowGet;
