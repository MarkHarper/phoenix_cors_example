const baseUrl = `${process.env.REACT_APP_BASE_URL}/api`;

export {
  listImages,
};

async function listImages() {
  const res = await fetch(`${baseUrl}/images`);
  const images = (await res.json()).data;

  return images;
}
