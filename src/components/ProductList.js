import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../store/productSlice";

const ProductList = ({setEditProduct}) => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (window.confirm('Apakah anda yakin ingin menghapus product berikut?')) {
            dispatch(deleteProduct(id));
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-5">
        {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg shadow-md p-6 hover:shadow-x1 transition duration-300">
                <h2 className="text-x1 font-bold">{product.name}</h2>
                <p>Harga: {product.price}</p>
                <p>Stok: {product.stock}</p>
                <div className="mt-4">
                    <button onClick={() => handleDelete(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                    <button onClick={() => setEditProduct(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">Edit</button>
                </div>
            </div>
        ))}
        </div>
    );
}


export default ProductList;