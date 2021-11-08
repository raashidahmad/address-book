import Settings from '../config/settings';

export async function login(dispatch, payload) {
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
}