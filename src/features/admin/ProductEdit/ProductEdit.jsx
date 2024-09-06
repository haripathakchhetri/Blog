import { useParams } from "react-router";
import ProductEditForm from "./ProductEditForm";
import { useGetProductByIdQuery } from "../../product/productApi";


const ProductEdit = () => {

  const { id } = useParams();
  const { isLoading, error, data } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  console.log(data)


  return (
    <div>
      <ProductEditForm product={data} />
    </div>
  )
}
export default ProductEdit