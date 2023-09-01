"use client";
import { TypeWriter } from "react-typewritter";

//? Los metadatos se ejecutan solo en el servidor
export const metadata = {
  title: "Course NextJS First Project",
  description: "Generated with nextjs",
  keywords: ["nextjs", "reactjs", "javascript", "flan02"],
  generator: "NextJS",
  applicationName: "NextJS Course",
  referrer: "no-referrer", // origin-when-cross-origin
  authors: [
    { name: "flan02", email: "chanivetdan@hotmail.com" },
    { name: "sam sepiol", email: "xbox_dan@hotmail.com" },
  ],
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1.0",
  creator: "flan02",
  publisher: "flan02",
  formatDetection: {
    telephone: "false",
    email: "false",
    address: "false",
  },
};

//? La el componente padre se ejecuta en el backend
export default function Home() {
  return (
    <div className="text-5xl px-4">
      <TypeWriter
        elementType="p"
        text={`Hi everyone this little project is about connect nextjs with an external API and show with server components the info about random users.`}
      />
    </div>
  );
}
