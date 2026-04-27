export const getImageUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  // Remove leading slash if exists to avoid double slashes with BASE_URL
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
