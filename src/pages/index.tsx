import Head from "next/head";
import { Rubik } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import SearchForm from "@/components/tracker/SearchForm";
import IPDetails from "@/components/tracker/IpDetails";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
});

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    console.log("Searching for:", newQuery); // بعداً به API وصل می‌کنیم
  };

  return (
    <>
      <Head>
        <title>Ip address tracker app</title>
        <meta name="description" content="Powered by Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${rubikSans.variable}`}>
        <main>
          <h1>IP Address Tracker</h1>

          <SearchForm onSubmit={handleSearch} />
          {query && <IPDetails query={query}/>}
        </main>
      </div>
    </>
  );
}
