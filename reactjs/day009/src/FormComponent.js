import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can perform further actions here, such as sending the form data to a server
    };

    return (
        <div>
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;