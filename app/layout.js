import { Roboto, Cedarville_Cursive, Indie_Flower } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto'
});

const cedarvilleCursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-cedarvilleCursive'
});

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-indieFlower'
});

export const metadata = {
  title: "Nike",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
