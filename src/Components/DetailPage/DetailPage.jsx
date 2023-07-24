import React from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../ContextManager/ContextProvider'
import "./DetailPage.css"

const DetailPage = () => {
    const {id} = useParams()/* ESTO ES UN HOOK QUE VIENE DE REACT-ROUTER-DOM */
    const {getProductById} = useCustomContext()
    const productDetail = getProductById(id)
    return (
        <div className='detailPage contenedorCard fondoContact'>
            <h1 className='fondoContact'>{productDetail.nombre}</h1>
            <h2 className='fondoContact'>${productDetail.precio}</h2>
            <p className='fondoContact marginDescripcion'>Descripcion: {productDetail.descripcion}</p>
            
        </div>
    )
}

export default DetailPage
