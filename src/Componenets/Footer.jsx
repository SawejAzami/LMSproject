import {BsFacebook,BsLinkedin,BsTwitter,BsInstagram} from "react-icons/bs"

function Footer(){
    const currYear=new Date();
    const year=currYear.getFullYear();
    return (
      <>
        <footer className="relative left-0 bottom-0 py-5 px-5 h-[20vh] flex flex-col  items-center justify-between text-white bg-gray-800  md:flex-row">
          <section className="text-lg">
            copyright {year} | All right reserved
          </section>
          <section className="flex items-center justify-center gap-5 text-2xl text-white">
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
              <BsFacebook />
            </a>
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
              <BsLinkedin />
            </a>
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
              <BsTwitter />
            </a>
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
              <BsInstagram />
            </a>
          </section>
        </footer>
      </>
    );
}
export default Footer