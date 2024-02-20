import { useState } from "react";

function UserNameForm() {
    const [username, setUserName] = useState("");
    const updateUsername = (evt) => {
        setUserName(evt.target.value);
        console.log(evt.target.value);
    };

    return (
        <div>
            <label htmlFor="username">Enter Username</label>
            <input type="text" placeholder="username" value={username}
                onChange={updateUsername}
                id="username" /> <br />
            <button>Submit</button>
        </div>
    );
}

export default UserNameForm;