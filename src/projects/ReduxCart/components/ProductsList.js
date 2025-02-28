import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getVisibleProducts } from '../reducers/products'
import ProductItem from "./ProductItem"
import { addToCart } from '../actions'

const ProductsList = () => {
  const products = useSelector(state => getVisibleProducts(state.products))
  const dispatch = useDispatch()
  const dispatchAddtoCart = (id) => dispatch(addToCart(id))

  return (
    <div>
      <h3>Products</h3>
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => dispatchAddtoCart(product.id)} />
      )}
    </div>
  )
}

export default ProductsList 