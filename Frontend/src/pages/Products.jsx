import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  return products.length > 0 ? (
    <div>
      <ProductCard />
    </div>
  ) : (
    <div className="h-[80vh] text-3xl animate-pulse w-full flex justify-center items-center">
      Loding...
    </div>
  );
};

export default Products;
