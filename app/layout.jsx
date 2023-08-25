//import './globals.css'
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google"; //* {} + CTRL + SPACE

export const metadata = {
  title: "My page with nextjs",
  description: "Generated by create next app",
};

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  styles: ["normal", "italic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
