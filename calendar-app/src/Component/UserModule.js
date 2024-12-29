import React from 'react';
import { useSelector } from 'react-redux';

const UserModule = () => {
    const companies = useSelector(state => state.companies.companies);

    return (
        <div>
            <h2>Companies</h2>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>{company.name} - {company.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserModule;