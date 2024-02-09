import React, { useState } from 'react';

const Validate = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const validateInput = (name, value) => {
        switch (name) {
            case "username":
                if (value.length < 9) return "Username should be at least 9 characters long.";
                break;
            case "email":
                if (!value.includes("@") || value.length <= 10) return "Please enter a valid Email address.";
                break;
            case "password":
                if (value.length < 8) return "Password should be at least 8 characters.";
                break;
            case "confirmPassword":
                if (value !== inputs.password) return "Password did not match.";
                break;
            default:
                return "";
        }
        return "";
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        setErrors({ ...errors, [name]: validateInput(name, value) });
    };

    const submit = (e) => {
        e.preventDefault();
        let newErrors = {};
        for (const [key, value] of Object.entries(inputs)) {
            newErrors[key] = validateInput(key, value);
        }
        setErrors(newErrors);
    };

    return (
        <div className='card'>
            <div className='cardImage'></div>
            <form className='form1'>
                {Object.entries(inputs).map(([name, value]) => {
                    console.log(`this value is ${value}`);
                    console.log(`this key is ${name}`);
                    return(
                    <React.Fragment key={name}>
                        <input
                            type="text"
                            name={name}
                            placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                            style={{ borderColor: errors[name] ? "red" : "green" }}
                            value={value}
                            onChange={handleInputChange}
                        />
                        {errors[name] && <p className='error'>{errors[name]}</p>}
                        <br />
                    </React.Fragment>
                )})}
                <button className='submit-btn' onClick={submit}>SUBMIT</button>
            </form>
        </div>
    );
};

export default Validate;
