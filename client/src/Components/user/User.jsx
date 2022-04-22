import React from 'react'
import { useUser } from '../../Contexts/user.context';

export default function User() {
    const { users } = useUser();

    if (!users) {
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
                    <i class="fas fa-list mr-3"></i> User
                </p>
                <div class="bg-white overflow-auto">
                    <table class="text-left w-full border-collapse">

                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">#</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">User UUID</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? users.map((user, index) => {
                                    return (

                                        <tr key={index} class="hover:bg-grey-lighter">
                                            <td class="py-4 px-6 border-b border-grey-light"> {index + 1} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {user.uuid} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {user.name} </td>
                                            <td class="py-4 px-6 border-b border-grey-light"> {user.email} </td>

                                        </tr>

                                    )
                                }) : <tr>
                                    <td class="py-4 px-6 border-b border-grey-light"> No User yet  </td>
                                </tr>
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
