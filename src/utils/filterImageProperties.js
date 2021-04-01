export const filterImageProperties = (images) =>
  images.map(({ id, alt_description: altDescription, urls }) => ({
    id,
    alt: altDescription,
    url: urls.small,
  }));
