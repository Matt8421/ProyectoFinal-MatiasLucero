import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import ProductCard from '../../ProductCard/ProductCard'
import "./HomePage.css"

const HomePage = () => {
    const {products} = useCustomContext()
  return (
    <div>
        <div className='gridHomePage'>
            {products.map(producto =>(
            <ProductCard  producto={producto} key={producto.id}/>
          ))}
        </div>
    </div>
  )
}

export default HomePage