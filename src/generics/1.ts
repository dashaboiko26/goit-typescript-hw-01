import axios from "axios";

async function fetchData(url: string): Promise<object> {
  try {
    const response: { data: Promise<object> } = await axios.get(url);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
