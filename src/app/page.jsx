import Cloudinary from "@/components/Cloudinary";

export default async function HomePage() {
  return (
    <section className="container mx-auto mt-8">
      <h1 className="w-max mx-auto text-8xl text-blue-400 mb-4">Cloudinary</h1>
      <Cloudinary />
    </section>
  );
}
