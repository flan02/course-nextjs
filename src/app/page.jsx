import Cloudinary from "@/components/Cloudinary";
import Tvshows from "@/components/Tvshows";

export default async function HomePage() {
  return (
    <>
      <h1 className="w-max mx-auto text-6xl lg:text-9xl text-blue-400 m-4">
        Cloudinary
      </h1>
      <nav className="w-max my-6 xl:my-12 mx-4">
        <h2 className="text-5xl lg:text-7xl text-slate-700">Tvshows</h2>
      </nav>
      <section className="flex flex-col xl:flex-row">
        <Tvshows />
        <Cloudinary />
      </section>
    </>
  );
}
