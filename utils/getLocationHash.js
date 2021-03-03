export default function getLocationHash(defaultValue = "") {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  return window.location.hash ? window.location.hash.slice(1) : defaultValue;
}
