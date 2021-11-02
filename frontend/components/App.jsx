import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ProfileContainer from "./profile/profile_container";
import ProfileEditContainer from "./profile/profile_edit_container";
import ModalContainer from "./modal/modal_container";


const App = () => (
    <div>
        <header className="header-title">
        <h1 className="main-title">WEbook</h1>
            <ModalContainer />
        </header>
            {/* <LoginFormContainer /> */}
            <GreetingContainer />
        <Switch>
            {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
            {/* <Route path="/" component={GreetingContainer} /> */}
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/users/:userId/edit" component={ProfileEditContainer} />
            <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
        </Switch>
            {/* <ProtectedRoute path="/profile" component={Profile}/> */}
    </div>
);

export default App;