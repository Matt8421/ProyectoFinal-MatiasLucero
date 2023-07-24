import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"
import { useCustomContext } from '../ContextManager/ContextProvider'


const ProductCard = ({producto}) => {
    const {getProductById,addProductCart} = useCustomContext()
    const productDetail = getProductById(producto.id)
    return (
        <div className='contenedorCard fondoCard'>
            <img src={"ImagesMain/" + producto.imagen} alt="imagenes" className='tamañoImagen' />
            <h2 className='fondoCard'>{producto.nombre}</h2>
            <h3 className='fondoCard'>Precio: ${producto.precio}</h3>
            <Link to={"/detail/" + producto.id} className='fondoCard'> Ver Detalle</Link>
            <div className='fondoCard'><button className='comprarButton' onClick={() => addProductCart(productDetail.id)}>Comprar</button></div>
        </div>
        
    )
}

export default ProductCard
