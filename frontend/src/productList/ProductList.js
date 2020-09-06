import React from "react";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";

export const ProductList = () => {

  const { isLoading, error, data } = useQuery('products', () =>
      fetch("/api/products").then(res =>
          res.json()
      )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
      <div className="list">
        {
          data.map((p, i) => <ProductCard product={p} key={i}/>)
        }
      </div>
  )
}


const ProductCard = (props) => {
  const {product} = props;

  return (
      <div className="card" >
        <h3>{product.name}</h3>
        <p>{product.variants.length} Varianten</p>
        <Link to={`/product/${product.id}`}>Zum Produkt</Link>
      </div>
  )
}
