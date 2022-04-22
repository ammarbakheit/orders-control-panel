import React, { useRef } from 'react'
import { useProduct } from '../../Contexts/product.context';

export default function Product() {
    const { products, addNewProduct } = useProduct();

    // add product
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameRef.current.value && priceRef.current.value) {
            addNewProduct({
                name: nameRef.current.value,
                price: priceRef.current.value
            });
            nameRef.current.value = "";
            priceRef.current.value = "";
        }
    }


    if (!products) {
        return (
            <div>
                <h1> No orders yet </h1>
            </div>
        )
    }
    return (
        <div className='px-5'>

            <div class="w-full mt-12">
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> Product
                </p>
                <div class="bg-white overflow-auto">
                    <table class="text-left w-full border-collapse">

                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">#</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Product UUID</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Proce</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? products.map((product, index) => {
                                    return (
                                        <tr key={index} class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light"> {index + 1} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {product.uuid} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {product.name} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {product.price} SDG </td>
                                        </tr>
                                    )
                                }) : <tr>
                                    <td class="py-4 px-6 border-b border-grey-light"> No Product yet  </td>
                                </tr>
                            }


                        </tbody>
                    </table>
                </div>

            </div>


            <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                <p class="text-xl pb-6 flex items-center">
                    <i class="fas fa-list mr-3"></i>Add Product
                </p>
                <div class="leading-loose">
                    <form onSubmit={(e) => handleSubmit(e)} class="p-10 bg-white rounded shadow-xl">
                        <div class="my-5">
                            <label class="block text-sm text-gray-600" >Name</label>
                            <input ref={nameRef} class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="name" name="name" type="text" required="" placeholder="Product Name" aria-label="Name" />
                        </div>
                        <div class="my-5">
                            <label class="block text-sm text-gray-600" >Price</label>
                            <input ref={priceRef} class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="name" name="name" type="number" required="" placeholder="Product Price" aria-label="Name" />
                        </div>

                        <div class="mt-6">
                            <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
