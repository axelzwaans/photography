// import images
import WomanImg from "../img/home/woman.png";
import camera from "../img/home/camera.png";
import camera2 from "../img/home/camera2.jpg";

// import link
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              photographer <br /> & Artist
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Moray, Scotland
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </div>
          {/* img */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <img src={camera2} alt="Woman holding camera" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
