import React, { useEffect, useState } from "react";
import BackgroundImage from "../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { toast } from 'react-toastify'
import { login, reset } from "../features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(5, "Must be 5 chars or more"),
    }),
    
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };

      dispatch(login(userData));
      console.log(userData);
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong")
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="w-full h-full flex">
      <div className="w-[70vw] bg-black flex justify-center items-center">
        <div className="w-[30%] h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-[2rem] font-bold">Login</h1>
          <div className="w-full mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter Email"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white pl-[2px]"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-600">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="mt-6">
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white pl-[2px]"
                  {...formik.getFieldProps("password")}
                />
                <div className="flex justify-between">
                  <div>
                    {formik.touched.password && formik.errors.password ? (
                      <p className="text-red-600">{formik.errors.password}</p>
                    ) : null}
                  </div>
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
                <button
                  type="submit"
                  className="bg-[#EEE1FF] text-black rounded-lg font-bold px-20 py-2 hover:bg-[#a771ee]"
                >
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
