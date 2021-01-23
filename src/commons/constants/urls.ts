export const API_HOST = ((): string => {
  switch (process.env.REACT_APP_ENV) {
    case "local":
      return "http://localhost:4000";
    case "development":
      return "https://api-dev.example.com";
    case "staging":
      return "https://api-stg.example.com";
    case "production":
      return "https://api.example.com";
    default:
      // モックに接続
      return "http://localhost:4000";
  }
})();

export const AUTH_BASE_URL = `${API_HOST}/auth`;
export const API_V1_BASE_URL = `${API_HOST}/v1`;
export const PUBLIC_BASE_URL = `${API_HOST}/public/v1`;
