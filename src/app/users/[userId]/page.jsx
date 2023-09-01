"use client";

//! Si queremos acceder al valor de params antes de q recargue la pagina necesitaremos un HOOK
import { useParams } from "next/navigation";
//TODO lo necesitamos p/ componentes q quiere acceder al params en el q estamos

//function UserPage({ params }) {
function UserPage() {
  //console.log(params);
  const params = useParams();
  console.log("El params es: ", params);
  return (
    <div>
      <h1>UserPage</h1>
      <button
        onClick={() => {
          console.log("it works");
        }}
      >
        click
      </button>
    </div>
  );
}

export default UserPage;
