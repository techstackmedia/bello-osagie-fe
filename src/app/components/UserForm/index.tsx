import React, { useState } from 'react';
import axios from 'axios';
import Select from '../Select';
import Image from 'next/image';
import { NewUserFormProps } from './interface';

const NewUserForm: React.FC<NewUserFormProps> = ({ onAddUser, onCancel }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    roleColor: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRoleChange = (role: string) => {
    setNewUser({ ...newUser, role });
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

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onCancel) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md w-[588px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src='/cancel.svg' alt='Cancel' width={27} height={27} onClick={onCancel} className='absolute top-4 right-4 cursor-pointer' />

        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <Image src='/profile.svg' alt='User' width={32} height={32} />
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold mb-6">New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#475367] text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="New User's Email Address"
              className="border rounded w-full py-3 text-sm px-3 text-[#475367] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#475367] text-sm mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="border rounded w-full py-3 text-sm px-3 text-[#475367] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-[#475367] text-sm mb-2" htmlFor="role">
              Role
            </label>
            <Select
              options={["Administration", "Sales Manager", "Sales Representative"]}
              value={newUser.role}
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
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUserForm;
