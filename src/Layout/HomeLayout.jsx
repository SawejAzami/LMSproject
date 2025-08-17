
import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai" 
import Footer from "../Componenets/Footer";
import { Link } from "react-router-dom";

function Home({children}){
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

                <li to="/courses">
                  <Link to="/">All Courses</Link>
                </li>
                <li to="/contact">
                  <Link to="/"> Contact Us</Link>
                </li>
                <li to="/about">
                  <Link to="/">About Us</Link>
                </li>
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