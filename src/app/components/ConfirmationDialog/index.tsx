import React, { useState } from 'react';
import Image from 'next/image';
import LoadingSpinner from '../LoadingSpinner';
import ConfirmationDialogProps from './interface';
import styles from './index.module.css';
import axios from 'axios';

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ onCancel, onConfirm, userToDelete, onRemoveUser }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    if (userToDelete) {
      try {
        const response = await axios.delete(`https://caf58c5c7aba97e698b6.free.beeceptor.com/api/users/${userToDelete.id}`);
        if (response.status === 200) {
          setLoading(true);
          onRemoveUser(userToDelete.email);
          setLoading(false);
          onConfirm();
        } else {
          console.error('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex z-10 items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Delete this user</h2>
        <p className="mb-6 text-center text-[#667185] text-sm">
          This user and all associated data will be permanently removed. Do you wish to continue?
        </p>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-end space-x-4">
            <button
              onClick={onCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel action
            </button>
            <button
              onClick={handleConfirmDelete}
              className="bg-[#EB9B9890] hover:bg-red-700 text-[#D42620] hover:text-white border border-[#D42620] font-semibold py-2 px-4 gap-1 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
              <Image src='/delete.svg' alt='delete icon' width={20} height={20} className={styles.deleteIcon} />
              Yes, Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationDialog;
