import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../redux/actions';

const AdminModule = () => {
    const dispatch = useDispatch();
    const [company, setCompany] = useState({ name: '', location: '', email: '', phone: '', comments: '' });

    const handleChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCompany({ ...company, id: Date.now() }));
        setCompany({ name: '', location: '', email: '', phone: '', comments: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={company.name} onChange={handleChange} placeholder="Company Name" required />
            <input name="location" value={company.location} onChange={handleChange} placeholder="Location" required />
            <input name="email" value={company.email} onChange={handleChange} placeholder="Email" required />
            <input name="phone" value={company.phone} onChange={handleChange} placeholder="Phone" required />
            <textarea name="comments" value={company.comments} onChange={handleChange} placeholder="Comments" />
            <button type="submit">Add Company</button>
        </form>
    );
};

export default AdminModule;