import Image from 'next/image';
import ConfirmationDialogProps from './interface';

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
            className="bg-[#EB9B9890] hover:bg-red-700 text-[#D42620] border border-[#D42620] font-semibold py-2 px-4 gap-1 rounded focus:outline-none focus:shadow-outline flex items-center"
          >
            <Image src='/delete.svg' alt='delete icon' width={20} height={20} />
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
