export const getPost = async (id: string) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}