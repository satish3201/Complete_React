import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function DataParams() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const products = await response.json()
                console.log("Fetched products:", products);
                setData(products);
            }
    
            fetchData();
        }, [])
    
        console.log("Complete Data", data);
     


  return (
    <div>
        {/* {
            data.map((product, index) => {
                return (
                    <ul>
                        <li>{product.title}</li>
                    </ul>
                )
            })
        } */}
        <h1>{data.title}</h1>
        <img src={data.image} alt="" />
        <Link to={'/use-state'}>Home</Link>
    </div>
  )
}

export default DataParams;