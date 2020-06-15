export function getImageAttrs(img = {}) {
  const srcSet = img?.childImageSharp?.fluid?.srcSet;
  return {
    src: srcSet ? '' : img?.publicURL,
    srcSet,
  };
}
