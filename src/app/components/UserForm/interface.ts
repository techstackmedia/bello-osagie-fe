import { User } from "../UserList/interface";

interface NewUserFormProps {
    onAddUser: (newUser: User) => void;
    onCancel?: () => void;
}

export type { NewUserFormProps };