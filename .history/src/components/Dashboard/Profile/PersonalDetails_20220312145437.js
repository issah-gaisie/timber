import React, { useState, useRef, useEffect } from 'react'
import { RiEditBoxLine, RiCloseLine, RiCameraSwitchLine } from 'react-icons/ri'
import {BiTrashAlt} from 'react-icons/bi'
import toast from 'react-hot-toast';
const PersonalDetails = () => {
    const [state, setState] = useState({
        username: 'ErnestGaisie',
        firstName: 'Ernest',
        lastName: 'Gaisie',
        email: 'ernestgaisie@gmail.com',
        phoneNumber: '+23355234566'
    })
    const [disabled, setDisabled] = useState(true)
    const toggleDisable = () => setDisabled(oldState => !oldState)
    const handleChange = (e) => {
        const { value, id } = e.target;
        setState(oldState => ({ ...oldState, [id]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const changeProfilePromise = new Promise((resolve, reject) =>
            setTimeout(
                () =>
                    resolve({
                        message: "Profile Changed Successfully",
                        status: 200,
                        data: [],
                    }),
                1000
            )
        );
        // handles the toast loader for the login process
        toast.promise(changeProfilePromise, {
            loading: "Updating Profile",
            success: "Profile Changed Successfully",
            error: "Profile Update Failed",
        });
    }

    return (
        <div className='flex flex-col w-full'>
            <div className="flex justify-between items-center my-6">
                <h4 className="text-left text-xl md:text-2xl text-gray-600 font-semibold">
                    Personal Details
                </h4>

                <div>
                    {disabled ?

                        <div className="">
                            <button onClick={toggleDisable} className="md:hidden rounded rounded-full p-2 shadow-lg bg-gray-700 hover:bg-gray-800 ">
                                <RiEditBoxLine className="text-lg text-white" />
                            </button>
                            <button onClick={toggleDisable} className="hidden md:block bg-gray-700 hover:bg-gray-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-lg">
                                Edit
                            </button>
                        </div>
                        :
                        <div>
                            <button onClick={toggleDisable} className="md:hidden rounded rounded-full p-1.5 shadow-lg bg-red-700 hover:bg-red-800 ">
                                <RiCloseLine className="text-lg text-white" />
                            </button>
                            <button onClick={toggleDisable} className="hidden md:block bg-red-700 hover:bg-red-800 py-2 px-4 text-white text-medium font-semibold shadow-lg rounded rounded-lg">
                                Cancel
                            </button>
                        </div>

                    }
                </div>
            </div>
            <ProfileImageSection />
            <form onSubmit={handleSubmit} className={`w-full max-w-[50rem] flex ${disabled ? 'flex-wrap' : 'flex-col'}`}>
                <label className={`block ${disabled ? '' : 'md:flex'} mb-3 md:items-end mr-2`}>
                    <span className={`block text-left md:flex text-md font-medium text-gray-700 mb-3 min-w-[10rem]`}>
                        Username
                </span>
                    < PersonalDetailsInput
                        disabled={disabled}
                        placeholder="Username"
                        id="username"
                        type="text"
                        value={state.username}
                        onChange={handleChange}
                    />

                </label>
                <label className={`block ${disabled ? '' : 'md:flex'} mb-3 md:items-end mr-2`}>
                    <span className="block text-left md:flex text-md font-medium text-gray-700 mb-3 min-w-[10rem]">
                        First Name
                </span>
                    < PersonalDetailsInput
                        disabled={disabled}
                        placeholder="First Name"
                        id="firstName"
                        type="text"
                        value={state.firstName}
                        onChange={handleChange}
                    />

                </label>
                <label className={`block ${disabled ? '' : 'md:flex'} mb-3 md:items-end mr-2`}>
                    <span className="block text-left md:flex text-md font-medium text-gray-700 mb-3 min-w-[10rem]">
                        Last Name
                </span>
                    < PersonalDetailsInput
                        disabled={disabled}
                        placeholder="Last Name"
                        id="lastName"
                        type="text"
                        value={state.lastName}
                        onChange={handleChange}
                    />

                </label>
                <label className={`block ${disabled ? '' : 'md:flex'} mb-3 md:items-end mr-2`}>
                    <span className="block text-left md:flex text-md font-medium text-gray-700 mb-3 min-w-[10rem]">
                        Email
                </span>
                    < PersonalDetailsInput
                        disabled={disabled}
                        id="email"
                        type="email"
                        value={state.email}
                        onChange={handleChange}
                    />

                </label>
                <label className={`block ${disabled ? '' : 'md:flex'} mb-3 md:items-end mr-2`}>
                    <span className="block text-left md:flex text-md font-medium text-gray-700 mb-3 min-w-[10rem]">
                        Phone Number
                </span>
                    < PersonalDetailsInput
                        disabled={disabled}
                        placeholder="Phone Number"
                        id="phoneNumber"
                        type="tel"
                        value={state.phoneNumber}
                        onChange={handleChange}
                    />

                </label>

                {!disabled && <button
                    type="submit"
                    className="w-full md:w-auto md:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2 lg:py-3 my-3 rounded rounded-md self-end"
                >
                    Update Profile
            </button>}

            </form>
        </div>
    )
}

export default PersonalDetails




const PersonalDetailsInput = (props) => {
    return (
        <input
            className={`w-full rounded rounded-lg border border-gray-300 py-1 px-2 outline-none h-12 disabled:bg-transparent disabled:border-none disabled:px-0 disabled:py-1 disabled:text-gray-400 `}
            {...props}
        />
    );
}



const ProfileImageSection = ({ onChange }) => {
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState("");
    const fileRef = useRef();
    const triggerFileModal = () => {
        fileRef.current.click();
    };

    useEffect(() => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    }, [selectedFile]);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            onChange(e.target.files[0])
        }
    };
    const handleDelete = () => {
        setSelectedFile(null);
    };
    return (
        <div className='w-full flex justify-center sm:justify-start items-center mb-6 '>
            <input
                type="file"
                accept="image/*"
                className=""
                onChange={handleChange}
                ref={fileRef}
                hidden
            />
            <div
                className="h-24 w-24 rounded rounded-full border-2 border-gray-200 shadow-sm flex justify-center items-center pointer bg-cover bg-no-repeat bg-center self-center"
                style={{ backgroundImage: `url(${preview})` }}
                onClick={triggerFileModal}
            >
                <RiCameraSwitchLine className='text-gray-600 text-2xl' />
            </div>

            <button onClick={handleDelete} type="button" className="ml-2 rounded rounded-md shadow-sm py-1.5 px-1 text-white bg-red-600 hover:bg-red-800">
                <BiTrashAlt/>
            </button>
        </div>

    );
}