import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const CreateProductHandeler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };

  const categories = [
    "Bluetooth",
    "Tws",
    "Headphones",
    "Tripod",
    "Gaming",
    "Neckband",
    "Earphones",
    "Keyboard",
    "Speakers",
    "Microphone",
    "Grinder",
    "Prower Bank",
    "Led Light",
    "Smart Watch",
    "Wifi"
  ];

  return (
    <div className="h-[80vh] flex justify-center items-center px-5">
      <div className="py-5 px-7 bg-white shadow-2xl flex items-center flex-col gap-1 w-full max-w-[400px]">
        <h1 className="text-2xl font-medium text-center pb-3">
          Create a Product
        </h1>

        <form
          onSubmit={handleSubmit(CreateProductHandeler)}
          className="flex flex-col w-full"
        >
          <input
            {...register("title")}
            required
            className="mt-1 border py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
            type="text"
            placeholder="Enter your title"
          />
          <br />
          <input
            {...register("image")}
            required
            className="mt-1 border py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
            type="url"
            placeholder="Image URL"
          />
          <br />
          <input
            {...register("price")}
            required
            className="mt-1 border py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
            type="number"
            placeholder="Price"
          />
          <br />
          <textarea
            {...register("description")}
            required
            className="mt-1 border py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F]"
            placeholder="Enter product description"
          />
          <br />

          {/* Category Dropdown */}
          <select
            {...register("category")}
            required
            className="mt-1 border py-1 px-3 border-[#78B04F55] outline-none focus:border-[#78B04F] text-gray-700"
          >
            <option value="" disabled selected>
              Select Product Category
            </option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <br />
          <button className="hover:bg-[#78B04F] border border-[#78B04F] hover:text-white text-[#78B04F] transition-all duration-150 p-2-lg cursor-pointer font-medium">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
