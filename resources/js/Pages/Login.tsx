import MediationSticker from "../../images/Login/mediation-sticker.png";

import "../../style/Pages/Login.scss";

import { useForm } from "react-hook-form";

const Login = () => {
    return (
        <div id="LoginPage">
            <div className="selection left">
                <h1>ZenZone</h1>
                <h2>Find Your Inner Peace</h2>
                <h5>Discover relaxation and techniques</h5>
                <img src={MediationSticker} alt="mediation-sticker" className="mediation-sticker" />
            </div>
            <div className="selection right">
                <h1>Login</h1>
                <form >
                    <label>Email address</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                </form>
            </div>
        </div>
    );
};

export default Login;
