import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ProfileEditContainer from '../profile/profile_edit_container';
import PostEditContainer from '../post/post_edit_container';
import PostFormContainer from '../post/post_container';


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;

    switch (modal.type) {
        case 'signup':
            component = <SignupFormContainer closeModal={closeModal} />;
            break;
        case 'profileEdit':
            component = <ProfileEditContainer closeModal={closeModal} />;
            // debugger
            break;
        case 'createPost':
            component = <PostFormContainer closeModal={closeModal} />;
            break;
        default:
            return null;
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {/* <div onClick={closeModal} className="close-x">X</div> */}
                {/* <SignupFormContainer closeModal={closeModal} /> */}
                {component}
            </div>
        </div>
    );
}

export default Modal;