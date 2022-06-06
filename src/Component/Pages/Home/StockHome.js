import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import useProductLoad from '../../Hooks/UseProductLoad';

const StockHome = () => {
    const [products] = useProductLoad()
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-500">Your Available Stock Product</h2>
                {products.length > 0 ? <div>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.slice(0,6).map((product) => (
                        <div key={product._id} className="group relative">
                            <div className=" min-h-80 flex justify-center aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                src={product.img}
                                alt=''
                                className="w-2/3 object-center object-cover rounded-lg lg:w-full border-2 lg:h-full"
                                />
                            </div>
                            <div className="mt-4">
                                <div className='flex'>
                                    <div>
                                        <h3 className="font-bold text-gray-700">Name: {product.name}</h3>
                                        <p className='font-bold text-gray-700'>Price: {product.price}</p>
                                    
                                        <p>Seller: {product.seller}</p>
                                        <p className="text-sm">{product.stock === 0 ? <span className='text-red-500 font-medium'>Sold Out</span> : <> Quantity:  {product.stock ===1 ?  <>{product.stock} Piece</> : <>{product.stock} Pieces</>}</>}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={()=> navigateToServiceDetail(product._id)} className="bg-red-500 mt-4 hover:bg-red-700 hover:text-white hover:font-medium w-full p-1 rounded">Stock Update</button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div className='flex justify-end'>
                <Link to="/inventory" className="text-base  font-bold text-white bg-red-400 p-2 rounded  hover:bg-red-700">
                            See All Items
                            </Link>
                </div>
                
                </div>
                : <div className="text-center mt-9"><Spinner text='Please Wait! Product Is Loading......'/></div>}
            </div>
        </div>
    );
};

export default StockHome;