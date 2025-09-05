// utils/getSubdomain.js
export function getSubdomain() {
  const host = window.location.hostname;

  // Skip subdomain logic for localhost or 127.0.0.1
  if (host === "localhost" || host === "127.0.0.1") {
    return null;  // Don't force a subdomain locally
  }

  const parts = host.split(".");

  // Example: username.digisky.ai
  if (parts.length >= 3) {
    return parts[0]; // "username"
  }

  return null;
}
