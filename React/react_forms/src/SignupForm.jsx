import { useState } from "react";

function SignupForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
        console.log(evt.target.value);
    };

    const updateLastName = (evt) => {
        setLastName(evt.target.value);
        console.log(evt.target.value);
    };

    const handleSubmit = () => {
        console.log(firstName, lastName)
    };

    return (
        <div>
            <label htmlFor="firstName">Enter First Name </label>
            <input type="text" placeholder="firstName" value={firstName}
                onChange={updateFirstName}
                id="firstName" /> <br />
            <label htmlFor="lastName">Enter Last Name </label>
            <input type="text" placeholder="lastName" value={lastName}
                onChange={updateLastName}
                id="lastName" /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SignupForm;