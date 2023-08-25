"use client";

//TODO Es un RCC

//! No es necesario importar el key
const Postcard = ({ post, key }) => {
  return (
    <>
      <h3>{post.title}</h3>
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
