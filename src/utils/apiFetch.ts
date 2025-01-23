export const fetchUserIP = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  if (!response.ok) {
    throw new Error("Failed to fetch user IP");
  }
  return response.json();
};

export const fetchIPDetails = async (query: string) => {
  const API_KEY = "at_3ZkfAj6WvtPlfHlyAejq9b58WzSs0";
  const BASE_URL = `https://geo.ipify.org/api/v2/country,city`;

  const response = await fetch(
    `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${query}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch IP details");
  }
  return response.json();
};
