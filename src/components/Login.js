import "./syles/login.css"

function Login( { setUser }) {
    return (
        <div className="login-div">
            <h1 className="login-h1">Subscription Manager</h1>
            <h3 className="login-h3">Easily Manage your Subscriptions</h3>
            <button className="signin-btn" onClick={() => setUser("test")}>Sign In</button>
        </div>
    );
  }
  
  export default Login;