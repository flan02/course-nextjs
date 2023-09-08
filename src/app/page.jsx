import Cloudinary from "@/components/Cloudinary";
import Tvshows from "@/components/Tvshows";

export default async function HomePage() {
  return (
    <>
      <h1 className="w-max mx-auto text-8xl text-blue-400 mb-4">Cloudinary</h1>
      <section className="flex h-auto mt-8">
        <Tvshows />
        <Cloudinary />
      </section>
    </>
  );
}
