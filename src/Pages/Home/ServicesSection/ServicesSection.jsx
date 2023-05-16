import { useEffect, useState } from "react";
import ServicesCard from "./SevicesCard/ServicesCard";

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://cars-repairing-workshop-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="my-20">
      <div className="text-center w-6/12 mx-auto mb-10">
        <h2 className="text-[#FF3811] text-xl font-bold">
            Service
        </h2>
        <h1 className="text-5xl font-bold leading-tight">
            Our Service Area
        </h1>
        <p className="text-base text-[#737373]">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don`&apos;`t look even slightly believable. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-10">
        {
            services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default ServicesSection;
