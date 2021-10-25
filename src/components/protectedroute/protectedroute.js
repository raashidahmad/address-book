import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const token = localStorage.getItem('token');
    return (
        <Route {...restOfProps} render={(props) => token && (token != null || token != "null") ? <Component {...props} /> : <Redirect to='/login' />}></Route>
    );
}
export default ProtectedRoute;