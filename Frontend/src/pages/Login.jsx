import { useForm } from "react-hook-form";
import { FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const RegisterHandeler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center px-5">
      <div className="rounded-lg py-5 px-7 bg-white shadow-2xl flex items-center flex-col gap-1 max-w-[410px]">
        <span className="p-3 bg-blue-400 rounded-full">
          <FaUserShield className="h-10 w-10 text-white" />
        </span>
        <h1 className="text-2xl font-medium text-center">Welcome</h1>
        <p className="text-lg text-center pb-5">
          Sign in to your account or create a new one
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit(RegisterHandeler)}
          className="flex flex-col"
        >
          <label htmlFor="email">Email Address</label>
          <input
            {...register("email")}
            required
            className="mt-1 border rounded py-1 px-3"
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            required
            className="mt-1 border rounded py-1 px-3"
            type="password"
            placeholder="Enter your password"
            id="password"
          />
          <br />
          <span className="flex items-start gap-2">
            <input required type="checkbox" name="checkbox" id="checkbox" />
            <p className="-mt-[6px]">
              I agree to the{" "}
              <span className="text-blue-400">Terms of Service</span> and{" "}
              <span className="text-blue-400">Privacy Policy</span>
            </p>
          </span>
          <br />
          <button className="bg-blue-400 text-white p-2 rounded-lg cursor-pointer font-medium">
            Create Account
          </button>
          <br />
          <p className=" text-center">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-400 cursor-pointer"
            >
              Sign up
            </span>{" "}
            here
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
