export const getPlanetId = (url:string): string => {
  return url.match(/\d+/)[0]
};
