import Cookies from "js-cookie";

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");

  if (!storedExpirationDate) {
    return -1;
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const writeAuthToken = (
  accessToken: string,
  expiresIn: number,
  refreshToken: string,
  rememberMe: boolean = false
) => {
  localStorage.setItem("accessToken", accessToken);
  const expiration = new Date(new Date().getTime() + expiresIn * 1000);
  localStorage.setItem("expiration", expiration.toISOString());

  const cookieOptions = rememberMe
    ? { expires: expiresIn / (60 * 60 * 24) } // Convert seconds to days
    : undefined;
  Cookies.set("refreshToken", refreshToken, cookieOptions);
};

export const getAuthToken = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const getRefreshToken = () => Cookies.get("refreshToken");

export const clearAuthToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("expiration");
  Cookies.remove("refreshToken");
};

export const readStoredCredentials = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  if (username && password) {
    return { username, password };
  }
  return null;
};

export const clearStoredCredentials = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
};
