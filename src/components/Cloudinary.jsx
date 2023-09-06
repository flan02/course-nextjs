"use client";

import { useState } from "react";

function Cloudinary() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(); //crea una representacion del formulario en codigo .js
          formData.append("any_name", file); //agrega el archivo al formulario
          const res = await fetch("api/cloudinary", {
            method: "POST",
            body: formData,
            headers: {
              //"Content-Type": "multipart/form-data",
              //"Content-Type": "application/json",
            },
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Cloudinary;
