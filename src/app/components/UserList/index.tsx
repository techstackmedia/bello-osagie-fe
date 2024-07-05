import React, { useState } from 'react';
import Image from 'next/image';
import FilterButton from '../Filter';
import EditUserModal from '../EditUserModal';
import axios from 'axios';
import { User, UserListProps } from './interface';

const UserList: React.FC<UserListProps> = ({ users, onEditUser, handleShowDelete, handleNewUserButtonClick }: any) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const handleEditClick = (user: User) => {
        setEditingUser(user);
        setShowEditModal(true);
    };

    const handleUpdateUser = async (updatedUser: User) => {
        try {
            const response = await axios.put(`https://cab3439dc88a2dfee313.free.beeceptor.com/api/users/${updatedUser.id}`, updatedUser);

            if (response.status === 200) {
                const getResponse = await axios.get(`https://cab3439dc88a2dfee313.free.beeceptor.com/api/users/${updatedUser.id}`);
                if (getResponse.status === 200) {
                    onEditUser(getResponse.data);
                } else {
                    console.error('Failed to fetch updated user data');
                }
                setShowEditModal(false);
            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingUser(null);
        setShowEditModal(false);
    };

    const getStylesForRole = (role: string) => {
        switch (role) {
            case 'Administration':
                return { color: '#0D6EFD', backgroundColor: '#F0F6FE' };
            case 'Sales Manager':
                return { color: '#0F973D', backgroundColor: '#E7F6EC' };
            case 'Sales Representative':
                return { color: '#F58A07', backgroundColor: '#FEF4E6' };
            default:
                return { color: '#98A2B3', backgroundColor: '#FFFFFF' };
        }
    };
    const handleRoleLabel = (role: any) => {
        const { color, backgroundColor } = getStylesForRole(role);
        return { color, backgroundColor }
    };

    return (
        <div className="overflow-x-auto absolute w-[70%] left-[350px] top-[100px]">
            <p className='text-[#98A2B3] text-sm relative'>Settings / Users & Roles Setting</p>
            <h1 className='my-2 relative top-3'>Users & Roles</h1>
            <p className='mt-4 text-[#98A2B3] text-sm'>Manage all users in your business</p>
            <div className='flex gap-4'>
                <button className='text-[#0D6EFD] text-sm border-b-[#0D6EFD] border-b-2 relative top-5'>Users</button>
                <button className='text-[#98A2B3] text-sm  relative top-5'>Role</button>
            </div>
            <div className="min-w-full bg-white border rounded-lg shadow-sm mt-10">
                <div className="flex justify-between items-center p-4">
                    <div className="relative flex gap-4">
                        <div className=''>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <Image src='/search.svg' width={24} height={24} alt='search icon' className='absolute left-2 top-2' />
                        <FilterButton />
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex gap-2 items-center" onClick={handleNewUserButtonClick}>
                        <Image src='/add.svg' alt='add icon' width={24} height={24} /> <span>New User</span>
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="w-12 p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="form-checkbox" />
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email Address
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user: User) => (
                            <tr key={user.id}>
                                <td className="p-4">
                                    <input type="checkbox" className="form-checkbox" />
                                </td>
                                <td className="p-4 whitespace-nowrap">{user.name}</td>
                                <td className="p-4 whitespace-nowrap">{user.email}</td>
                                <td className="p-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-600`} style={handleRoleLabel(user.role)}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4 whitespace-nowrap text-sm font-medium">
                                    <button onClick={() => handleEditClick(user)}>
                                        <span className="text-blue-600 hover:text-blue-900 w-10">Edit</span>
                                    </button>
                                    {'  '}&nbsp;&nbsp;&nbsp;
                                    <button onClick={() => handleShowDelete(user)}>
                                        <span className="text-[#98A2B3] hover:text-[#CCCCCC]">Remove</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showEditModal && editingUser && (
                <EditUserModal
                    user={editingUser}
                    onUpdateUser={handleUpdateUser}
                    onCancelEdit={handleCancelEdit}
                />
            )}
        </div>
    );
};

export default UserList;
