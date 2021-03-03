export default function getQueryParam(name) {
  if (typeof window === 'undefined') {
    return null;
  }

  const queryParams = window.location.search
    .slice(1)
    .split('&')
    .reduce((acc, current) => {
      const [key, value] = current.split('=');

      acc[decodeURIComponent(key)] = decodeURIComponent(value)

      return acc;
    }, {})

    return queryParams[name] || null
}
