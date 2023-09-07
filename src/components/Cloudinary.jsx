"use client";

import Image from "next/image";
import { Suspense, useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { BiCheck } from "react-icons/bi";
import Loader from "./Loader";

//* toast(<Loader />)  Podemos lanzar nuestro componente personalizado
//? Podemos generar un toast con un id personalizado para poder controlarlo
// const toastId = toast("Hello world")
/* 
setTimeout(() => {
  toast.success("Everything going well", {
  id: toastId,
})
}, 700);
*/

function load() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

function Cloudinary() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <form
        className="flex flex-col items-center justify-center gap-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          /*
          toast.promise(load, {
            loading: "loading...",
            success: "Image uploaded",
            error: "Error uploading image",
          });
          */
          const formData = new FormData(); //crea una representacion del formulario en codigo .js
          formData.append("anyName", file); //agrega el archivo al formulario
          const res = await fetch("api/cloudinary", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          /*
          toast("Image uploaded", {
            description: "You stored your image in cloudinary",
            icon: <BiCheck className="text-green-600 text-4xl pr-4" />,
            action: {
              label: "Accept",
              onClick: () => {
                toast("Your image was uploaded"); // podria ser una peticion de backend tmb
              },
            },
          });
*/ setImageUrl(data.url);
        }}
      >
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          type="submit"
          className="border border-orange-100 px-4 py-2 rounded-md bg-slate-800 hover:bg-orange-200 hover:text-slate-800"
        >
          Send
        </button>
      </form>
      <br />
      {imageUrl && (
        <>
          <img src={imageUrl} alt="uploaded image" width={300} height={300} />
          <p>{imageUrl}</p>
        </>
      )}
      <br /> <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aut illum
        voluptate! Fugiat, placeat cum, blanditiis dicta excepturi nemo, alias
        veniam inventore modi cupiditate minima explicabo neque corrupti
        accusamus quod.
      </p>
      <br />
      <button
        className="border border-orange-100 px-4 py-2 rounded-md bg-slate-800 hover:bg-orange-200 hover:text-slate-800"
        type="button"
        onClick={() => {
          toast.success("Everything going well"); // toast.error, toast.warning, toast.info
        }}
      >
        testing toast
      </button>
      <Toaster
        theme="dark"
        position="top-right"
        dir="ltr"
        visibleToasts={1}
        duration={3000}
        richColors
      />
    </div>
  );
}

export default Cloudinary;
