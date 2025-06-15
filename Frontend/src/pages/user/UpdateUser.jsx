import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncUpdateUser } from "../../store/actions/userActions";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  // const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  const { id } = useParams();

  const UpdateUserHandeler = (user) => {
    dispatch(asyncUpdateUser(id, user));
  };

  return (
    <div className="w-[100%]">
      <form
        onSubmit={handleSubmit(UpdateUserHandeler)}
        className="flex flex-col w-[100%]"
      >
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-[5%] w-[100%]">
          <span className="flex flex-col w-[100%]">
            <label htmlFor="username">Username</label>
            <input
              {...register("username")}
              required
              className="mt-1 border outline-none focus:border-[#78B04F] border-[#78B04F85]  py-2 px-4"
              type="text"
              id="username"
            />
          </span>
          <span className="flex flex-col w-[100%]">
            <label htmlFor="email">Email Address</label>
            <input
              {...register("email")}
              required
              className="mt-1 border outline-none focus:border-[#78B04F] border-[#78B04F85]  py-2 px-4"
              type="email"
              id="email"
            />
          </span>
        </div>
        <br />
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-[5%]">
          {" "}
          <span className="flex flex-col w-[100%]">
            {" "}
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              required
              className="mt-1 border outline-none focus:border-[#78B04F] border-[#78B04F85]  py-2 px-4"
              type="password"
              id="password"
            />
          </span>
          <span className="flex items-end w-[100%]">
            {" "}
            <button className="bg-[#78B04F] text-white py-[8px] px-5 cursor-pointer font-medium">
              Save Details
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
