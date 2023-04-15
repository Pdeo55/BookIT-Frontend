import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
    Organization: "",
  });

  const { firstName, lastName, email, password, phoneNo, Organization } =
    formData;

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

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: firstName + " " + lastName,
      phoneNo,
      email,
      password,
      Organization,
      userType,
    };

    dispatch(register(userData));
    console.log(userData);
  };

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
            <form onSubmit={onSubmitHandler}>
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <label htmlFor="firstName" className="text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter first name"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    onChange={onChange}
                    value={firstName}
                    name="firstName"
                  />
                </div>
                <div className="w-[45%]">
                  <label htmlFor="lastName" className="text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter last name"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    onChange={onChange}
                    value={lastName}
                    name="lastName"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="organization" className="text-white">
                  Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter name of the organization"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                  onChange={onChange}
                  value={Organization}
                  name="Organization"
                />
              </div>
              <div className="flex justify-between mt-5">
                <div className="w-[45%]">
                  <label htmlFor="firstName" className="text-white">
                    Email Id
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email Id"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    onChange={onChange}
                    value={email}
                    name="email"
                  />
                </div>
                <div className="w-[45%]">
                  <label htmlFor="lastName" className="text-white">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="+91 1234567890"
                    className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                    onChange={onChange}
                    value={phoneNo}
                    name="phoneNo"
                  />
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
                  type="password"
                  required
                  placeholder="Enter password"
                  className="w-full bg-black border-b border-[#FECA00] outline-none text-white"
                  onChange={onChange}
                  value={password}
                  name="password"
                />
              </div>
              <div className="w-full mt-10 flex flex-col items-center">
                <button className="bg-[#EEE1FF] text-black rounded-lg font-bold px-8 py-2 hover:bg-[#a771ee]">
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
