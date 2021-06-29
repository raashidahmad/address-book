import React from 'react';

class AddressList extends React.Component {

    render() {
        let addressList = [
            {
                email: 'one@none.com',
                phone: '03007654321',
                name: 'Rashid Ahmad',
                address: 'Dummy address one'
            },
            {
                email: 'two@none.com',
                phone: '03007754322',
                name: 'Muhammad Amjad',
                address: 'Dummy address two'
            }
        ];

        return (
            <div>
                <h1>Address List</h1>
                {
                    addressList.map((address) => (
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{address.name}</h4>
                                <div className="card-text">
                                    <table className="table table-striped">
                                        <tr>
                                            <td>Email</td>
                                            <td>{address.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{address.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{address.address}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default AddressList;