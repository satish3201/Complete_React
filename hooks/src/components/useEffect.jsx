import React, { useState, useEffect } from 'react';

function DataFetcher() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            console.log("Fetched products:", products);
            setData(products);
        }

        fetchData();
    }, [])

    console.log("Complete Data", data);
 
  return (
    <div>
        {
            data.map((product, index) => {
                return (
                    <ul>
                        <li>{product.title}</li>
                    </ul>
                )
            })
        }
    </div>
  );
}

export default DataFetcher;