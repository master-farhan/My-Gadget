import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncDeleteteProduct } from "./../store/actions/productActions";


const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);

  const { id } = useParams();

  const product = products?.find((product) => product.id == id);
  console.log(product.image);

  const AddToCarthandler = () => {
    console.log("hi cart");
  };

  const Orderhandler = () => {
    console.log("hi cart");
  };

  // Delete 
  const DeleteHandler = ()=>{
    console.log('Delete')
      dispatch(asyncDeleteteProduct(id));
        navigate(-1);
  }

  return (
    <div className="p-5 md:px-10 lg:px-[5%] relative overflow-x-hidden ">
      <button
                onClick={() => navigate(-1)}
                className="hover:bg-gray-500 border border-gray-500 hover:text-white text-gray-500 transition-all duration-150 px-2 rounded cursor-pointer font-medium"
              >
                back
              </button>
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
          <p className="md:text-lg text-[#78B04F] font-bold py-2">
            ${product.price}
          </p>

          <p className="text-sm md:text-medium lg:text-lg pb-5">
            {product.description}
          </p>

          <ul className="list-disc p-5 pb-10 font-medium">
            <li>Work as TRS to TRRS Converter</li>
            <li>7 Days Warranty</li>
          </ul>

          {user.isAdmin ? (
            <>
              {" "}
              {/* adminButton */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                <button
                  className="md:px-3 py-1 px-3 cursor-pointer font-medium hover:bg-blue-text-[#78B04F] border border-[#78B04F] hover:bg-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150"
                  onClick={() => navigate(`update-product`)}
                >
                  Update Product
                </button>

                <button
                  className="md:px-3 py-1 px-3 cursor-pointer font-medium hover:bg-red-500 border border-red-500 hover:text-white text-red-500 transition-all duration-150"
                  onClick={DeleteHandler}
                >
                  Delete Product
                </button>
              </div>
            </>
          ) : (
            <>
              {/* userButton */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                <button
                  className="md:px-3 py-1 px-3 cursor-pointer font-medium hover:bg-blue-text-[#78B04F] border border-blue-text-[#78B04F] hover:text-white text-[#78B04F] hover:bg-[#78B04F] transition-all duration-150"
                  onClick={AddToCarthandler}
                >
                  Add to Cart
                </button>

                <button
                  className="md:px-3 py-1 px-3 cursor-pointer font-medium hover:bg-blue-text-[#78B04F] border border-blue-text-[#78B04F] hover:text-white text-[#78B04F] hover:bg-[#78B04F] transition-all duration-150 whitespace-nowrap flex items-center justify-center gap-2"
                  onClick={Orderhandler}
                >
                  <span>Create a Order</span>{" "}
                  <FaArrowRightLong className="-rotate-45" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductDetails;
