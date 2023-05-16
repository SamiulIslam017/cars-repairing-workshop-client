import crOne from "../../../assets/homeCarousel/1.jpg";
import crTwo from "../../../assets/homeCarousel/2.jpg";
import crThree from "../../../assets/homeCarousel/3.jpg";
import crFour from "../../../assets/homeCarousel/4.jpg";
import "./Banner.css"
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={crOne} className="w-full object-cover" />
        <div className="custom-overlay"></div>
        <div className="absolute w-2/6 transform -translate-y-1/2 left-32 right-5 top-1/2 gap-3 text-white space-y-7">
          <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-info mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
          <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={crTwo} className="w-full object-cover" />
        <div className="custom-overlay"></div>
        <div className="absolute w-2/6 transform -translate-y-1/2 left-32 right-5 top-1/2 gap-3 text-white space-y-7">
          <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-info mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
          <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={crThree} className="w-full object-cover" />
        <div className="custom-overlay"></div>
        <div className="absolute w-2/6 transform -translate-y-1/2 left-32 right-5 top-1/2 gap-3 text-white space-y-7">
          <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-info mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
          <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <img src={crFour} className="w-full object-cover " />
        <div className="custom-overlay"></div>
        <div className="absolute w-2/6 transform -translate-y-1/2  right-32 top-1/2 gap-3 text-white space-y-7 ">
          <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-info mr-5">Discover More</button>
            <button className="btn btn-outline border-white text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-3">
          <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
