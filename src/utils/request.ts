import { getAccessToken } from "zmp-sdk";
import { getConfig } from "./template";

const API_URL = getConfig((config) => config.template.API_URL);

const mockUrls = import.meta.glob<{ default: string }>("../mock/*.json", {
  query: "url",
  eager: true,
});

export async function request<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = API_URL
    ? `${API_URL}${path}`
    : mockUrls[`../mock${path}.json`]?.default;

  if (!API_URL) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
  const response = await fetch(url, options);
  return response.json() as T;
}

export async function requestWithFallback<T>(
  path: string,
  fallbackValue: T,
  options?: RequestInit
): Promise<T> {
  try {
    return await request<T>(path, options);
  } catch (error) {
    console.warn(
      "An error occurred while fetching data. Falling back to default value!"
    );
    console.warn({ path, error, fallbackValue });
    return fallbackValue;
  }
}
