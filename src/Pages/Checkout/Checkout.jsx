import { Link, useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/checkout/checkout.png"
import "./Checkout.css"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Checkout = () => {
    const service = useLoaderData();
    const{title, price, _id, img} = service;
    console.log(img);
    const {user} = useContext(AuthContext);
    const handleCheckOut = (e) => {
        e.preventDefault();
        const form = e.target;
        
        const name = user?.displayName;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const booking = {
            customerName: name,
            email,
            phone,
            message,
            img,
            date,
            service_id: _id,
            price: price,
            serviceName: title

        }
        fetch('https://cars-repairing-workshop-server.vercel.app/bookings', {
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service booked successfully');
            }
        })
    }
    return (
        <div className="max-w-7xl mx-auto ">
            {/* banner with breadcrumbs */}
            <div className="hero min-h-[300px] relative" style={{ backgroundImage: `url(${checkoutImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Checkout Page</h1>
                    
                    </div>
                </div>
                <div className="text-sm breadcrumbs bg-[#FF3811] rounded-sm py-4 px-12 absolute -bottom-1">
                    <ul className="relative scale-1">
                        <li className="text-white text-base"><Link to='/'>Home</Link></li> 
                        <li className="text-white text-base">Checkout</li>
                    </ul>
                </div>
            </div>

            {/* form */}
            <div className="my-20 bg-gray-100 p-24">
                <h2 className="text-3xl font-bold text-center">Book Services: <span className="text-[#ff3811]">{title}</span></h2>
                <p className="text-center text-xl font-bold mb-10">Price: <span className="text-[#ff3811]">${price}</span></p>
                <form onSubmit={handleCheckOut} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <input type="text" name="fName" defaultValue={user?.displayName} placeholder="Your name" className="input w-full" readOnly/>
                        <input type="date" name="date" className="input w-full" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <input type="text" name="phone" placeholder="Phone Number" className="input w-full" />
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Your email" className="input w-full" readOnly/>
                    </div>
                    <textarea placeholder="Your Message" name="message" className="textarea  textarea-lg w-full " ></textarea>

                    <input type="submit" className="btn btn-block bg-[#FF3811] border-0" value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;