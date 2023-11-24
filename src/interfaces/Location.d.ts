interface LocalNames {
  [key: string]: string;
}

interface Location {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export default LocationDataResponse;
