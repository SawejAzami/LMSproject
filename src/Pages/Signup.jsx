import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout"
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast"
import { createAccount } from "../Redux/Slice/AuthSlice";

 function Signup(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [previewImage,setPreviewImage]=useState("");
    const [signupData,SetSignupData]=useState({
        fullname:"",
        email:"",
        password:"",
        avatar:""
    })
    function handleUserInput(e) {
      const { name, value } = e.target;
      SetSignupData({
        ...signupData,
        [name]: value,
      });
    }
    function handleImage(e){
        e.preventDefault();
        const uploadImage=e.target.files[0];
        if(uploadImage){
            SetSignupData({
                ...signupData,
                avatar:uploadImage
            })
            const fileReader=new FileReader();
            fileReader.readAsDataURL(uploadImage)
            fileReader.addEventListener("load",function(){
                setPreviewImage(this.result);
            })
        }
    }
     
   async function createNewAccount(e){
      e.preventDefault();
      if(!signupData.email||!signupData.password||!signupData.fullname||!signupData.avatar){
        toast.error("Please fill all the details");
        return;
      }
      // checking name field length
      if(signupData.fullname.length<5){
        toast.error("Name should be atleast of 5 chracters..")
        return;
      }
      // checking for email
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          signupData.email
        )
      ) {
        toast.error("Email is not correct.");
        return;
      }

      // checking password validation
      if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,16}$/.test(
          signupData.password
        )
      ) {
        toast.error(
          "Password should be 6–16 characters long, with at least one uppercase, one lowercase, one number, and one special character"
        );
        return;
      }
      const formData=new FormData();
      formData.append("fullname",signupData.fullname);
      formData.append("email",signupData.email);
      formData.append("password",signupData.password);
      formData.append("avatar",signupData.avatar);

      // dispatch create account action

      const response = await dispatch(createAccount(formData));
      if(response?.payload?.success){
        navigate("/")
      }


      SetSignupData({
        fullname: "",
        email: "",
        password: "",
        avatar: "",
      });
      setPreviewImage("")


    }
    return (
      <HomeLayout>
        <div className="flex items-center justify-center h-[90vh]">
          <form 
            onSubmit={createNewAccount}
            action=""
            className="flex flex-col justify-center  gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
          >
            <h1 className="text-center text-2xl font-bold">
              Registration Page
            </h1>
            <label htmlFor="image_uploads" className="cursor-pointer">
              {previewImage ? (
                <img
                  className="w-24 h-24 rounded-full m-auto"
                  src={previewImage}
                />
              ) : (
                <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
              )}
            </label>
            <input
              onChange={handleImage}
              type="file"
              className="hidden"
              id="image_uploads"
              accept=".jpg, .jpeg,.png,.svg"
            />
            <div className="flex flex-col gap-1">
              <label htmlFor="fullname"> Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your name.."
                onChange={handleUserInput}
                value={signupData.fullname}
                className="bg-transparent px-2 py-1 border"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email.."
                onChange={handleUserInput}
                value={signupData.email}
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
                value={signupData.password}
                className="bg-transparent px-2 py-1 border"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 py-2 font-semibold text-lg cursor-pointer "
            >
              create Account
            </button>
            <p className="text-center">
              Already have an account ?
              <Link className="link text-accent " to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </HomeLayout>
    );
   
}

export default Signup