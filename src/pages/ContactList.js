import MessageModal from '../components/modals/MessageModal';
import { useState } from 'react';

function ContactList(props) {

    const [show, setShow] = useState();
    const [profile, setProfile] = useState({ name: '', address: '', phone: '', email: '' });
    let addressList = [
        {
            id: 1,
            email: 'one@none.com',
            phone: '03007654321',
            name: 'Rashid Ahmad',
            address: 'Dummy address one, street #1, block A'
        },
        {
            id: 2,
            email: 'two@none.com',
            phone: '03007754322',
            name: 'Muhammad Amjad',
            address: 'Dummy address two, street #2, block B'
        }
    ];

    function toggleModal(id = 0) {
        var newValue = !show;
        if (newValue) {
            var result = addressList.filter(a => a.id === id);
            if (result.length > 0) {
                setProfile(() => ({
                    name: result[0].name,
                    email: result[0].email,
                    address: result[0].address,
                    phone: result[0].phone
                }));
            }
        }
        setShow(!show);
    }

    return (
        <div>
            <h4 className="text-center">{props.title}</h4>
            {
                addressList.map((address) => (
                    <div key={address.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{address.name}</h4>
                            <div className="card-text">
                                <table className="table table-striped">
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Email</td>
                                            <td>{address.email}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={() => toggleModal(address.id)}>View Profile</button>
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