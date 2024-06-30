import React, { useState, useEffect } from 'react';
import LOGO from "./images/logo.png";
import axios from 'axios';
import toast from "react-hot-toast";
import Footer from './footer/footer';
import { useParams } from 'react-router-dom';
import PassPage from './passpage'; // Assuming PassPage contains your modal logic
import { Modal, Backdrop, Box } from '@mui/material'; // Import necessary components from Material-UI
import Fade from '@mui/material/Fade';

const notify = (text) =>
    toast.custom((t) => (
        <div
            id="body"
            className={`bg-white px-6 py-4 shadow-md rounded-full ${t.visible ? 'animate-down' : 'animate-upp'}`}
        >
            {text}
        </div>
    ));
const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60%",
        height:"80%",
        overflowY: "auto",
        borderRadius: 5,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 0,
};

function ShowPaste() {
    const params = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [openModal, setOpenModal] = useState(false); // State to manage modal visibility
    const [modalData, setModalData] = useState(null); // State to store modal data

    useEffect(() => {
        const cachedData = localStorage.getItem(params.id);
        if (cachedData) {
            const { title, description, tags } = JSON.parse(cachedData);
            setTitle(title);
            setDescription(description);
            setTags(tags);
        } else {
            const fetchData = async () => {
                try {
                    const response = await axios.post('http://localhost:8000/api/paste_data_info_code/', { code: params.id });
                    if (response.data) {
                        if(response.data["error_pass"]){
                            setOpenModal(true);
                        }else{
                        const { title, description, tags } = response.data;
                        setTitle(title);
                        setDescription(description);
                        setTags(tags);
                        localStorage.setItem(params.id, JSON.stringify({ title, description, tags }));
                        }
                    } else {
                        // If response data is empty, show modal
                        console.log("im here")
                        setOpenModal(true);
                    }
                } catch (error) {
                    notify(error.message);
                }
            };
            fetchData();
        }
    }, [params.id]);

    const closeModal = () => {
        setOpenModal(false);
    };
    const handlePasswordSubmit = () => {
        // You would typically have logic here to verify the password entered
        // Once verified, close the modal
        setOpenModal(false);
    };
    return (
        <>
            <section>
                <section className="">
                    <div className="bg-grey-600">
                        <nav className="flex justify-around">
                            <div className="flex flex-wrap justify-around items-center w-full">
                                <img className="size-[4.6rem] w-auto invert" src={LOGO} alt="logo" />
                            </div>
                        </nav>
                    </div>
                </section>
            </section>
            <h1 className="mx-auto text-4xl font-semibold leading-tight tracking-tight text-center w-auto mb-2">Your Paste:</h1>
            <div className="flex justify-center items-center px-[1rem] sm:px-[1rem] md:px-[5rem]">
                <div className="w-full py-2">
                    <div className="m-2">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength="200"
                            className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            placeholder="Title..."
                            required
                        />
                    </div>
                    <textarea
                        id="message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="10"
                        maxLength="1000"
                        className="block p-2.5 w-full text-sm text-gray-200 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-700 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-900"
                        placeholder="Subject goes here..."
                    ></textarea>
                    <div className="m-2">
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            maxLength="200"
                            className="mb-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                            placeholder="Tags ..."
                            required
                        />
                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                // onClose={closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <PassPage onClose={handlePasswordSubmit}/>
                    </Box>
                </Fade>
            </Modal>
            <Footer />
        </>
    );
}

export default ShowPaste;
