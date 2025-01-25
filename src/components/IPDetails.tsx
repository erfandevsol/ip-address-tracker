import { useQuery } from "react-query";
import { fetchIPDetails } from "@/utils/apiFetch";
import Map from "./Map";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function IPDetails({ query }: { query: string }) {
  const { data, error, isLoading } = useQuery(
    ["ipDetails", query],
    () => fetchIPDetails(query),
    {
      enabled: !!query,
      staleTime: 60000,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <Box>
      <Card
        sx={{
          marginBottom: 4,
          padding: 2,
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <CardContent>
          <Typography variant="h6">
            <strong>IP Address:</strong> {data.ip}
          </Typography>
          <Typography variant="h6">
            <strong>Location:</strong> {data.location.city},{" "}
            {data.location.country}
          </Typography>
          <Typography variant="h6">
            <strong>Time Zone:</strong> {data.location.timezone}
          </Typography>
          <Typography variant="h6">
            <strong>ISP:</strong> {data.isp}
          </Typography>
        </CardContent>
      </Card>

      <Map lat={data.location.lat} lng={data.location.lng} />
    </Box>
  );
}
