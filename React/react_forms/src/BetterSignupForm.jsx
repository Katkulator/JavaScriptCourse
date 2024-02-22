import { useState } from "react";

function BetterSignupForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    });

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
            return {
                ...currData,
                [changedField]: newValue,
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    };

    return (
        <div>
            <label htmlFor="firstName">Enter First Name </label>
            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                name="firstName"
            /> <br />
            <label htmlFor="lastName">Enter Last Name </label>
            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                name="lastName" /> <br />
            <label htmlFor="password">Enter Password </label>
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password" /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default BetterSignupForm;