//src/lib/openRouteService.js
export const fetchRouteData = async (startPoint, endPoint) => {
    const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
      method: "POST",
      headers: {
        Authorization: process.env.NEXT_PUBLIC_ORS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coordinates: [
          [startPoint[1], startPoint[0]],
          [endPoint[1], endPoint[0]],
        ],
        alternative_routes: {
          target_count: 3,
          share_factor: 0.6,
        },
      }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch route data");
    }
  
    const data = await response.json();
    console.log("Route data:", data.features);
    return data.features;
  };
  