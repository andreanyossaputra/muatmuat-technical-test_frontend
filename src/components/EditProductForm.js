import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../store/productSlice";

const EditProductForm = ({productToEdit, setEditProduct}) => {
    const [name, setName] = useState(productToEdit.name);
    const [price, setPrice] = useState(productToEdit.price);
    const [stock, setStock] = useState(productToEdit.stock);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct({ ...productToEdit, name, price, stock}));
        setEditProduct(null);
    };

    useEffect(() => {
        setName(productToEdit.name);
        setPrice(productToEdit.price);
        setStock(productToEdit.stock);
    }, [productToEdit]);

    return(
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Update Produk</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Form untuk tambah produk
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="nama-produk" className="block text-sm font-medium leading-6 text-gray-900">
                Nama Produk
              </label>
              <div className="mt-2">
                <input
                  id="nama-produk"
                  name="nama-produk"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="harga-produk" className="block text-sm font-medium leading-6 text-gray-900">
                Harga Produk
              </label>
              <div className="mt-2">
                <input
                  id="harga-produk"
                  name="harga-produk"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="stock-produk" className="block text-sm font-medium leading-6 text-gray-900">
                Stock
              </label>
              <div className="mt-2">
                <input
                  id="stock-produk"
                  name="stock-produk"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update produk
        </button>
      </div>
    </form>
    );
};

export default EditProductForm;