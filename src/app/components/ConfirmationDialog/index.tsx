import React from 'react';

interface ConfirmationDialogProps {
  onCancel: () => void;
  onConfirm: () => void;
  userToDelete: any;
  onRemoveUser: (email: string) => void; 
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ onCancel, onConfirm, userToDelete, onRemoveUser }) => {
  const handleConfirmDelete = () => {
    onRemoveUser(userToDelete.email);
    onConfirm(); 
  };

  return (
    <div className="fixed inset-0 flex z-10 items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Delete this user</h2>
        <p className="mb-6 text-center text-[#667185] text-sm">
          This user and all associated data will be permanently removed. Do you wish to continue?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel action
          </button>
          <button
            onClick={handleConfirmDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-1 14H6L5 7M8 7V4a4 4 0 118 0v3M8 7h8"></path>
            </svg>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
