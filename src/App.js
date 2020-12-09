import { useState } from "react";
import "./App.css";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

function App() {
  const [editMode, setEditMode] = useState(true);
  return (
    <div className="App">
      {editMode ? (
        <EditProfile setEditMode={setEditMode} />
      ) : (
        <Profile setEditMode={setEditMode} />
      )}
    </div>
  );
}

export default App;
