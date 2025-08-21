import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { login } from "../Redux/Slice/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });
  function handleUserInput(e) {
    const { name, value } = e.target;
    SetLoginData({
      ...loginData,
      [name]: value,
    });
  }
 

  async function onLogin(e) {
    e.preventDefault();
    if (
      !loginData.email ||
      !loginData.password 
    ) {
      toast.error("Please fill all the details");
      return;
    }
   
    


    const response = await dispatch(login(loginData));
    if (response?.payload?.success) {
      navigate("/");
    }

    SetLoginData({
      email: "",
      password: "",
    });
  }
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form
          onSubmit={onLogin}
          action=""
          className="flex flex-col justify-center  gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Login Page</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email.."
              onChange={handleUserInput}
              value={loginData.email}
              className="bg-transparent px-2 py-1 border"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password.."
              onChange={handleUserInput}
              value={loginData.password}
              className="bg-transparent px-2 py-1 border"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 font-semibold text-lg cursor-pointer "
          >
            Login
          </button>
          <p className="text-center">
            Don't have an account ?
            <Link className="link text-accent " to="/signup">
              signup
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
