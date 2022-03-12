import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ChangePassword = () => {
    const [passwordState, setPasswordState] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { value, id } = e.target;
        setPasswordState(oldPasswordState => ({ ...oldPasswordState, [id]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const changePasswordPromise = new Promise((resolve, reject) =>
            setTimeout(
                () =>
                    resolve({
                        message: "Password Changed Successfully",
                        status: 200,
                        data: [],
                    }),
                1000
            )
        );
        // handles the toast loader for the login process
        toast.promise(changePasswordPromise, {
            loading: "Updating Password",
            success: "Password Changed Successfully",
            error: "Password Update Failed",
        });
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[50rem] flex flex-col">
            <h4 className="text-left text-xl md:text-2xl text-gray-600 font-semibold mb-7 mt-3">
                Change Password
            </h4>
            <label className="block md:flex mb-3 md:items-end">
                <span className="block text-left md:flex  text-md font-medium text-gray-700 mb-3 min-w-[10rem]">
                    New Password
                </span>
                < input
                    className="w-full rounded rounded-sm border border-gray-300 py-1 px-2 outline-none "
                    placeholder="Password"
                    id="newPassword"
                    type="password"
                    value={passwordState.newPassword}
                    onChange={handleChange}
                />

            </label>
            <label className="block md:flex mb-3 md:items-baseline">
                <span className="block text-left md:flex text-md font-medium text-gray-700 mb-3 min-w-[10rem]">
                    Confirm Password
                </span>
                < input
                    className="w-full rounded rounded-sm border border-gray-300 py-1 px-2 outline-none "
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    type="password"
                    value={passwordState.confirmPassword}
                    onChange={handleChange}
                />

            </label>

            <button
                type="submit"
                className="w-full md:w-auto md:px-3 bg-[#3e7c17] hover:bg-[#356C14] text-white font-semibold py-2  my-3 rounded rounded-md self-end"
            >
                Change Password
      </button>

        </form>
    )
}

export default ChangePassword


