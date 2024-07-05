import { User } from "../UserList/interface";

interface UserFormProps {
    onAddUser: (newUser: User) => void;
    onCancel?: () => void;
}

export type { UserFormProps };