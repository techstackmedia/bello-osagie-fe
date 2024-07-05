'use client'
import React, { useEffect, useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ConfirmationDialog from './components/ConfirmationDialog';
import axios from 'axios';
import { User } from './components/UserList/interface';

export default function Home() {
  useEffect(() => {
    fetchUsers();
  }, [])

  const [showUserForm, setShowUserForm] = useState(false);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = axios.get('https://cafa000f843e2f4e9b1c.free.beeceptor.com/api/users/')
      setUsers((await response).data);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError('You have exceeded the API limit. Please try again later.');
      } else {
        setError('An unknown error occurred. Please try again later.');
      }
    } finally {
      setLoading(true);
    }
  };

  const handleNewUserButtonClick = () => {
    setShowUserForm(true);
  };

  const handleAddUser = (newUser: any) => {
    setUsers([...users, newUser]);
    setShowUserForm(false);
  };

  const handleEditUser = (editedUser: any) => {
    setUsers(users.map((user: any) =>
      user.email === editedUser.email ? { ...user, ...editedUser } : user
    ));
  };

  const handleRemoveUser = (email: string) => {
    setUsers(users.filter((user: any) => user.email !== email));
  };

  const handleShowDelete = (user: any) => {
    setUserToDelete(user);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      handleRemoveUser(userToDelete.email);
      setUserToDelete(null);
      setShowDeleteConfirmation(false);
    }
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
    setShowDeleteConfirmation(false);
  };

  if (!error && !loading) {
    return <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded shadow-md'>Loading...</div>;
  }

  if (loading && error) {
    return <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-md'>{error}</div>;
  }

  return (
    <>
      <UserList users={users} handleNewUserButtonClick={handleNewUserButtonClick} onEditUser={handleEditUser} onRemoveUser={handleRemoveUser} handleShowDelete={handleShowDelete} />
      {showUserForm && <UserForm onCancel={() => setShowUserForm(false)} onAddUser={handleAddUser} />}
      {showDeleteConfirmation && <ConfirmationDialog onCancel={handleCancelDelete} onConfirm={handleConfirmDelete} userToDelete={userToDelete} onRemoveUser={handleRemoveUser} />}
    </>
  );
}
