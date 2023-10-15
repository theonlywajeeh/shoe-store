// pages/api/search.js
import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const { query } = req.query;
  const dataFilePath = path.join(process.cwd(), 'public', 'dataBase', 'shoeData.json');

  try {
    // Read data from the JSON file
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);

    const searchResults = [];

    // Perform search logic
    for (const product in data) {
      const { name, brand, category } = data[product];
      // You can customize the search logic based on your requirements
      if (name.toLowerCase().includes(query.toLowerCase()) ||
          brand.toLowerCase().includes(query.toLowerCase()) ||
          category.toLowerCase().includes(query.toLowerCase())) {
        searchResults.push(data[product]);
      }
    }

    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
