export function condition(condition) {
  switch (condition) {
    case "storm":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
      break;
    case "snow":
      return (icon = {
        name: "snow-outline",
        color: "#1ec9ff",
      });
      break;
    case "rain":
      return (icon = {
        name: "rainy-outline",
        color: "#1ec9ff",
      });
      break;
    case "clear_day":
      return (icon = {
        name: "sunny-outline",
        color: "#FFB300",
      });
      break;
    case "clear_nigth":
      return (icon = {
        name: "moon-outline",
        color: "#1ec9ff",
      });
      break;

    case "cloud":
      return (icon = {
        name: "cloudy-outline",
        color: "#1ec9ff",
      });
      break;
    case "cloudly_day":
      return (icon = {
        name: "partly-sunny-outline",
        color: "#FFB300",
      });
      break;
    case "cloudly_night":
      return (icon = {
        name: "cloudy-night-outline",
        color: "#1ec9ff",
      });
      break;
    default:
      return (icon = {
        name: "cloud-outline",
        color: "#1ec9ff",
      });
  }
}
