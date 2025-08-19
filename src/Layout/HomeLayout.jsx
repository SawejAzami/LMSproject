
import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai" 
import Footer from "../Componenets/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Home({children}){
      const dispatch=useDispatch()
      const navigate=useNavigate();
      const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn)
      const role=useSelector((state)=>state?.auth?.role)

    function changeWidth(){
        const drawerSide=document.getElementsByClassName("drawer-side")
        drawerSide[0].style.width='auto'
    }
    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 0;
    }

  async  function handleLogout(e){
      e.preventDefault();
      // const res=await dispatch(logout())
      if(res?.payload?.success)
      navigate("/")
    }
    return (
      <>
        <div className="min-h-[90vh]">
          <div className=" drawer absolute left-0 z-50 w-fit ">
            <input type="checkbox" id="my-drawer" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="cursor-pointer relative">
                <FiMenu
                  onClick={changeWidth}
                  size={"32px"}
                  className="font-bold text-white m-4"
                />
              </label>
            </div>
            <div className="drawer-side w-0 ">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu cursor-pointer p-4 w-48 sm:w-80 bg-base-100 text-base-content relative ">
                <li className="w-fit absolute right-2 z-50">
                  <button>
                    <AiFillCloseCircle onClick={hideDrawer} size={"24px"} />
                  </button>
                </li>

                <li>
                  <Link to="/">Home</Link>
                </li>
                {isLoggedIn && role === "ADMIN" && (
                  <li>
                    <Link to="/admin/dashboard">Admin DashBoard</Link>
                  </li>
                )}
                <li to="/courses">
                  <Link to="/">All Courses</Link>
                </li>
                <li to="/contact">
                  <Link to="/"> Contact Us</Link>
                </li>
                <li to="/about">
                  <Link to="/">About Us</Link>
                </li>

                {!isLoggedIn && (
                  <div className="w-full flex item-center justify-center">
                    <button>
                      <Link
                        to="/login"
                        className="btn btn-primary  px-4 py-5 font-semibold rounded-md w-full"
                      >
                        Login
                      </Link>
                    </button>
                    <button>
                      <Link
                        to="/signup"
                        className="btn btn-secondary  px-4 py-5 font-semibold rounded-md w-full ml-2"
                      >
                        signup
                      </Link>
                    </button>
                  </div>
                )}
                {isLoggedIn && (
                  <div className="w-full flex item-center justify-center">
                    <button>
                      <Link
                        to="/login"
                        className="btn btn-primary  px-4 py-5 font-semibold rounded-md w-full"
                      >
                        Profile
                      </Link>
                    </button>
                    <button>
                      <Link
                        to="/signup"
                        className="btn btn-secondary  px-4 py-5 font-semibold rounded-md w-full ml-2"
                      >
                        Logout
                      </Link>
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </>
    );
}

export default Home