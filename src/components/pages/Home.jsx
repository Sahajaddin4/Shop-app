import React, { useEffect, useState } from 'react'
import Spinner from './spinner/Spinner';
import Card from './card/Card';

function Home() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  async function fetchProducts() {
    setLoader(true);
    let res = await fetch(API_URL);
      let result=await res.json();
      setProducts(result);
      setLoader(false);
 
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className='max-w-[80%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5   mt-12'>
      
      {
        loader ? <Spinner /> :
         (products.length > 0 ? products.map((product) => {return <Card product={product} key={product.id} />}):<p>No data found</p>)
      }
    </div>
  )
}

export default Home