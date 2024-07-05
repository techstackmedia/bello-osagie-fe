'use client'
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ConfirmationDialog from './components/ConfirmationDialog';

export default function Home() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [users, setUsers] = useState<any>([]);

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

  return (
    <>
      <UserList users={users} handleNewUserButtonClick={handleNewUserButtonClick} onEditUser={handleEditUser} onRemoveUser={handleRemoveUser} handleShowDelete={handleShowDelete} />
      {showUserForm && <UserForm onCancel={() => setShowUserForm(false)} onAddUser={handleAddUser} />}
      {showDeleteConfirmation && <ConfirmationDialog onCancel={handleCancelDelete} onConfirm={handleConfirmDelete} userToDelete={userToDelete} onRemoveUser={handleRemoveUser} />}
    </>
  );
}
