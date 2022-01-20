import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = { isLoggedIn: false };
    }

    componentDidMount() {
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            this.setState((prevState) => {
                if (!prevState.isLoggedIn) {
                    return { isLoggedIn: true };
                }
            });
        }
        if (sessionStorage.getItem("isLoggedIn") === "false") {
            this.setState((prevState) => {
                if (prevState.isLoggedIn) {
                    return { isLoggedIn: false };
                }
            });
        }
    }


    render() {
        return (
            <nav className="navbar navbar-custom navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    Home
                </Link>

                <Link to="/course/add" className="navbar-brand">
                    Add Course
                </Link>

                {!this.state.isLoggedIn ?
                    (<Link to="/login" className="navbar-brand">
                        Login
                    </Link>) : (<Link to="/logout" className="navbar-brand">
                        Logout
                    </Link>)
                }
            </nav>
        )
    }
}
