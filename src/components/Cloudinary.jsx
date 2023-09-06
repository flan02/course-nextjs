"use client";

import Image from "next/image";
import { useState } from "react";

function Cloudinary() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <div>
      <form
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
        <button type="submit">Send</button>
      </form>
      <br />
      {imageUrl && (
        <>
          <img src={imageUrl} alt="uploaded image" width={300} height={300} />
          <p>{imageUrl}</p>
        </>
      )}
    </div>
  );
}

export default Cloudinary;
