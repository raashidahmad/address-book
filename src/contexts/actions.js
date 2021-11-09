import Settings from '../config/settings';

export async function login(dispatch, payload) {
	/*const requestOptions = {
        method: 'POST',
        headers: Settings.httpOptions,
        body: JSON.stringify(payload)
    }*/
    //const serverUrl = Settings.tokenUrl;
    const httpOptions = Settings.httpOptions;
    const serverUrl = Settings.tokenUrl;

    const requestBody = {
        email: payload.email,
        password: payload.password
    };
    httpOptions.body = JSON.stringify(requestBody);

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		let response = await fetch(serverUrl, httpOptions);
		let data = await response.json();

		if (data && data.token) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: { token: data.token } });
			localStorage.setItem('token', data.token);
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
		console.log(data.errors[0]);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

/*export async function login(dispatch, payload) {
    const requestOptions = {
        method: 'POST',
        headers: Settings.httpOptions,
        body: JSON.stringify(payload)
    }

    const serverUrl = Settings.tokenUrl;
    try {
        let response = await fetch(serverUrl, requestOptions);
        let data = await response.json();
        if (data && data.token) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data});
            localStorage.setItem('token', data.token);
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    } catch(error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}*/

export function logout(dispatch) {
    dispatch({ type: 'LOGOUT', payload: { token: '' } });
    localStorage.removeItem('token');
}