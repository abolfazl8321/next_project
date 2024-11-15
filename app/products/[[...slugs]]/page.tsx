import React from 'react'

interface Props{
    params:{ slugs: string[]},
    searchParams:{sortOrders:string}
}

const ProductsDetail = ({params:{slugs},searchParams:{sortOrders}}:Props) => {
  return (
    <div>
      ProductsDetail {slugs} {sortOrders}
    </div>
  )
}

export default ProductsDetail
