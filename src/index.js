import React from "react";
import ReactDOM from "react-dom";
// Step 1\. Import react-router functions
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";

// add basic styling for NavLinks
const linkstyles = {
  display: "inline-block",
  width: "100",
  padding: "12px",
margin:"0 6px 6px",
background: "blue",
textDecoration: "none",
color: "white",
};

/*define the NavBar component */
function NavBar(){
  return(
    <div>
       <NavLink to="/"exact
      //  set exact so that it only set activeStyle when route is deeply equal to link 
  // add styling to NavLink
  style={linkstyles}
  // add prop for activeStyle
  activeStyle={{
    background:"darkblue",
  }}
  >
    Home

  </NavLink>

<NavLink
to="/about"exact
style={linkstyles}
activeStyle={{
  background:"darkblue",
}}
>
  About
</NavLink>

<NavLink to="/login" exact
style={linkstyles}
activeStyle={{
  background:"darkblue",
}}
>
  login
</NavLink>
      </div>
    
  );
}

function Home() {
  return <h1>Home!</h1>;
}

function About() {
  return <h1>This is my about component!</h1>;
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <NavBar/>

  </BrowserRouter>,
  document.getElementById("root")
);

