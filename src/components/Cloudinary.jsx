"use client";
import { useState } from "react";

function Cloudinary() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <div className="w-max mx-auto mt-4 lg:mt-0 xl:1/3 p-4 border border-slate-400 h-max">
      <form
        className="p-2 flex flex-col items-center border border-slate-600"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(); //crea una representacion del formulario en codigo .js
          formData.append("anyName", file); //agrega el archivo al formulario
          const res = await fetch("api/cloudinary", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          console.log("Image data", data);
          setImageUrl(data.url);
        }}
      >
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          className="w-max p-2 mt-4 mb-4 text-white bg-blue-500 hover:bg-blue-400 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
      <br />
      {imageUrl && (
        <>
          {/* <img src={imageUrl} alt="uploaded image" width={300} height={300} />*/}
          <p className="text-sm">{imageUrl}</p>
        </>
      )}
    </div>
  );
}

export default Cloudinary;
