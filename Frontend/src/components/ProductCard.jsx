import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const products = useSelector((state) => state.productReducer.products);
  const renderProduct = products.map((product) => {
    const AddToCarthandler = () => {
      console.log("hi cart");
    };

    return (
      <div key={product.id}
      className="rounded-lg overflow-hidden flex flex-col h-fit  hover:scale-101 shadow-xl hover:shadow-2xl transition-all duration-100"
      >
        <Link
          className=""
          to={`/product/details/${product.id}`}
        >
          <img className="h-40 md:h-55 w-[100%] object-cover" src={product.image} alt={product.title} />
          <h2 className="px-2 pt-1 font-medium md:px-4 text-lg md:text-xl">{product.title.slice(0, 20)}...</h2>
          <p className="px-2 pb-2 md:px-4">{product.description.slice(0, 50)}...</p>
        </Link>{" "}
        <div className="flex flex-col p-2 md:pb-4 md:px-4 md:justify-between md:flex-row md:items-center gap-2 md:gap-1">
          <p className="md:text-lg text-[#78B04F] font-bold">${product.price}</p>
          <button className="md:px-3 py-1 px-3 cursor-pointer rounded-lg font-medium hover:bg-[#78B04F] border border-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150" onClick={AddToCarthandler}>Add to Cart</button>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 md:px-10 lg:px-[5%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
      {renderProduct}
    </div>
  );
};

export default ProductCard;
