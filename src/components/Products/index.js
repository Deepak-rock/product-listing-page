import React from 'react'
import {
  ProductItem,
  ProductImageCon,
  ProductImage,
  ProductDetailsCon,
  ProductTitle,
  ProductPrice,
  ProuctDes,
  ProductRating,
  ProductReviews,
} from '../StyledComponents/StyledCSS';

const Products = props => {
  const {filterHidden} = props;
  const {title, price, description, rating, image} = props.productDetails;
  const {rate, count} = rating;
  return (
    <ProductItem $fullWidth={filterHidden}>
      <ProductImageCon>
        <ProductImage src={image} alt="product" />
      </ProductImageCon>
      <ProductDetailsCon>
        <ProductTitle>{title}</ProductTitle>
        <ProuctDes>{`${description.slice(0, 50)}. . .`}</ProuctDes>
        <ProductPrice>{price} $</ProductPrice>
        <ProductRating>{rate} Rating</ProductRating>
        <ProductReviews>{count}+ Reviews </ProductReviews>
      </ProductDetailsCon>
    </ProductItem>
  )
}

export default Products;