import React from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import ProfileContainer from "./profile/profile_container";
import ProfileEditContainer from "./profile/profile_edit_container";
import ModalContainer from "./modal/modal_container";
import PostContainer from "./post/post_container";


const App = () => (
    <div>
        <ModalContainer />
        <GreetingContainer />
        <Switch>
            <AuthRoute exact path="/" component={LoginFormContainer} />
            <ProtectedRoute path="/posts" component={PostContainer} />
            <ProtectedRoute path="/users/:userId/edit" component={ProfileEditContainer} />
            <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
        </Switch>
    </div>
);

export default App;