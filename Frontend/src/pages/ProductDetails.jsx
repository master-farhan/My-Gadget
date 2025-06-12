import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductDetails = () => {
  const products = useSelector((state) => state.productReducer.products);

  const { id } = useParams();

  const product = products?.find((product) => product.id == id);
  console.log(product.image);

  const AddToCarthandler = () => {
    console.log("hi cart");
  };

  const Orderhandler = () => {
    console.log("hi cart");
  };

  return (
    <div className="p-5 md:px-10 lg:px-[5%]">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-1">
        <div className="md:w-[40vw]">
          <img
            className="w-[100%] aspect-2/2 md:aspect-5/4 object-cover"
            src={`${product.image}`}
            alt=""
          />
        </div>
        <div className="align-baseline">
          <h2 className="text-2xl lg:text-3xl font-medium">{product.title}</h2>
          <p className="md:text-lg text-[#78B04F] font-bold">
            ${product.price}
          </p>

          <p className="text-sm md:text-medium lg:text-lg py-5">
            {product.description}
          </p>

          <ul className="list-disc p-5 pb-10 font-medium">
            <li>Work as TRS to TRRS Converter</li>
            <li>7 Days Warranty</li>
          </ul>

          <div className="flex flex-col md:justify-between md:flex-row md:items-center gap-4 md:gap-5">
            <button
              className="md:px-3 py-1 px-3 cursor-pointer rounded-lg font-medium hover:bg-[#78B04F] border border-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150"
              onClick={AddToCarthandler}
            >
              Add to Cart
            </button>

            <button
              className="md:px-3 py-1 px-3 cursor-pointer rounded-lg font-medium hover:bg-[#78B04F] border border-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150 whitespace-nowrap flex items-center justify-center gap-2"
              onClick={Orderhandler}
            >
              <span>Create a Order</span>{" "}
              <FaArrowRightLong className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
