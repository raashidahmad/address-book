import React, { useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const token = localStorage.getItem('token');
    return (
        <Route {...restOfProps} render={(props) => token ? <Component {...props} /> : <Navigate replace to="/home" />}></Route>
    );
}
export default ProtectedRoute;