import person from "../../../assets/about_us/person.jpg"
import parts from "../../../assets/about_us/parts.jpg"
const AboutSection = () => {
  return (
    <div className="card lg:card-side bg-base-100  my-20">
      <figure className='md:w-1/2 relative'>
        <img
        className="rounded-md w-[480px] h-[473px]"
          src={person}
          alt="Album"
        />
        <img
        className="rounded-lg z-10 absolute bottom-1 -right-2 w-[327px] h-[332px] border-[5px] border-white"
          src={parts}
          alt="Album"
        />
      </figure>
      <div className="card-body md:w-1/2 space-y-5">
        <h2 className="card-title text-[#FF3811] text-xl font-bold">About Us</h2>
        <h1 className="text-5xl font-bold w-2/3 leading-tight">We are qualified & of experience in this field</h1>
        <p className="text-base text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
        </p>
        <p className="text-base text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
        </p>
        <div className="card-actions justify-start">
          <button className="btn bg-[#FF3811] border-0">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
