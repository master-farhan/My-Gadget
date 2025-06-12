import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncUpdateProduct } from "../../store/actions/productActions";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const { id } = useParams();

  const product = products?.find((product) => product.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product?.title,
      price: product?.price,
      description: product?.description,
      image: product?.image,
      catagory: product?.catagory,
    },
  });

  const UpdateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
    navigate(-1);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
      <div className="h-full w-full flex justify-center items-center px-5 ">
        <div className="rounded-lg py-5 px-7 flex items-center flex-col gap-1 w-[90vw] md:w-[450px] bg-white shadow-[0_0_100vw_100vw_rgba(0,0,0,0.7)] ">
          <h1 className="text-2xl font-medium text-center pb-3 ">
            Edit Product
          </h1>
          {/* form */}
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="flex flex-col w-full"
          >
            <input
              {...register("title")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="text"
              id="title"
              placeholder="Enter your title"
            />
            <br />
            <input
              {...register("image")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="url"
              placeholder="Url"
            />
            <br />
            <input
              {...register("price")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="number"
              placeholder="Price"
            />
            <br />
            <textarea
              {...register("description")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="text"
              placeholder="Enter product description"
              id="description"
            ></textarea>
            <br />
            <input
              {...register("catagory")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="text"
              id="catagory"
              placeholder="Product Catagory"
            />
            <br />
            <div className="flex items-center gap-5 justify-between">
              <button
                onClick={() => navigate(-1)}
                className="hover:bg-gray-500 border border-gray-500 hover:text-white text-gray-500 transition-all duration-150 px-2 rounded cursor-pointer font-medium"
                type="button"
              >
                back
              </button>
              <button className="hover:bg-[#78B04F] border border-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150 px-2 rounded cursor-pointer font-medium">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
