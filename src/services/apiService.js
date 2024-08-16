// src/services/apiService.js
export const fetchProducts = async () => {
    const apiKey = 'nfFxGc'; // Your API key
  
    try {
      const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('API response data:', data); // Log the data to inspect the structure
  
      // Adjust the path to the products array based on the actual response format
      if (Array.isArray(data.products)) {
        return data.products;
      } else {
        console.error('API response does not contain a valid products array:', data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  };
  