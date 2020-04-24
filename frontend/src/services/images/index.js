const baseUrl = `${process.env.REACT_APP_BASE_URL}/api`;

export {
  listImages,
};

async function listImages() {
  return fetch(`${baseUrl}/images`);
}
