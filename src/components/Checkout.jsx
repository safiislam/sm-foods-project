import { useEffect, useRef, useState } from "react";
import { getLocalData } from "../utils/setLocalStorage";

const Checkout = () => {
    const [data, setData] = useState([]);
    const modalRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        address: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            const localData = await getLocalData();
            setData(localData);
        };
        fetchData();
    }, [getLocalData, data]);
    const productDetails = {}

    const totalPrice = data.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form data
        const d = { formData, totalPrice, item: [...data] }
        console.log(d);
        // Close the modal after submitting
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

            {data.length > 0 ? (
                <div>
                    <table className="min-w-full bg-white border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 border-b">Image</th>
                                <th className="py-2 border-b">Name</th>
                                <th className="py-2 border-b">Category</th>
                                <th className="py-2 border-b">Price</th>
                                <th className="py-2 border-b">Quantity</th>
                                <th className="py-2 border-b">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id} className="text-center">
                                    <td className="py-2 border-b">
                                        <img src={item.Image} alt={item.name} className="w-20 h-20 object-cover" />
                                    </td>
                                    <td className="py-2 border-b">{item.name}</td>
                                    <td className="py-2 border-b">{item.category}</td>
                                    <td className="py-2 border-b">${item.price}</td>
                                    <td className="py-2 border-b">{item.quantity}</td>
                                    <td className="py-2 border-b">${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6 text-right">
                        <h3 className="text-xl font-semibold">Total Price: ${totalPrice}</h3>
                        <button
                            onClick={() => modalRef.current.showModal()}
                            className="w-full bg-orange-400 font-semibold mt-3 text-white py-3 text-xl">Confirm Order</button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-700">No items in the cart.</p>
            )}

            <dialog id="my_modal_1" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mt-4 w-[70%] lg:w-[90%] mx-auto">
                        অর্ডার করতে আপনার তথ্য প্রদান করুন
                    </h3>

                    <div className="max-w-md mx-auto mt-3 p-6 bg-white rounded-md shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Your Full Name"
                                    className="w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contactNumber" className="block text-gray-700 font-bold mb-2">
                                    Mobile Number
                                </label>
                                <input
                                    type="number"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Enter Phone number"
                                    className="no-arrows w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter Your Delivery Location."
                                    className="w-full p-2 border rounded-md focus:outline-none focus:border-orange-400"
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    value="Send"
                                    className="px-6 lg:px-12 py-2 rounded-md text-white font-bold lg:text-lg text-base bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 mr-5"
                                >
                                    Confirm Order
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="modal-action absolute top-0 right-5">
                        <form method="dialog">
                            <button
                                type="button"
                                onClick={() => modalRef.current.close()}
                                className="px-3 py-1 rounded-full bg-slate-300 shadow-xl text-black hover:text-white border-2 hover:bg-slate-900 focus:outline-none focus:shadow-outline-blue font-bold active:bg-orange-500"
                            >
                                X
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Checkout;
