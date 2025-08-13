// app/layout.js
import { Roboto, Cedarville_Cursive, Indie_Flower } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/CartContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap", // avoid blocking text paint
  variable: "--font-roboto",
});

const cedarvilleCursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-cedarvilleCursive",
});

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-indieFlower",
});

export const metadata = {
  title: "Nike",
  description: "Best Nike shoes online",
  verification: {
    google: "0IQ9BU41qgomhQc7FqJQNso2k4zVJ_LavvsQev_XCzI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 🔹 Preload first hero image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/saleImage1.webp"
          type="image/webp"
          fetchpriority="high"
        />
      </head>
      <body className={roboto.variable}>
        <CartProvider>
          <Header />
          <div className="mt-16 lg:mt-20">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
