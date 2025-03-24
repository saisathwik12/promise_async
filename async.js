async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }
  
  fetchData();