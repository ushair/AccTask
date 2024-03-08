export async function fetchShopItems() {
  try {
    const response = await fetch('https://www.jsonkeeper.com/b/2B80#');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}
