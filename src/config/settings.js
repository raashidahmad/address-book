const Settings = {
    serverUrl: 'http://localhost:4000/contacts',
    tokenUrl: 'http://localhost:4000/account/token',
    httpOptions:  {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
}
export default Settings;