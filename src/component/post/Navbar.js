import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Login from "./auth/Login";
import './Navbar.css'




export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
      <nav className="navbar">
        <div>
          {/* <img
            src="logo192.png"
            width={30}
            height={30}
            alt="logo"
            className="ms-5"
          /> */}
          <h1>Metavy</h1>
        </div>
        <Link className="nav-link menu_nav" to="Home">
          Home{" "}
        </Link>

        <Link className="nav-link menu_nav" to="/">
          Post{" "}
        </Link>
        <div className="login_btn">
        </div>

        
        <div>
          <div>
          {!user ? (
        <>
          <h2>
            <Link to="/signin"><button className="so_login_btn">Login</button></Link>
          </h2>
          {/* Don't have an account? <Link to="/register">Signup</Link> */}
        </>
      ):(
      <>
       {user && (
            <>
              <span className="pe-4">
                Signed is as {user.displayName || user.email}


              </span>
              <button className="btn btn-primary btn-sm me-3"
                onClick={() => { signOut(auth) }}
              >Logout</button>
            </>
          )}
      </>
      )}
          </div>
      </div>
      </nav>
    </div>
  );
}
