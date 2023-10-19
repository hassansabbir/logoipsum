import image1 from "../../../assets/banner1.png";
import image2 from "../../../assets/banner2.png";
import image3 from "../../../assets/banner3.png";
import image4 from "../../../assets/bannerBottom.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerSection h-[700px]">
      <div className="max-w-7xl mx-auto flex items-end justify-center gap-10">
        <div>
          <h2 className="text-5xl font-bold ">
            Find{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Partners
            </span>{" "}
            ( CAs ) <br /> available online
          </h2>
        </div>
        <div className="flex gap-10">
          <img src={image1} className="w-40 mt-20" alt="" />
          <img src={image2} className="w-40 mt-28" alt="" />
          <img src={image3} className="w-40 mt-36" alt="" />
        </div>
      </div>
      <img src={image4} className="w-full" alt="" />
    </div>
  );
};

export default Banner;
