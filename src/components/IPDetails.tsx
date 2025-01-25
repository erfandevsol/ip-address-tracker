import { useQuery } from "react-query";
import { fetchIPDetails } from "@/utils/apiFetch";
import Map from "./MapContainer";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";

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
      <Box
        sx={{
          width: "100%",
          justifyItems: "center",
          position: "absolute",
          zIndex: "1",
          translate: "0 -60px",
        }}
      >
        <Card
          sx={{
            padding: 2,
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginLeft: "50px" }}
              />
            }
            sx={{ justifyItems: "start", alignItems: "center" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ letterSpacing: "1px", color: "#9e9e9e" }}
              >
                IP ADDRESS
              </Typography>

              <Typography
                sx={{ fontWeight: "500" }}
                component="div"
                variant="h5"
              >
                {data.ip}
              </Typography>
            </CardContent>

            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ letterSpacing: "1px", color: "#9e9e9e" }}
              >
                LOCATION
              </Typography>

              <Typography
                sx={{ fontWeight: "500" }}
                component="div"
                variant="h5"
              >
                {data.location.city}
              </Typography>
            </CardContent>

            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ letterSpacing: "1px", color: "#9e9e9e" }}
              >
                TIME ZONE
              </Typography>

              <Typography
                sx={{ fontWeight: "500" }}
                component="div"
                variant="h5"
              >
                {data.location.timezone}
              </Typography>
            </CardContent>

            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ letterSpacing: "1px", color: "#9e9e9e" }}
              >
                ISP
              </Typography>

              <Typography
                sx={{ fontWeight: "500" }}
                component="div"
                variant="h5"
              >
                {data.isp}
              </Typography>
            </CardContent>
          </Stack>
        </Card>
      </Box>

      <Map lat={data.location.lat} lng={data.location.lng} />
    </Box>
  );
}
