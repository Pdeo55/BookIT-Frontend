import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Signup = () => {
  const [userType, setUserType] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNo: "",
      Organization: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(1, "First Name should not be empty")
        .required("required"),
      lastName: Yup.string()
        .min(1, "last Name should not be empty")
        .required("required"),
      email: Yup.string().email("Invalid email address").required("required"),
      password: Yup.string()
        .required("required")
        .min(5, "Must be 5 chars or more"),
      phoneNo: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "too short")
        .max(10, "too long"),
      Organization: Yup.string()
        .min(1, "Organization should not be empty")
        .required("required"),
    }),
    onSubmit: (values) => {
      if (userType.length === 0) {
        toast.error("Choose the usertype");
        return;
      }

      const userData = {
        name: values.firstName + " " + values.lastName,
        phoneNo: values.phoneNo,
        Organization: values.Organization,
        email: values.email,
        password: values.password,
        role: userType,
      };

      dispatch(register(userData));
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
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/");
    }

    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <div className="w-full h-full flex">
      <div className="w-[70vw] bg-black flex justify-center items-center">
        <div className="w-[60%] h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-[2rem] font-bold">Register</h1>
          <div className="w-full flex justify-evenly mt-16">
            <button
              className={
                userType === "Organizer"
                  ? "bg-[#a771ee] w-[8vw] px-5 py-2 text-black font-bold rounded-lg cursor-pointer"
                  : "bg-white w-[8vw] px-5 py-2 text-black font-bold rounded-lg cursor-pointer hover:bg-[#a771ee]"
              }
              onClick={() => setUserType("Organizer")}
            >
              Organizer
            </button>
            <button
              className={
                userType === "User"
                  ? "bg-[#a771ee] w-[8vw] px-5 py-2 text-black font-bold rounded-lg cursor-pointer"
                  : "bg-white w-[8vw] px-5 py-2 text-black font-bold rounded-lg cursor-pointer hover:bg-[#a771ee]"
              }
              onClick={() => setUserType("User")}
            >
              User
            </button>
          </div>
          <div className="w-full mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <label htmlFor="firstName" className="text-white">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    placeholder="Enter first name"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="text-red-600">{formik.errors.firstName}</p>
                  ) : null}
                </div>
                <div className="w-[45%]">
                  <label htmlFor="lastName" className="text-white">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    placeholder="Enter last name"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="text-red-600">{formik.errors.lastName}</p>
                  ) : null}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="organization" className="text-white">
                  Organization
                </label>
                <input
                  id="Organization"
                  type="text"
                  required
                  placeholder="Enter name of the organization"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                  {...formik.getFieldProps("Organization")}
                />
                {formik.touched.Organization && formik.errors.Organization ? (
                  <p className="text-red-600">{formik.errors.Organization}</p>
                ) : null}
              </div>
              <div className="flex justify-between mt-5">
                <div className="w-[45%]">
                  <label htmlFor="firstName" className="text-white">
                    Email Id
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter email Id"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-600">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="w-[45%]">
                  <label htmlFor="lastName" className="text-white">
                    Mobile Number
                  </label>
                  <input
                    id="phoneNo"
                    type="text"
                    required
                    placeholder="+91 1234567890"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    {...formik.getFieldProps("phoneNo")}
                  />
                  {formik.touched.phoneNo && formik.errors.phoneNo ? (
                    <p className="text-red-600">{formik.errors.phoneNo}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center mt-5">
                {/* <div className="flex flex-col mr-10">
                  <label htmlFor="type" className="text-white">
                    Type
                  </label>
                  <select
                    name="username"
                    id="username"
                    placeholder="choose one"
                    className="bg-black text-white border-b border-[#FECA00]"
                  >
                    <option value="choice" className="text-white">
                      Choose one
                    </option>
                    <option value="type1" className="text-white">
                      Type 1
                    </option>
                    <option value="type2" className="text-white">
                      Type 2
                    </option>
                  </select>
                </div> */}
                {/* <div>
                  <label htmlFor="organization" className="text-white">
                    Create Username
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                  />
                </div> */}
              </div>
              <div className="mt-5">
                <label htmlFor="password" className="text-white">
                  Create Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-600">{formik.errors.password}</p>
                ) : null}
              </div>
              <div className="w-full mt-10 flex flex-col items-center">
                <button
                  type="submit"
                  className="bg-[#EEE1FF] text-black rounded-lg font-bold px-8 py-2 hover:bg-[#a771ee]"
                >
                  SIGN UP
                </button>
                <p className="text-white mt-2 text-s">
                  Already a user?
                  <span className="uppercase cursor-pointer hover:underline ml-1 text-[#FECA00] font-bold">
                    <Link to={"/login"}> Login here </Link>
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

export default Signup;
