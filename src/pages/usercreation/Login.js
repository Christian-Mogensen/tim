import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import MailIcon from "../../assets/img/icons/MailIcon";
import NoAcc from "../../components/btns/NoAcc";
import Form from "../../components/form/Form";
import FormBtn from "../../components/form/FormBtn";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormInput from "../../components/form/FormInput";
import PasswordIcon from "../../assets/img/icons/PasswordIcon";

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebase";
import BackComp from "../../components/btns/BackComp";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <Form>
      <BackComp href="/" val="Back to frontpage" />
      <FormContainer>
        <FormHeader val="Sign in" />
        <FormInput
          icon={<MailIcon value={email} />}
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <FormInput
          icon={<PasswordIcon value={password} />}
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="text-right">
          <Link to="/reset">Forgot Password</Link>
        </div>

        <FormBtn
          onClick={() => logInWithEmailAndPassword(email, password)}
          val="Continue"
        />
        <FormBtn onClick={signInWithGoogle} val="Sign in with Google" />

        <NoAcc spcplacement="place-self-end" />
      </FormContainer>
    </Form>
  );
}

export default Login;
