import { useState } from "react";
import { getCityFromCoordinates, getCurrentLocation } from "../../../hooks/useGeolocation";

type SelectedLocation = {
  city: string;
  state: string;
  country: string;
};

export default function LocationDropdown() {
  const [location, setLocation] = useState<SelectedLocation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUseCurrentLocation = async () => {
    setLoading(true);
    setError("");

    try {
      const coordinates = await getCurrentLocation();

      const address = await getCityFromCoordinates(
        coordinates.latitude,
        coordinates.longitude
      );

      setLocation(address);
    } catch {
      setError(
        "Location unavailable. Allow location access or select a city manually."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-72">
      <button
        type="button"
        onClick={handleUseCurrentLocation}
        disabled={loading}
        className="w-full rounded-lg border border-gray-300 p-3 text-left"
      >
        {loading
          ? "Detecting location..."
          : location
            ? `${location.city}, ${location.state}`
            : "Select your location"}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}