import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import useProductLoad from '../../Hooks/UseProductLoad';


const ManegeProduct = () => {
    const [products , setProducts] = useProductLoad()
    
    
    const deleteProduct = id =>{
        const proceed = window.confirm('are you sure you want to delete this')
        if(proceed){
            
            axios.delete(`https://warehouse-api-server.herokuapp.com/stock/${id}`)
            .then(data => {
                if(data.data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                    toast.success('Item Deleted Successfully')
                }
            })
        }
    }
    return (
        
            <>
                <Helmet>
                <title>Manege Product - WareHouse</title>
                </Helmet>
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                    <div className="border-t border-gray-200" />
                    </div>
                </div>
                <div className="mt-10 sm:mt-0">
                    <div className="">
                   
                        <div className="mt-5 md:mt-0 md:col-span-2">
                        <h3 className="text-2xl ml-4 font-medium leading-6 text-gray-900">Delete Product</h3>
                        {products.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                {
                                    products.map( (product) =>  <div className="bg-red-50 shadow-md hover:shadow-xl rounded-lg p-4 m-3" key={product._id}>
                                                                    <div className='flex justify-center mb-2'>
                                                                        <img className='rounded-full border-2 border-red-400 p-4 w-52 md:w-40' src={product.img} alt="" />
                                                                    </div>
                                                                    <div className='flex justify-between px-1 items-center'>
                                                                        <div className='mr-5'>
                                                                            <p className=''>Name: {product.name}</p>
                                                                            <p className='font-bold'>{product.stock === 0 ? <span className='text-red-500 font-medium'>Sold Out</span> : <> Quantity:  {product.stock ===1 ?  <>{product.stock} Piece</> : <>{product.stock} Pieces</>}</>}</p>
                                                                        </div>
                                                                        <button onClick={()=>{
                                                                            deleteProduct(product._id)
                                                                        }} className='bg-red-500 text-white font-semibold p-1 px-2 md:px-3 rounded-md hover:font-bold md:mt-4 hover:bg-red-700 duration-500 text-center'>Delete</button>
                                                                    </div>
                                                                </div>
                                                                )
                                }
                            </div>
                            : <div className="text-center mt-9"><Spinner text='Please wait! Product is Loading......'/></div>}
                        </div>
                    </div>
                </div>
            </>
    );
};

export default ManegeProduct;