import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AlreadyAcc from "../../components/btns/AlreadyAcc";
import Form from "../../components/form/Form";
import FormBtn from "../../components/form/FormBtn";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormInput from "../../components/form/FormInput";
import MailIcon from "../../assets/img/icons/MailIcon";
import PasswordIcon from "../../assets/img/icons/PasswordIcon";
import UserIcon from "../../assets/img/icons/UserIcon";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/firebase";
import BackComp from "../../components/btns/BackComp";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState("");
  const register = (e) => {
    e.preventDefault()
    if (!name) alert("Please enter name");
    // setTimeout(()=>{

      registerWithEmailAndPassword(name, email, password);
    // }, 5000)
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <Form>
      <BackComp href="/" val="Back to frontpage" />
      <FormContainer>
        <FormHeader val="Sign up" />
        <FormInput
          icon={<UserIcon value={name} />}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <FormInput
          icon={<MailIcon value={email} />}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <FormInput
          icon={<PasswordIcon value={password} />}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <FormBtn onClick={register} val="Continue" />
        <FormBtn onClick={signInWithGoogle} val="Sign in with Google" />

        <AlreadyAcc spcplacement="place-self-end" />
      </FormContainer>
    </Form>
  );
}

export default Register;
