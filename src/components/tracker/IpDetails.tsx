import { useQuery } from "react-query";
import { fetchIPDetails } from "@/utils/api";

export default function IPDetails({ query }: { query: string }) {
  const { data, error, isLoading } = useQuery(
    ["ipDetails", query],
    () => fetchIPDetails(query),
    {
      enabled: !!query,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      <h2>IP Details</h2>
      <p>
        <strong>IP Address:</strong> {data.ip}
      </p>
      <p>
        <strong>Location:</strong> {data.location.city}, {data.location.country}
      </p>
      <p>
        <strong>Time Zone:</strong> {data.location.timezone}
      </p>
      <p>
        <strong>ISP:</strong> {data.isp}
      </p>
    </div>
  );
}
