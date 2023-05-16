import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServicesCard = ({service}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={service.img}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        
        <div className="card-actions flex justify-between text-[#FF3811]">
        <p className=" text-lg font-medium">Price: ${service.price}</p>
          <Link to={`/checkout/${service._id}`}><FaArrowRight></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
