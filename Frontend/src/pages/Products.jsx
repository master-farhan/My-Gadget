import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  return products.length > 0 ? (
    <div className="products">
      {/* Search */}
      <div className="h-20 bg-red-600"></div>
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
