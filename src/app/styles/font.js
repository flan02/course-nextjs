//import { Inter } from "next/font/google";
import { Roboto } from "next/font/google"; //* {} + CTRL + SPACE

// const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  styles: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});
