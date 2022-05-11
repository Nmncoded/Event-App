import { useEffect, useState } from "react";
import {ImFacebook2} from 'react-icons/im';
import { useDispatch } from "react-redux";
import { NavLink,Link, useHistory } from 'react-router-dom';
import { createAuthUser, createUser, reAuthUser } from "../firebase/user";
import { updateUserInfo } from "../redux/action";

function Signup() {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [ registrationType, setRegistrationType ] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
      event.preventDefault();
      if(email && name && registrationType && password && +phoneNumber ) {
        const {data, error} = await createAuthUser(email, password);
        if(error) {
          setError(error)
        } else {
          const user = await createUser(email, registrationType , name, +phoneNumber , data.uid );
          console.log(user.data);
          dispatch(updateUserInfo(user.data));
          history.push("/")
        }
      }
    }

    return (
      <>
      <section className="signup-form" >
        <h1 className="event-name flex-center-center" >
          Register for Event
        </h1>
        <div className="login-with-facebook flex-center-center" >
          <ImFacebook2  />
          <span>Log in with Facebook</span>
        </div>
        <div className="or" >
          <span className="hr"></span>
          <div>OR</div>
          <span className="hr" ></span>
        </div>
          <p>{error}</p>
          <form className="form" onSubmit={handleSubmit} >
              <input type="email" name="signup-email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Enter your email" />
              <input type="text" name="signup-name" value={name}  onChange={(e) => setName(e.target.value) } placeholder="Full Name" />
              <input type="text" name="signup-phonenumber" value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value) } placeholder="Phone number" />
              <select name="registration-type" id="registration-type" value={registrationType} onChange={(e) => setRegistrationType(e.target.value) } >
                <option value="">Registration Type</option>
                <option value="Virtual">Virtual</option>
                <option value="Offline">Offline</option>
              </select>
              <input type="password" name="signup-password" value={password}  onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
              <input type="submit"  id="submit" value='Register' />
          </form>
          <div className="agree-terms-conditions" >
          By signing up, you agree to our <span>Terms</span> , <span>Data Policy</span> and <span>Cookies Policy</span>.
          </div>
      </section>
      <section className="have-an-account" >
        Have an account? <Link to='/signin' className="link" >Log in</Link>
      </section>
      </>
    )
  }

  export default Signup;
