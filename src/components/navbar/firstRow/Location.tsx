import {getCityFromCoordinates, getCurrentLocation} from "../../../hooks/useGeolocation";
import LocationDropdown from "./LocationDropDown";


function Location() {
  const handleUseCurrentLocation = async () => {
  try {
    const coordinates = await getCurrentLocation();

    const address = await getCityFromCoordinates(
      coordinates.latitude,
      coordinates.longitude
    );

    console.log(address);
    // Example shape:
    // { city: "Mumbai", state: "Maharashtra", country: "India" }
  } catch (error) {
    console.error("Could not determine location:", error);
  }
};

  return (
    <div>
      <LocationDropdown />
    </div>
  );
}

export default Location;
