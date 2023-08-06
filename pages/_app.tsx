import React from "react";
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { AppProps } from "next/app";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({ duration: 1900, once: true });
    AOS.refresh();
  });

  const router = useRouter();
  return (
    <main className="font-font overflow-x-hidden">
      <Head>
        <title>Morent</title>
        <meta
          name="description"
          content="The Best Platform for Car Rental"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Morent" />
        <meta
          property="og:description"
          content="The Best Platform for Car Rental"
        />
        <meta
          property="og:image"
          content="https://car-rental.brimble.app/assets/SEO.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://car-rental.brimble.app/assets/SEO.png"
        />
        <meta
          property="twitter:url"
          content="https://car-rental.brimble.app/"
        />
        <meta name="twitter:title" content="GoalTracker" />
        <meta
          name="twitter:description"
          content="The Best Platform for Car Rental"
        />
        <meta
          name="twitter:image"
          content="https://car-rental.brimble.app/assets/SEO.png"
        />
      </Head>
      {router.pathname.includes("dashboard") ? null : <Navbar />}
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
