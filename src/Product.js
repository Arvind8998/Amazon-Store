import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue()
    
    const addToBasket = ()=>{
        dispatch({
            type: 'ADD_TO_BASKET',
            title,
            image,
            price,
            rating
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((el,i)=><p>🌟</p>)}
                    
                </div>
                </div>
            <img alt="product" src={image}></img>
            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
}

export default Product
