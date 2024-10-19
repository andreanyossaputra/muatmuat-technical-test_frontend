import React, {useState} from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";
import { ServerIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/20/solid'


function App() {
  const [editProduct, setEditProduct] = useState(null);

  return (
    <div className="App">
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">muatmuat</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frontend Technical Test muatmuat
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
      </div>
    </div>
      <div className="overflow-hidden bg-white py-8 sm:py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {!editProduct ? (
                    <AddProductForm/>
                ) : (
                    <EditProductForm productToEdit={editProduct} setEditProduct={setEditProduct}/>
                )}
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                </dl>
              </div>
            </div>
            <ProductList setEditProduct={setEditProduct}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
