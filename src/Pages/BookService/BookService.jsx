import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import checkoutImg from "../../assets/checkout/checkout.png"
import BookingCard from "./BookingCard";
const BookService = () => {
    const{user} = useContext(AuthContext);
    const url = `https://cars-repairing-workshop-server.vercel.app/bookings?email=${user.email}`
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(url, {
            method:'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (!data.error) {
                
                setBookings(data)
            }else {
                //logout then navigate
                navigate('/')
            }
        })
       

    },[url, navigate]);
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`https://cars-repairing-workshop-server.vercel.app/bookings/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Delete successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleConfirm = id => {
        fetch(`https://cars-repairing-workshop-server.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : "application/json"
            },
            body:JSON.stringify({status: 'confirm'})


        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = bookings.filter(booking => booking._id !== id);
                const update = bookings.find(booking => booking._id === id);
                update.status = 'confirm'
                const newBookings = [update, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <div className="max-w-7xl mx-auto">
            {/* banner with breadcrumbs */}
            <div className="hero min-h-[300px] relative" style={{ backgroundImage: `url(${checkoutImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bookings Details</h1>
                    
                    </div>
                </div>
                <div className="text-sm breadcrumbs bg-[#FF3811] rounded-sm py-4 px-12 absolute -bottom-1">
                    <ul className="relative scale-1">
                        <li className="text-white text-base"><Link to='/'>Home</Link></li> 
                        <li className="text-white text-base">Bookings Details</li>
                    </ul>
                </div>
            </div>
            <div className="my-20">
                {
                    bookings.map(booking => <BookingCard
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleConfirm={handleConfirm}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookService;