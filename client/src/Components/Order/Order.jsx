import React from 'react'
import { useOrder } from '../../Contexts/order.context'

export default function Order() {
    const { orders } = useOrder();
    console.log(orders);

    if (!orders) {
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
                    <i class="fas fa-list mr-3"></i> Orders
                </p>
                <div class="bg-white overflow-auto">
                    <table class="text-left w-full border-collapse">

                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">#</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Order UUID</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">User</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Products </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.length > 0 ? orders.map((order, index) => {
                                    return (

                                        <tr key={index} class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light"> {index + 1} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {order.uuid} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {order.user.name} </td>
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {order?.products?.length || 0}

                                            </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {order.total} SDG </td>

                                        </tr>










                                    )
                                }) : <tr>
                                    <td class="py-4 px-6 border-b border-grey-light"> No Orders yet  </td>
                                </tr>
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
