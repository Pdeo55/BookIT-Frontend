import React, { useEffect, useState } from "react";
import BackgroundImage from "../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { toast } from 'react-toastify'
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
    console.log(userData)
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-[70vw] bg-black flex justify-center items-center">
        <div className="w-[30%] h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-[2rem] font-bold">Login</h1>
          {/* <div className="w-full flex justify-between mt-24">
            <button className="bg-white w-[8vw] px-5 py-2 text-black font-bold rounded-lg cursor-pointer hover:bg-[#EEE1FF]">
              Organizer
            </button>
            <button className="bg-white w-[8vw] px-5 py-2 text-black font-bold rounded-lg cursor-pointer hover:bg-[#EEE1FF]">
              User
            </button>
          </div>
          <div className="w-full flex justify-center items-center gap-2 mt-10">
            <div className="w-[3rem] h-[1px] bg-[#FECA00]"></div>
            <p className="text-white uppercase">or login with username</p>
            <div className="w-[3rem] h-[1px] bg-[#FECA00]"></div>
          </div> */}
          <div className="w-full mt-10">
            <form onSubmit={onSubmit}>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Enter Email"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white pl-[2px]"
                  onChange={onChange}
                  name="email"
                  value={email}
                />
                {/* <div className="flex justify-between">
                  <div></div>
                  <p className="text-[#cbd5e1] cursor-pointer text-[0.8rem]">
                    Forget regis
                  </p>
                </div> */}
              </div>
              <div className="mt-6">
                <input
                  required
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white pl-[2px]"
                  onChange={onChange}
                  name="password"
                  value={password}
                />
                <div className="flex justify-between">
                  <div></div>
                  <p className="text-[#cbd5e1] cursor-pointer text-[0.8rem]">
                    Forget password
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <input type="checkbox" />
                <label className="text-white ml-1" for="checkboxDefault">
                  Keep me signed in
                </label>
              </div>
              <div className="w-full mt-10 flex flex-col justify-center items-center">
                <button className="bg-[#EEE1FF] text-black rounded-lg font-bold px-20 py-2 hover:bg-[#a771ee]">
                  LOGIN
                </button>
                <p className="text-white mt-2 text-s">
                  Haven't signed up yet?
                  <span className="uppercase cursor-pointer hover:underline ml-1 text-[#FECA00] font-bold">
                    <Link to={"/signup"}> Sign Up here </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <img src={BackgroundImage} alt="backgroundImage" className="h-full" />
      </div>
    </div>
  );
};

export default Login;
