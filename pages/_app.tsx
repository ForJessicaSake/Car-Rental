import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="font-sans">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </main>
  );
}
