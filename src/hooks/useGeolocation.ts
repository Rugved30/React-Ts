type Coordinates = {
  latitude: number;
  longitude: number;
  accuracy: number;
};

export function getCurrentLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
}

type LocationAddress = {
  city?: string;
  town?: string;
  village?: string;
  state?: string;
  country?: string;
};

export const getCityFromCoordinates = async (
  latitude: number,
  longitude: number
) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
  );

  if (!response.ok) {
    throw new Error("Failed to find the city.");
  }

  const data: { address?: LocationAddress } = await response.json();
  const address = data.address ?? {};

  return {
    city:
      address.city ??
      address.town ??
      address.village ??
      "Unknown city",
    state: address.state ?? "",
    country: address.country ?? "",
  };
};