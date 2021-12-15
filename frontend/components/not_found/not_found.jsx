import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <div className="notFound">
                <p>404</p>
                <p>Oops something went wrong..</p>
                <button><Link to="/posts">Back to Posts</Link></button>
            </div>
        )
    }
}

export default NotFound;