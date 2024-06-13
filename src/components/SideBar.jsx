import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { addToDb, getLocalData, removeFromDb, removeOneFromDb } from "../utils/setLocalStorage";
import Swal from "sweetalert2";


const SideBar = () => {
    const [data, setData] = useState([])
    const { isSidebarOpen, setIsSidebarOpen } = useContext(AuthContext)
    const handleAddToCart = (product) => {
        console.log(product);
        addToDb(product?.id)
    }
    const handleRemoveCart = (item) => {
        removeOneFromDb(item.id)
    }
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure for delete?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Cart is Delete",
                    showConfirmButton: false,
                    icon: "success",
                    timer: 1000
                });
                removeFromDb(item.id)
            }
        });

    }
    useEffect(() => {
        const fetchData = async () => {
            const localData = await getLocalData();
            setData(localData);
        };
        fetchData();
    }, [getLocalData, data]);
    const totalprice = data.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
    return (
        <div className={`${isSidebarOpen ? 'fixed right-0 top-1/2 transform -translate-y-1/2 z-40' : 'fixed right-[-1000px] top-1/2 transform -translate-y-1/2 z-40'} overflow-hidden h-screen md:h-[75%] w-full md:w-[30%] transition-right duration-500 bg-white text-black`}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-8 border-b">
                    <p className="text-3xl font-bold">Shopping Cart</p>
                    <span onClick={() => setIsSidebarOpen(false)} className="text-3xl cursor-pointer">x</span>
                </div>
                <div className="flex-1 overflow-y-auto px-8 py-4">
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex justify-between mt-8">
                                <div className="flex items-center gap-3">
                                    <img className="w-20 h-20" src={item.Image} alt="" />
                                    <div className="flex flex-col">
                                        <div>
                                            <p>{item.name}</p>
                                            <p>Tk{item.price}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => handleRemoveCart(item)} className="btn text-xl">-</button>
                                            <span className="px-4">{item?.quantity}</span>
                                            <button onClick={() => handleAddToCart(item)} className="btn text-xl">+</button>
                                        </div>
                                    </div>
                                </div>
                                <span onClick={() => handleDelete(item)} className="text-lg cursor-pointer">x</span>
                            </div>
                        ))
                    }
                </div>
                <div className="bg-gray-200 border-t p-4">
                    <div className="flex justify-between py-2">
                        <span className="text-xl font-semibold">Subtotal</span>
                        <span className="text-xl font-semibold">Tk{totalprice}</span>
                    </div>
                    <button className="w-full bg-orange-400 py-3 text-xl">Check Out</button>
                </div>
            </div>
        </div>


    );
};

export default SideBar;