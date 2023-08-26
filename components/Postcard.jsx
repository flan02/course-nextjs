"use client";
import Link from "next/link";

//TODO Es un RCC

//! No es necesario importar el key
const Postcard = ({ post, key }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
      <span>{`id del post: ${post.id} `}</span>
      <button
        onClick={() => {
          console.log(`redirect to the post: ${post.id}`);
        }}
      >
        click post
      </button>
    </>
  );
};

export default Postcard;
