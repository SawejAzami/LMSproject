import HomeLayout from "../Layout/HomeLayout"
import aboutImg from "../Assets/image/aboutImg.webp"
import AlbertEinstein from "../Assets/image/AlbertEinstein.webp";
import APJAbdulKalam from "../Assets/image/APJAbdulKalam.webp";
import nalsanMandela from "../Assets/image/nalsanMandela.webp";
import SteveJobs from "../Assets/image/SteveJobs.webp";

function Aboutus(){
    return (
      <HomeLayout>
        <div className="pl-20 pt-20 flex flex-col text-white">
          <div className="flex justify-between items-center gap-5 mx-10">
            <section className="w-1/2 space-y-10">
              <h1 className=" text-5xl text-yellow-500 font-semibold ">
                Affordable and quality education
              </h1>
              <p className="text-xl text-gray-200">
                Our goal is to provide tha Affordable and quality education to
                the world. We are providing the platform for the aspiring
                teacher and students to share their skills, creativity and
                knowledge to each other to empower and contribute in the growth
                and wellness of mankind.
              </p>
            </section>
            <div className="w-1/2 flex items-center justify-center">
              <img
                className="drop-shadow-2xl rounded-2xl  "
                src={aboutImg}
                alt="about main image"
                id="test1"
              />
            </div>
          </div>

          <div className="carousel w-1/2 m-auto my-16 ">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={AlbertEinstein}
                  className="w-50 h-50  rounded-full  border-2 border-gray-400"
                />
                <p className="text-xl text-gray-200">
                  “Try not to become a man of success, but rather try to become
                  a man of value.”
                </p>
                <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
              <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={APJAbdulKalam}
                  className="rounded-full  border-2 w-50 h-50 border-gray-400"
                />
                <p className="text-xl text-gray-200">
                  “If you want to shine like a sun, first burn like a sun.”
                </p>
                <h3 className="text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
              <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={nalsanMandela}
                  className="rounded-full  border-2 w-50 h-50  border-gray-400"
                />
                <p className="text-xl text-gray-200">
                  “Education is the most powerful weapon which you can use to
                  change the world.”
                </p>
                <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
              <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img
                  src={SteveJobs}
                  className="w-50 h-50  rounded-full  border-2 border-gray-400"
                />
                <p className="text-xl text-gray-200">
                  “Your time is limited, so don’t waste it living someone else’s
                  life.”
                </p>
                <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    );
}
export default Aboutus