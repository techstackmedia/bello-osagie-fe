import { User } from "../UserList/interface";

interface ConfirmationDialogProps {
    onCancel: () => void;
    onConfirm: () => void;
    userToDelete: User;
    onRemoveUser: (email: string) => void;
}

export default ConfirmationDialogProps;