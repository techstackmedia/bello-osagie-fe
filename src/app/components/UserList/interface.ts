interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    roleColor: string;
}

interface UserListProps {
    users: User[];
    handleNewUserButtonClick: () => void;
    onEditUser: (editedUser: User) => void;
    onRemoveUser?: (userId: string) => void;
    handleShowDelete: (user: User) => void;
}

export type { User, UserListProps };