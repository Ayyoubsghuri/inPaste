import React, { useState } from 'react';
import LOGO from "./images/logo.png";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from "react-hot-toast";
import Footer from './footer/footer';
import { useParams } from 'react-router-dom';

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

function PassPage() {
    const { id } = useParams(); // Capture URL code
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const onSubmit = (data) => {
        const requestData = { code: id, password: data.password_key };
        return axios
            .post('http://localhost:8000/api/paste_data_info_code/', requestData)
            .then((response) => {
                if (response.data["incorrect_pass"]) {
                    notify("Plz enter password to retrieve data!");
                    console.log("hiiiiiiiiiii");

                }else{
                    const { title, description, tags } = response.data;
                    setTitle(title);
                    setDescription(description);
                    setTags(tags);
                    localStorage.setItem(id, JSON.stringify({ title, description, tags }));
                    notify('Data retrieved and saved successfully!');
                }
            })
            .catch((error) => {
                notify(`Error: ${error.response?.data?.message || error.message}`);
            });
    };

    return (
        <>
            <section>
                <div className="bg-grey-600">
                    <nav className="flex justify-around">
                        <div className="flex flex-wrap justify-around items-center w-full">
                            <img className="size-[4.6rem] w-auto invert" src={LOGO} alt="logo" />
                        </div>
                    </nav>
                </div>
            </section>
            <h1 className="mx-auto text-2xl font-semibold leading-tight tracking-tight text-center w-auto mb-2">This Paste Need Password to Open:</h1>
            <div className="flex justify-center items-center px-[1rem] sm:px-[1rem] md:px-[5rem]">
                <form method="POST" className="w-full py-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2">
                        <input
                            type="password"
                            {...register("password_key", { required: true })}
                            id="password"
                            maxLength="200"
                            className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            placeholder="Your password..."
                        />
                        {errors.password_key && <span className="text-red-500">Password is required</span>}
                    </div>
                    <button type="submit" className="text-white bg-gray-700 my-8 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-300">
                        Submit and Show Paste!
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default PassPage;
