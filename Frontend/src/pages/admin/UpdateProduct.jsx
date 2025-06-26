import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncUpdateProduct } from "../../store/actions/productActions";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);

  const { register, handleSubmit, reset } = useForm();

  const product = products?.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      });
    }
  }, [product, reset]);

  const categories = [
    "Bluetooth", "Tws", "Headphones", "Tripod", "Gaming", "Neckband",
    "Earphones", "Keyboard", "Speakers", "Microphone", "Grinder", "Power Bank",
    "Led Light", "Smart Watch", "Wifi"
  ];

  const UpdateProductHandler = (updatedProduct) => {
    dispatch(asyncUpdateProduct(id, updatedProduct));
    navigate(-1);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div className="h-full w-full flex justify-center items-center px-5">
        <div className="rounded-lg py-5 px-7 flex items-center flex-col gap-1 w-[90vw] md:w-[450px] bg-white shadow-[0_0_100vw_100vw_rgba(0,0,0,0.7)]">
          <h1 className="text-2xl font-medium text-center pb-3">
            Edit Product
          </h1>

          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="flex flex-col w-full"
          >
            <input
              {...register("title")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="text"
              placeholder="Enter your title"
            />
            <br />
            <input
              {...register("image")}
              required
              className="mt-1 border rounded py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
              type="url"
              placeholder="Image URL"
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
              placeholder="Enter product description"
            />
            <br />

            <select
              {...register("category")}
              required
              className="mt-1 border py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F] text-gray-700"
            >
              <option value="" disabled>
                Select Product Category
              </option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <br />
            <div className="flex items-center gap-5 justify-between">
              <button
                onClick={() => navigate(-1)}
                className="hover:bg-gray-500 border border-gray-500 hover:text-white text-gray-500 transition-all duration-150 px-2 rounded cursor-pointer font-medium"
                type="button"
              >
                Back
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
