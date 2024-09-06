import ProductCard from "../product/ProductCard";
import { useGetAllProductsQuery } from "../product/productApi"

const Main = () => {

  const { isLoading, error, data } = useGetAllProductsQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="p-4 grid grid-cols-3 gap-6">{data && data.map((product) => {
      return <ProductCard key={product._id} product={product} />
    })}</div>
  )
}
export default Main