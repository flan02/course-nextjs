import Posts from "@/app/posts/page";
import { Suspense } from "react"; //! sin necesidad del 'use client'

//const Basket = (props) => {
//console.log(props);
// * Tiene 2 props { params: {[folder_name]: param_value} , searchParams: {}}

async function loadPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  //new Promise((resolve) => setTimeout(resolve, 2000));
  return posts;
}

async function Basket({ params }) {
  const post = await loadPosts(params.id);
  return (
    <>
      {post.id !== undefined ? (
        <h1>Post dinamico: {post.id}</h1>
      ) : (
        <h1>Post no encontrado</h1>
      )}
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      {/* params.folder_name -> es el valor del parametro */}
      {/*<h1>Post dinamicos {params.id}</h1>*/}
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Loading with suspense...</div>}>
        <Posts />
        {/* suspense permite q se muestre todo el cont ya cargado y mantiene cargando este componente aparte */}
      </Suspense>
    </>
  );
}
export default Basket;
