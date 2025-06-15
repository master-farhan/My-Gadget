import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { IoIosSearch } from "react-icons/io";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  return products.length > 0 ? (
    <div className="products">
      {/* Search */}
      <div className="">
        <div className="text-white bg-linear-to-t from-[#a8ff80] to-[#6ca543] h-[40vh] flex flex-col justify-center items-center gap-1 p-5 lg:p-[5%] text-center">
          <h2 className="font-medium text-2xl md:text-3xl tracking-wide">Discover Amazing Products</h2>
          <p className="tracking-widest font-medium md:text-lg">Shop the latest trends and find your perfect match</p>
          <span className="border-2 py-1 px-2 flex justify-between w-[300px] mt-5 text-lg">
            <input
              className="border-none outline-0"
              type="text"
              placeholder="Search"
            />
            <button className="flex justify-center items-center">
              <IoIosSearch className="cursor-pointer hover:scale-110 text-xl active:scale-100" />
            </button>
          </span>
        </div>
        <div className="border h-20"></div>
      </div>
      <div className="md:flex md:gap-10">
        <div className="hidden lg:block md:px-10 lg:pl-[5%] py-5 whitespace-nowrap">
          <h2>Products Catagory</h2>
          <ul className="text-sm">
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Bluetooth Speaker
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Bluetooth Headphone
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Bluetooth Earbuds (TWS)
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Bluetooth Adapter
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Bluetooth Keyboard
            </li>
          </ul>
          <ul className="text-sm">
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Mobile Tripod
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Camera Tripod
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Gorillapod
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Selfie Stick Tripod
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Ring Light with Tripod
            </li>
          </ul>
          <ul className="text-sm">
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Wired Earphone
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Wireless Neckband
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              In-ear Earphones
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Gaming Earphones
            </li>
            <li className="py-2 hover:underline hover:text-[#78B04F]">
              Noise-Cancelling Earphones
            </li>
          </ul>
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[80vh] text-3xl animate-pulse w-full flex justify-center items-center">
      Loding...
    </div>
  );
};

export default Products;
