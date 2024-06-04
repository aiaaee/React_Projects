import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function Header(){
    let authContext = useContext(AuthContext)
    let doLogin = () => authContext.dispatch({type:'login_user'})
    let doLogout = () => authContext.dispatch({type : 'logout_user'})
    return(
        <header>
            <div className="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Todo App</strong>
                    </a>
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    {
                        ! authContext.authenticated ? 
                            <button className="btn btn-sm btn-success" onClick={() => doLogin()}>Login</button>
                        :
                            <button className="btn btn-sm btn-danger" onClick={() => doLogout()}>Logout</button>

                    }
                </div>
            </div>
        </header>
    )
}
export default Header