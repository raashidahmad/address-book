import React from 'react';
import  propTypes  from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from './contexts/contexts';

export function ProtectedRoute({roles, element, children, ...rest}) {
    const userData = useAuthState();

    if (!userData.token) {
      <Navigate to='login' />
      return;
    }

    /*
    To Implement the roles
        if (roles.length > 0) {
        const routeRoles = roles.map((role) => role.toLowerCase());
        const userRoles = (user && user.roles ? user.roles : []).map((role) => role.toLowerCase());
        if (miscUtils.intersection(routeRoles, userRoles).length === 0) {
          return <Forbidden />;
        }
      }
    */

    return (
      <Route element={element} {...rest}>
        {children}
      </Route>
    );
}

/*ProtectedRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string),
  element: PropTypes.element,
  children: PropTypes.node,
};

ProtectedRoute.defaultProps = {
  roles: [],
  element: null,
  children: null,
};*/