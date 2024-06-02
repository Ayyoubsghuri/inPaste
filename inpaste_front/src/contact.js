import React from 'react'
import LOGO from "./images/logo.png";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";



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

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    return axios
      .post('http://localhost:8000/api/contact_info/', data)
      .then((response) => {
        if (response.data) {
          notify("Your message has been sent successfully 🥂!");
        }
      })
      .catch((error) => {
        notify("We are sorry something went wrong try again!");
      });
  }
  return (
    <>
    <Toaster />
      <h1 className="mx-auto text-4xl font-semibold leading-tight tracking-tight  text-center w-auto mb-2"  >Conatct Form :</h1>
      <div className="flex justify-center items-center  px-[1rem] sm:px-[1rem] md:px-[5rem]">

        <form method="POST" className="w-full py-2" onSubmit={handleSubmit(onSubmit)}>
     
          <div class="mb-2">
            <input {...register("email", { required: true })} type="email" maxLength="200" class=" mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Your Email..." required />
          </div>
          {/* i use 1000 because i limited char length on backend i use 'description' based on what name i used in backend  */}
          <textarea {...register("description", { required: true })} id="message" rows="4" maxLength="1000" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-700 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-900" placeholder="Leave a comment..."></textarea>
          <button type="submit" class="text-white bg-gray-700 my-8 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-300">Confirm</button>

        </form>
      </div>
    </>
  )
}

export default ContactForm