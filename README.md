# WEbook

[Live site link](https://w3book.herokuapp.com/#/)

# Overview
WEbook is a Facebook clone which allows you to interact with your friends. Similar to the actual app, you can visit your friends' profile, add posts to either the main newsfeed or your and your friend's profile page, and comment on those posts. Additionally, you can also upload pictures and like both posts and comments. Not to forget, you are able to request to be friends with other users but you and the user will only become friends when the other user accepts the friend request.

I used the word 'we' to describe how I feel about Facebook nowadays. The app is one of the important social networking apps that helps connect people globally. Simultaneously, however, I thought the platform became a place where people just uploaded random and meaningless posts as well. Thus, I thought the word 'we' described the platform well because 'we' means 'us' but it can also be interpreted as 'whatever'.

# Features

## Account Creation and Authentication

When I started this project, I wanted to clone Facebook as best as I could because I thought I would learn a lot from copying. As a result, I located the login form on the right side of the page and used a modal for the sign up form just like Facebook. One thing I did differently compared to the actual app is the error rendering. Instead of redirecting to another page to render the errors or have only exclamation points to empty inputs, I made sure the errors rendered underneath the input that caused the error.

<img src="app/assets/images/readMePictures/login.png" width="50%" height="auto"/><img src="app/assets/images/readMePictures/signup.png" width="50%" height="auto"/>

```js
<input
    className="fname-field"
    type="text"
    onChange={this.update("fname")}
    value={fname}
    placeholder="First Name"
    style={ errors.includes("Fname can't be blank") ? (
      { borderColor: "red" }
    ) : (
      { borderColor: "" }
    )}
/>

<p className="fnameError" style={errors.includes("Fname can't be blank") ? ({ display: "" }) : ({ display: "none" })}>
    First name can't be blank!
</p>
```

## Post & Comment

In WEbook, you are able to create posts which includes functionalities such as edit/delete, upload picture, like, and comment. In the comments section, you are able to comment on a post and like the comment as well. Additionally, all the photos and names shown in the post and comment sections redirect you to the user's profile.

<img src="app/assets/images/readMePictures/post.png" width="50%" height="auto"/><img src="app/assets/images/readMePictures/comment.png" width="50%" height="auto"/>

```js
handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('post[author_id]', this.props.currentUserId);
    formData.append('post[body]', this.state.body);
    formData.append('post[user_id]', this.props.userId);

    if (this.state.photoFile) {
        formData.append('post[photo]', this.state.photoFile);
    }

    this.props.createPost(formData);
    this.props.closeModal();
}
```

## Friends

WEbook has the functionality to request friend. When the request is sent out, the user receiving the request needs to accept in order for both you and the user to become friends. There is also the functionality to decline, so the user can reject the request as well. On top of the notification button, a number pops up to indicate how many friend requests the user has. Additionally, you are able to check your friends list in your profile page when you click on the 'Friends' button that is next to the 'Posts' button.

<img src="app/assets/images/readMePictures/friendRequest2.png" width="50%" height="auto"/><img src="app/assets/images/readMePictures/friends.png" width="50%" height="auto"/>

## Modals

A modal is rendered when you create/edit a post or edit your profile. In the modal, you are able to type anything you desire and also upload pictures. The modal also allows you to preview pictures you are about to upload.

<img src="app/assets/images/readMePictures/createPost.png" width="50%" height="auto"/><img src="app/assets/images/readMePictures/editProfile.png" width="50%" height="auto"/>

```js
function Modal({ modal, closeModal }) {
    let component;
    
    if (!modal) {
        return null;
    }

    switch (modal.type) {
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
```

# Technologies Used

- Javascript
- Node.js
- React
- Redux
- PostgreSQL
- AWS
- HTML
- CSS
- Ruby on Rails

# Future Edits

- Add search bar
