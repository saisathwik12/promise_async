async function fetchData() {
    try {
      const response = await fetch('');
      const data = await response.json();
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }
  
  fetchData();