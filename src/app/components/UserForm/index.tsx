import React, { useState } from 'react';
import axios from 'axios';

interface NewUserFormProps {
    onAddUser: (newUser: any) => void;
}

const NewUserForm: React.FC<NewUserFormProps> = ({ onAddUser }) => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: '',
        roleColor: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://cac5595b20d3087e583a.free.beeceptor.com/api/users/', newUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            onAddUser(response.data);
            setNewUser({
                name: '',
                email: '',
                role: '',
                roleColor: '',
            });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[588px] backgroud-fixed">
            <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4a4 4 0 100 8 4 4 0 000-8zM6.5 18a9.5 9.5 0 0113 0M6 14h.01M18 14h.01"></path>
                    </svg>
                </div>
            </div>
            <h2 className="text-center text-2xl font-bold mb-6">New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        placeholder="New User's Email Address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={newUser.role}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Create Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Create a Password for New User"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewUserForm;
