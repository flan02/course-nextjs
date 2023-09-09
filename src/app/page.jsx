import Cloudinary from "@/components/Cloudinary";
import Tvshows from "@/components/Tvshows";

export default async function HomePage() {
  return (
    <>
      <h1 className="w-max mx-auto text-9xl text-blue-400 m-4">Cloudinary</h1>
      <nav className="w-max m-12">
        <h2 className="text-8xl text-slate-700">Tvshows</h2>
      </nav>
      <section className="flex">
        <Tvshows />
        <Cloudinary />
      </section>
    </>
  );
}
