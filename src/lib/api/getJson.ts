
export async function getJson(url: string) {
  return fetch(url).then(res => res.json());
}
