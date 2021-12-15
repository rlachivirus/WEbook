import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container';
import ProfileEditContainer from '../profile/profile_edit_container';
import PostEditContainer from '../post/post_edit_container';
import CreatePost from '../post/post_create';


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
            break;
        case 'createPost':
            component = <CreatePost closeModal={closeModal} currentUserId={modal.currentUserId} userId={modal.userId} createPost={modal.createPost} currentUser={modal.currentUser} />;
            break;
        case 'editPost':
            component = <PostEditContainer closeModal={closeModal} post={modal.post} id={modal.id} />;
            break;
        default:
            return null;
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;