import './user-item.css';
type Props = {
    firstName: string;
    lastName: string;
    email: string;
};

export const UserItem = ({ firstName, lastName, email }: Props) => {
    return (
        <li className="user-item">
            <span className="user-item-name">
                {firstName} {lastName}
            </span>
            <span className="user-item-email">{email}</span>
        </li>
    );
};
