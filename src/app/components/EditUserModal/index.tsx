import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Select from '../Select';

interface EditUserModalProps {
    user: any;
    onUpdateUser: (updatedUser: any) => void;
    onCancelEdit: () => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ user, onUpdateUser, onCancelEdit }) => {
    const [editedUser, setEditedUser] = useState({
        name: user.name,
        email: user.email,
        role: user.role,
        roleColor: user.roleColor,
        id: user.id,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleRoleChange = (role: string) => {
        setEditedUser({ ...editedUser, role });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onUpdateUser(editedUser);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <Image src='/cancel.svg' alt='Cancel' width={27} height={27} onClick={onCancelEdit} className='absolute top-4 right-4 cursor-pointer' />
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                        <Image src='/profile.svg' alt='User' width={32} height={32} />
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#475367] text-sm mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={editedUser.name}
                            onChange={handleInputChange}
                            className="border rounded w-full py-3 text-sm px-3 text-[#475367] leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#475367] text-sm mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={editedUser.email}
                            onChange={handleInputChange}
                            className="border rounded w-full py-3 text-sm px-3 text-[#475367] leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-[#475367] text-sm mb-2" htmlFor="role">
                            Role
                        </label>
                        <Select
                            options={["Administration", "Sales Manager", "Sales Representative"]}
                            value={editedUser.role}
                            onChange={handleRoleChange}
                        />
                        <Image src='/select-dropdown.svg' alt='eye' width={20} height={20} className='absolute right-2 top-10' />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-[#475367] text-sm mb-2" htmlFor="password">
                            Create Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Create a Password for New User"
                            className="border rounded w-full py-3 text-sm px-3 text-[#475367] leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <Image src='/eye.svg' alt='eye' width={20} height={20} className='absolute right-2 top-10' />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        >
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserModal;
