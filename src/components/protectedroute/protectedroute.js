import React, { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, path, ...restOfProps }) {
    const token = localStorage.getItem('token');
    
        if (token) {
            return (
                <Route {...restOfProps} path={path} element={<Component />} />
            );
        } else {
            return (
                <Navigate replace to="/home" />
            );
        }
}
export default ProtectedRoute;