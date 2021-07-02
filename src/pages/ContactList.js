import MessageModal from '../components/modals/MessageModal';
import { useState, useEffect } from 'react';
import Settings from '../config/settings';

function ContactList(props) {
    const [show, setShow] = useState();
    const [profile, setProfile] = useState({ name: '', contact: '', phone: '', email: '' });
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [contacts, setContacts] = useState([]);
    const url = Settings.serverUrl;

    /*let contactList = [
        {
            id: 1,
            email: 'one@none.com',
            phone: '03007654321',
            name: 'Rashid Ahmad',
            contact: 'Dummy contact one, street #1, block A'
        },
        {
            id: 2,
            email: 'two@none.com',
            phone: '03007754322',
            name: 'Muhammad Amjad',
            contact: 'Dummy contact two, street #2, block B'
        }
    ];*/

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setContacts(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);
    

    function toggleModal(id = '') {
        var newValue = !show;
        if (newValue) {
            var result = contacts.filter(a => a._id === id);
            if (result.length > 0) {
                setProfile(() => ({
                    name: result[0].name,
                    email: result[0].email,
                    phone: result[0].phone,
                    address: result[0].address
                }));
            }
        }
        setShow(!show);
    }

    if (error) {
        return (
            <div className="col-md-12">
                <span className="text-error">An error occured while fetching the data: {error}</span>
            </div>);
    } else if (!isLoaded) {
        return (
            <div className="col-md-12">
                <span className="text-info">Wait loading data...</span>
            </div>);
    } else 
      return (
        <div>
            <h4 className="text-center">{props.title}</h4>
            {
                contacts.map((contact) => (
                    <div key={contact._id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{contact.name}</h4>
                            <div className="card-text">
                                <table className="table table-striped">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Email</td>
                                            <td>{contact.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={() => toggleModal(contact._id)}>View Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <MessageModal show={show} profile={profile} toggleModal={toggleModal} />
        </div>
    );
}
export default ContactList;