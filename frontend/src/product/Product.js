import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";

export const Product = () => {
  const {productId} = useParams();

  const {isLoading, error, data} = useQuery(`product`, () =>
      fetch(`/api/products/${productId}`).then(res =>
          res.json()
      )
  )

  if (!productId) {
    return (
        <div>
          404
        </div>
    )
  }

  if (isLoading) {
    return (
        <span>
          Loading
        </span>
    )
  }

  if (error) return 'An error has occurred: ' + error.message

  console.log("data: ", data)

  return (
      <div>
        <h1>{data.name}</h1>
        <div className="list">
          {
            data.variants && data.variants.map((v, i) => {
              return (
                  <div className="card">
                    <h3>{v.name}</h3>
                    <ul>
                      <li>Farbe: {v.color}</li>
                      <li>Größe: {v.size}</li>
                      <li>Preis: {v.price.amount} {v.price.currency}</li>
                    </ul>
                  </div>
              )
            })
          }
        </div>
      </div>
  )
}
