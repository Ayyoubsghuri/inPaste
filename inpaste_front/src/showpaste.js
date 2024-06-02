import React from 'react'
import LOGO from "./images/logo.png";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from "react-hot-toast";
import Footer from './footer/footer'
import { useParams } from 'react-router-dom'


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

function ShowPaste() {
    const params = useParams()
    // console.log(params)
    const data = { "code":params["id"] };
    console.log(params["id"])
    axios
        .post('http://localhost:8000/api/paste_data_info_code/', data)
        .then((response) => {
            if (response.data) {
                let title = response.data["title"];
                let description = response.data["description"];
                let tags = response.data["tags"];
            }
        })
        .catch((error) => {
            setTimeout(() => {
                notify(error);
            }, 3000);
            
        });

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
            <h1 className="mx-auto text-4xl font-semibold leading-tight tracking-tight  text-center w-auto mb-2"  >Your Paste:</h1>
            <div className="flex justify-center items-center  px-[1rem] sm:px-[1rem] md:px-[5rem]">

                <div className="w-full py-2">
                    <div class="m-2">
                        <input type="text" value="{{title}}" maxLength="200" className=" mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Title..." required />
                    </div>
                    <textarea id="message" value={{description}}" rows="10" maxLength="1000" className="block p-2.5 w-full text-sm text-gray-200 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-700 dark:text-gray-700 dark:focus:ring-gray-500 dark:focus:border-gray-900" placeholder="Subject goes here..."></textarea>

                    <div class="m-2">
                        <input type="text" value={{tags}} maxLength="200" className=" mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Tags ..." required />
                    </div>
                    {/* <button type="submit" class="text-white bg-gray-700 my-8 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-300">Save & Redirect Me!</button> */}

                </div>
            </div>
            <Footer />

        </>
    )
}

export default ShowPaste