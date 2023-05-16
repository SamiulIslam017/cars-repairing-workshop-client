import { FaTrash } from "react-icons/fa";

const BookingCard = ({booking, handleDelete, handleConfirm}) => {
    const {serviceName, price, date,img, _id, status} = booking;
    
    return (
        <div className="flex justify-between items-center mb-8">
            <div className="flex gap-6 items-center">
                <button onClick={()=> handleDelete(_id)} className="btn btn-error rounded-full text-lg"><FaTrash></FaTrash></button>
                <img className="w-36 h-36 object-cover rounded-lg" src={img} alt="" />
                <h3 className="text-xl font-bold">{serviceName}</h3>
            </div>
            <h3 className="text-xl font-bold">${price}</h3>
            <h3 className="text-xl font-bold">{date}</h3>
            {
                status === 'confirm' ? <button onClick={() => handleConfirm(_id)} className="btn btn-success border-0">Confirm</button> :
                <button onClick={() => handleConfirm(_id)} className="btn bg-[#ff3811] border-0">Pending</button>
            }

        </div>
    );
};

export default BookingCard;