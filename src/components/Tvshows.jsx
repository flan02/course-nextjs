//"use client";
//import { useState } from "react";

import { Suspense } from "react";

import Loading from "@/app/loading";
import TvshowGet from "./TvshowGet";

function Tvshows() {
  return (
    <section className="flex flex-col xl:flex-row mx-auto">
      <Suspense fallback={<Loading />}>
        <article className="grid grid-cols-1 px-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <TvshowGet />
        </article>
      </Suspense>
      {/* <TvshowGet setImage={setImage} /> */}
    </section>
  );
}

export default Tvshows;
