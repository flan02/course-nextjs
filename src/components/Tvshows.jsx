//"use client";
//import { useState } from "react";

import { Suspense } from "react";

import Loading from "@/app/loading";
import TvshowGet from "./TvshowGet";

function Tvshows() {
  return (
    <section className="flex flex-col">
      <Suspense fallback={<Loading />}>
        <article className="grid grid-cols-3 border border-slate-500">
          <TvshowGet />
        </article>
      </Suspense>
      {/* <TvshowGet setImage={setImage} /> */}
    </section>
  );
}

export default Tvshows;
