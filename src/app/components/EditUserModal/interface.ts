import { User } from "../UserList/interface";

interface EditUserModalProps {
    user: User;
    onUpdateUser: (updatedUser: User) => void;
    onCancelEdit: () => void;
}

export type { EditUserModalProps };