"use client";
import { useEffect } from "react";

//? Los metadatos se ejecutan solo en el servidor aqui no funcionaran
//? va el metadata a la pagina superior sino es leido aqui. Solo lo usara si esa pagina padre no tiene su propia metadata

const Users = () => {
  useEffect(() => {}, []);

  return (
    <>
      <section>
        <p>Users</p>
        <button onClick={() => console.log("click from clientside")}>
          Click
        </button>
      </section>
    </>
  );
};

export default Users;
