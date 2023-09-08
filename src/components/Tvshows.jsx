"use client";
import { useState } from "react";
import TvshowGet from "./TvshowGet";
import TvshowCard from "./TvshowCard";
function Tvshows() {
  const [image, setImage] = useState(null);
  let grid;
  if (image) grid = "grid-cols-4 border border-slate-200";
  else grid = "grid-cols-6 h-96 border border-slate-200";
  return (
    <section className="flex flex-col">
      <nav className="w-max mx-auto my-6">
        <h1 className="text-6xl text-slate-700">Tvshows</h1>
      </nav>
      <article className={`grid ${grid}`}>
        {(image &&
          image.url_image.map((item, index) => (
            <TvshowCard item={item} key={index} />
          ))) || (
          <>
            <div className="w-96 h-max my-auto ml-96">
              <h2 className="text-5xl text-slate-600">No image</h2>
            </div>
          </>
        )}
      </article>
      <TvshowGet setImage={setImage} />
    </section>
  );
}

export default Tvshows;
