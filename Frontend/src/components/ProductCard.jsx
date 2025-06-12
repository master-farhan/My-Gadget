import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const products = useSelector((state) => state.productReducer.products);
  const renderProduct = products.map((product) => {
    const AddToCarthandler = () => {
      console.log("hi cart");
    };

    return (
      <div
        key={product.id}
        className="overflow-hidden flex flex-col h-fit hover:shadow transition-all duration-200"
      >
        <Link className="" to={`/product/details/${product.id}`}>
          <img
            className="h-80 lg:h-55 bg-center w-[100%] object-cover"
            src={product.image}
            alt={product.title}
          />
          <h2 className="pt-4 md:pb-2 px-2 font-medium md:px-4 text-lg md:text-xl">
            {product.title.slice(0, 20)}...
          </h2>
        </Link>{" "}
        <div className="flex flex-col p-2 md:pb-4 md:px-4 md:justify-between  gap-3">
          <p className="md:text-lg text-[#78B04F] font-bold">
            ${product.price}
          </p>
          <button
            className="md:px-3 py-1 px-3 cursor-pointer font-medium hover:bg-[#78B04F] border border-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150"
            onClick={AddToCarthandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="p-5 md:px-10 lg:px-[5%] lg:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
      {renderProduct}
    </div>
  );
};

export default ProductCard;
