//TODO FETCH DATA si lo hicieramos desde el frontend
//* useState -> para guardar datos
//* useEffect -> para cargar datos

import Navbar from "@/components/Navbar";
import Postcard from "@/components/Postcard";
import "./Post.css";

//TODO recordar que nextjs se ejecuta por defecto desde el servidor
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  //console.log(posts); //* lo veremos en la consola de nextjs!
  await new Promise((resolve) => setTimeout(resolve, 4000)); //* Simulamos una peticion lenta
  return posts; //* Retornamos los posts
}

//TODO Es un RSC

//! React Server Components procesa codigo asincrono caracteristica del servidor
async function Posts() {
  const posts = await loadPosts(); //* Aqui los recibimos a los posts debe ser async
  const vault = posts;
  // let vault = [];
  // for (let i = 0; i < 10; i++) vault[i] = posts[i]; //* Guardamos los 10 primeros posts
  //console.log(posts);
  return (
    <>
      <Navbar />
      <h1>Posts page</h1>
      <div className="grid">
        {vault.map((post) => (
          <Postcard post={post} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default Posts;
