export const load_data = async(url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    console.error(error);
  }
}
