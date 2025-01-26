import Head from "next/head";
import { Rubik } from "next/font/google";
import { useEffect, useState } from "react";
import SearchForm from "@/components/SearchBar";
import IPDetails from "@/components/IpDetailsPanel";
import "maplibre-gl/dist/maplibre-gl.css";
import { fetchUserIP } from "@/utils/apiFetch";
import { Box } from "@mui/material";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
});

export default function Home() {
  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    const getUserIP = async () => {
      try {
        const { ip } = await fetchUserIP();
        setQuery(ip);
      } catch (error) {
        alert("Oops! We couldn't identify your IP address.")
      }
    };

    getUserIP();
  }, []);

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
          <Box sx={{ gridRow: "1" }}>
            <SearchForm onSubmit={handleSearch} />
          </Box>

          <Box sx={{ gridRow: "2/4" }}>
            {query && <IPDetails query={query} />}
          </Box>
        </Box>
      </main>
    </>
  );
}
