import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MailIcon from "../../assets/img/icons/MailIcon";
import PasswordIcon from "../../assets/img/icons/PasswordIcon";
import BackComp from "../../components/btns/BackComp";
import NoAcc from "../../components/btns/NoAcc";
import Form from "../../components/form/Form";
import FormBtn from "../../components/form/FormBtn";
import FormContainer from "../../components/form/FormContainer";
import FormHeader from "../../components/form/FormHeader";
import FormInput from "../../components/form/FormInput";
import { auth, sendPasswordReset } from "../../firebase/firebase";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (

      <Form>
          <BackComp href="/" val="Back to frontpage" />
        <FormContainer>
          <FormHeader val="Reset password" />
          <FormInput
            icon={<MailIcon value={email} />}
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />

          <FormBtn
            onClick={() => sendPasswordReset(email)}
            val="Reset password"
          />

          <NoAcc spcplacement="place-self-end" />
        </FormContainer>
      </Form>
  );
}

export default Reset;
