import React from 'react'
import LOGO from "./images/logo.png";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from "react-hot-toast";
import Footer from './footer/footer'



const notify = (text) =>
    toast.custom((t) => (
        <div
            id="body"
            className={`bg-white px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-down' : 'animate-upp '
                }`}
        >
            {text}
        </div>
    ));

function PastePage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        return axios
            .post('http://localhost:8000/api/paste_data_info/', data)
            .then((response) => {
                if (response.data) {
                    notify("Your Paste has been Created 🥂!");
                    setTimeout(() => {
                        window.location.href = `/PastePage/${response.data["code"]}`;
                    }, 3000);
                    
                }
            })
            .catch((error) => {
                notify("We are sorry something went wrong try again!");
            });
    }
    return (
        <>
            <section>
                <section className="" >
                    <div className=" bg-grey-600 ">
                        <nav className="flex justify-around">
                            <div className="flex flex-wrap justify-around items-center w-full">
                                <img className="size-[4.6rem] w-auto invert" src={LOGO} alt="logo" />
                            </div>
                        </nav>
                    </div>
                </section>

            </section>
            <h1 className="mx-auto text-4xl font-semibold leading-tight tracking-tight  text-center w-auto mb-2"  >Your Paste To Share:</h1>
            <div className="flex justify-center items-center  px-[1rem] sm:px-[1rem] md:px-[5rem]">

                <form method="POST" className="w-full py-2" onSubmit={handleSubmit(onSubmit)}>
                    <div class="m-2">
                        <input type="text" {...register("title", { required: true })} maxLength="200" class=" mb-2 shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Title..." required />
                    </div>
                    <textarea id="message" {...register("description", { required: true })} rows="10" maxLength="1000" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-700 dark:text-gray-700 dark:focus:ring-gray-500 dark:focus:border-gray-900" placeholder="Subject goes here..."></textarea>

                    <div class="m-2">
                        <input type="text" {...register("tags", { required: false })} maxLength="200" class=" mb-2 shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Tags ..." required />
                    </div>
                    <label for="expire" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select your ExpireDate for this paste (default is Never):</label>
                    <select id="expire" {...register("expiration_choice", { required: true })} class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option default value="never">Never</option>
                        <option value="burn_after_read">Burn after read</option>
                        <option value="1day">1 Day</option>
                        <option value="1week">1 Week</option>
                        <option value="1month">1 Month</option>
                    </select>
                    {/* i use 1000 because i limited char length on backend  */}
                    <div class="m-4">
                        <input id="checkbox-1" {...register("password_protected", { required: false })} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-1"  class="ms-2 text-sm font-medium text-gray-900 dark:text-black">Check if you want your Paste to be protected by password.(Optional)</label>
                    </div>
                    <div class="mt-2">
                        <input type="password"  {...register("password_key", { required: false })} id="email" maxLength="200" class=" mb-2 shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Your password..." />
                    </div>


                    <button type="submit" class="text-white bg-gray-700 my-8 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-300">Save & Redirect Me!</button>

                </form>
            </div>
            <Footer />

        </>
    )
}

export default PastePage