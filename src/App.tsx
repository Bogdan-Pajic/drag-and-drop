import { useState } from "react";
import { DragArea } from "./components/drag-area/drag-area";
import { DragItem } from "./components/drag-item/drag-item";
import { UserItem } from "./components/user-item/user-item";
import { DragDropProvider } from "./context/drag-context";
import { User } from "./types/user";
import users from "./data/users.json";
import './App.css';

export const DraggableUserList = () => {
  const [exampleUsers, setExampleUsers] = useState<Array<User>>(users);

  return (
    <DragDropProvider>
        <ul className="user-list">
          <DragArea items={exampleUsers} onChange={setExampleUsers}>
            {exampleUsers.map((user, i) => (
              <DragItem key={i} index={i}>
                <UserItem firstName={user.firstName} lastName={user.lastName} email={user.email} />
              </DragItem>
            ))}
          </DragArea>
        </ul>
    </DragDropProvider>
  );
};

const App = () => {
  return <DraggableUserList />
}

export default App;
