"use client";
import Link from "next/link";

//? Nos permite acceder a lo que este en la URL desde el clientside
import { useParams } from "next/navigation";

//! No es necesario importar el key
const Postcard = ({ post }) => {
  const params = useParams();
  console.log(params);
  return (
    <div className="bg-gray-950 p-10 text-fuchsia-300">
      <Link href={`/posts/${post.id}`} className="text-fuchsia-400">
        <h3 className="text-xl font-bold mb-4">{post.title}</h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <span>{`id del post: ${post.id} `}</span>
      <br />
      <button
        onClick={() => {
          console.log(`redirect to the post: ${post.id}`);
        }}
      >
        click post
      </button>
    </div>
  );
};

export default Postcard;
