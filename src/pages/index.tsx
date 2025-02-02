"use client";

// Nextjs components
import Head from "next/head";
import { Rubik } from "next/font/google";

// React hooks
import { useEffect, useState } from "react";

// Mui materials
import { Box } from "@mui/material";

// Components
import SearchForm from "@/components/SearchBar";
import IPDetails from "@/components/IpDetailsPanel";
import LoadingProgress from "@/components/LoadingProgress";

// Utils
import { fetchUserIP } from "@/utils/apiFetch";

// Map css
import "maplibre-gl/dist/maplibre-gl.css";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
});

export default function Home() {
  // query state to store the user's ip address or search query
  const [query, setQuery] = useState<string | null>(null);

  // State to store the user's ip address or search query
  useEffect(() => {
    const getUserIP = async () => {
      try {
        const { ip } = await fetchUserIP();
        setQuery(ip);
      } catch (error) {
        alert("Oops! We couldn't identify your IP address.");
      }
    };

    getUserIP();
  }, []);

  // Function to update the query state
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <>
      <Head>
        <title>Ip address tracker app</title>
        <meta name="description" content="Powered by Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${rubikSans.className}`}>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "1fr 2fr",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* This Box component is used to display the SearchForm */}
          <Box sx={{ gridRow: "1" }}>
            <SearchForm onSubmit={handleSearch} />
          </Box>

          {/* This Box component is used to display the IpDetailsPanel */}
          <Box sx={{ gridRow: "2/4" }}>
            {query === null ? <LoadingProgress /> : <IPDetails query={query} />}
          </Box>
        </Box>
      </main>
    </>
  );
}
