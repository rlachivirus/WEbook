import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);