import React from 'react'
import { Modal, ModalHeader, ModalFooter, Button } from 'react-bootstrap'

class DeleteModal extends React.Component {

  render() {
    return (
      <Modal
        onClose={this.props.closeModal}
        show={this.props.show}>
        <ModalHeader closeButton>
          Delete asset {this.props.assetId}?
        </ModalHeader>
        <ModalFooter>
          <Button
            onClick={this.props.closeModal}
            bsStyle="default"
            style={{border: 'none', background: 'transparent', outline: 'transparent4'}}>
            Cancel
          </Button>
          <Button
            onClick={this.props.delete}
            bsStyle="danger">
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    )
  }

}

export default DeleteModal
