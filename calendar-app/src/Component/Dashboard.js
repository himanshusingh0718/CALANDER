import React from 'react';
import AdminModule from './AdminModule';
import UserModule from './User Module';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <AdminModule />
            <User Module />
        </div>
    );
};

export default Dashboard;