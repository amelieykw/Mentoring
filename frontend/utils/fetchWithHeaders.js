
async function fetchWithHeaders(url) {
  let data;
  try {
    data = await fetch(url, {
      headers: { Accept: 'application/json' },
    }).then((res) => (res.status <= 206 && res.status >= 200 ? res.json() : undefined));
  } catch (error) {
    data = undefined;
  }
  return data;
}
export default fetchWithHeaders;
