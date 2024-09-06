"use client"
import React, { useEffect, useState } from 'react';
import custom from "../custom.module.css"



export default function ClientsiteRendering() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        // Define the async function inside useEffect
        async function fetchApi() {
            setTimeout(async () => {
                try {
                    const request = await fetch("https://dummyjson.com/users");
                    const response = await request.json();
                    setUser(response.users); // Set user data in state
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            }, 6000); // 6 seconds delay
        }

        fetchApi(); // Call the function
    }, []);

    console.log(user);

    return (
        <div className="p-10">
            <h1 className={`${custom.main} text-2xl font-medium`}>Client Side Rendering</h1>
            {
                (user && user.length > 0)
                &&
                <table>
                    <thead>
                        <tr>
                            <td className="px-5 py-2">#</td>
                            <td className="px-5 py-2 text-nowrap">First Name</td>
                            <td className="px-5 py-2 text-nowrap">Last Name</td>
                            <td className="px-5 py-2 text-nowrap">Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => (
                                < tr key={index} >
                                    <td className="px-5 py-2 text-xs">{index}</td>
                                    <td className="px-5 py-2 text-xs">{item?.firstName || ""}</td>
                                    <td className="px-5 py-2 text-xs">{item?.lastName || ""}</td>
                                    <td className="px-5 py-2 text-xs">{item?.email || ""}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div >
    )
}
