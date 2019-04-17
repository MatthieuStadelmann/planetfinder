export const getPlanetId = (url:string): string => {
  return url.substring(url.length -2, url.length)
};
