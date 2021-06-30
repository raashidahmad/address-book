import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MessageModal(props) {
    console.log(props);
    if (!props.show) {
        return null;
    } else {
        return (
            <>
                <Modal show={props.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className="table table-striped">
                            <tr>
                                <td>Full Name: </td>
                                <td>{props.profile.name}</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>{props.profile.email}</td>
                            </tr>
                            <tr>
                                <td>Phone: </td>
                                <td>{props.profile.phone}</td>
                            </tr>
                            <tr>
                                <td>Address: </td>
                                <td>{props.profile.address}</td>
                            </tr>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={props.toggleModal}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default MessageModal;