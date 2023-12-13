import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface usersObj{
    email:string
    password:string
}

function Signup(props:{users:usersObj[]}) {
  const navigation = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const email = useRef<any>(null); // type error
  const password = useRef<any>(null);
  const repPassword = useRef<any>(null);

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [repemptyPassword, setrepEmptyPassword] = useState(false);
  const [emailerr, setEmailerr] = useState(false);
  const [repPassErr, setRepPassErr] = useState(false);
  const [usedEmail, setUsedEmail] = useState(false)

  let emptyEmailChk = false;
  let emptyPasswordChk = false;
  let repEmptyPasswordChk = false;
  let emailErrChk = false;
  let repPassErrChk = false;
  let usedEmailChk = false

  function HandleSignup() {
    // console.log(email?.current.value);
    // console.log(emailRegex.test(email.current.value))
    if (!email.current?.value) {
    //   console.log("email.current " + email.current);
      
      setEmptyEmail(true);
      emptyEmailChk = true;
      // console.log(password.current.value);
      // console.log(repPassword.current.value);
    } else if (!emailRegex.test(email.current.value)) {
    //   console.log(emailRegex.test(email.current.value));
      
      setEmailerr(true);
      emailErrChk = true;
    } else {
      setEmptyEmail(false);
      emptyEmailChk = false;
      setEmailerr(false);
      emailErrChk = false;
    }

    if (!password.current?.value) {
      setEmptyPassword(true);
      emptyPasswordChk = true;
      // console.log(password.current.value);
      // console.log(repPassword.current.value);
    } else {
      setEmptyPassword(false);
      emptyPasswordChk = false;
    }

    if (!repPassword.current?.value) {
      setrepEmptyPassword(true);
      repEmptyPasswordChk = true;
    } else {
      setrepEmptyPassword(false);
      repEmptyPasswordChk = false;
    }

    if (
      password.current &&
      repPassword.current &&
      password.current.value !== repPassword.current.value
    ) {
      setRepPassErr(true);
      repPassErrChk = true;
    } else {
      setRepPassErr(false);
      repPassErrChk = false;
    }
    

    let checkUser = props.users.filter((item) => item.email == email.current?.value)
    console.log(props.users);
    if(checkUser.length > 1){
        setUsedEmail(true)
        usedEmailChk = true
        console.log(usedEmailChk);
        
        console.log("true "+checkUser.length);

    }else{
        setUsedEmail(false)
        usedEmailChk = false
        console.log("false "+checkUser.length);
        
        
        
    }
    Switch();
  }
  function Switch() {
    if (
      !emailErrChk &&
      !repPassErrChk &&
      !emptyEmailChk &&
      !emptyPasswordChk &&
      !repEmptyPasswordChk &&
      !usedEmailChk
    ) {
        // console.log(email.current.value);
        // console.log(password.current.value);
        
       props.users.push({
        email:email.current?.value,
        password:password.current?.value
    
    })
       
       navigation("home")
    }
  }

  return (
    <>
     <div className="flex flex-col items-center  w-[100vw] h-[100vh] bg-[#10141E] px-[24px] pt-[48px] pb-[170px]"  >
                <img className="mb-[58.4px]" src="/images/logo.svg" />
      <div className="w-[100%] p-[24px] pb-[32] flex flex-col items-center bg-[#161D2F] rounded-[10px] ">

        <h1 className="text-[32px] text-[#FFF] font-light tarcking-[-0.5px] mb-[40px] self-start	">
          Sign Up
        </h1>

        <div
          className={`w-[100%] flex justify-between border-b border-b-solid border-b-[#5A698F] mb-[24px] pl-[16px] pb-[18px] ${
            emptyEmail || emailerr || usedEmail ? "border-b-[#FC4747]" : null
          } `}
        >
          <input
            className="w-[150px] text-[15px] text-[#FFF] font-light bg-transparent focus:outline-none "
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            autoComplete="off"
            ref={email}
          />
          <a className="text-[13px] text-[#FC4747] font-light">
            {emailerr
              ? "wrong Email form"
              : emptyEmail
              ? "Can’t be empty"
              : null}
          </a>
        </div>

        <div
          className={`w-[100%] flex justify-between border-b border-b-solid border-b-[#5A698F] mb-[24px] pl-[16px] pb-[18px] ${
            emptyPassword ? "border-b-[#FC4747]" : null
          } `}
        >
          <input
            className="w-[150px] text-[15px] text-[#FFF] font-light bg-transparent focus:outline-none "
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={password}
          />
          <a className="text-[13px] text-[#FC4747] font-light">
            {emptyPassword ? "Can’t be empty" : null}
          </a>
        </div>

        <div
          className={`w-[100%] flex justify-between border-b border-b-solid border-b-[#5A698F] ${usedEmail?"mb-[24px]" :"mb-[40px]"} pl-[16px] pb-[18px]  ${
            repemptyPassword || repPassErr ? "border-b-[#FC4747]" : null
          } `}
        >
          <input
            className="w-[130px] text-[15px] text-[#FFF] font-light bg-transparent focus:outline-none "
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat Password"
            ref={repPassword}
          />
          <a className="text-[13px] text-[#FC4747] font-light">
            {repemptyPassword
              ? "Can’t be empty"
              : repPassErr
              ? "Must repet password"
              : null}
          </a>
        </div>
        <p className={`${usedEmail?"text-[13px] text-[#FC4747] font-light":"hidden"} mb-[40px] `} >This email is already registered</p>
        <button
          className="w-[100%] bg-[#FC4747] rounded-[6px] py-[15px] text-[15px] text-[#FFF] font-light mb-[24px]"
          onClick={() => HandleSignup()}
        >
          Create an account
        </button>

        <span className=" flex">
          <a className="w-[156px] text-[15px] text-[#FFF] font-light mr-[9px]">
            Don’t have an account?
          </a>
          <Link className="text-[15px] text-[#FC4747] font-light " to="/login">
            Log In
          </Link>
        </span>

      </div>
      </div>
    </>
  );
}

export default Signup;
