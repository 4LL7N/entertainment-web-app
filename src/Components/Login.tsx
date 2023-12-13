import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface usersObj{
    email:string
    password:string
}

function Login(props:{users:usersObj[]|never[]}){
  
    const logNavigation = useNavigate()

    const logEmail = useRef<any>(null)
    const logPassword = useRef<any>(null)

    const [emptyLogEmailErr, setEmptyLogEmailErr] = useState(false)
    const [emptyLogPassErr, setEmptyLogPassErr] = useState(false)
    const [userError, setUserError] = useState(false)

    let emptyLogEmailErrChk =false
    let emptyLogPassErrChk = false
    let userErrorChk = false

    console.log(props.users);
    

    function HandleLogin(){
        if(!logEmail.current?.value){
            setEmptyLogEmailErr(true)
            emptyLogEmailErrChk = true
        }else{
            setEmptyLogEmailErr(false)
            emptyLogEmailErrChk = false
        }

        if(!logPassword.current.value){
            setEmptyLogPassErr(true)
            emptyLogPassErrChk = true 
        }else{
            setEmptyLogPassErr(false)
            emptyLogPassErrChk = false 
        }


        let userObj = props.users.filter((item) => item?.email == logEmail.current?.value && item?.password == logPassword.current.value )
        console.log(userObj.length);
        if(userObj.length == 0){
            setUserError(true)
            userErrorChk = true
            console.log("userErrorChk "+userErrorChk);
            
        }else{
            setUserError(false)
            userErrorChk = false
        }
        
        if(!emptyLogEmailErrChk && !emptyLogPassErrChk && !userErrorChk){
            
            
            logNavigation("/website")
        }
    }


    return(
        <>
             <div className="flex flex-col items-center  w-[100vw] h-[100vh] bg-[#10141E] px-[24px] pt-[48px] pb-[170px]"  >
                <img className="mb-[58.4px]" src="/images/logo.svg" />
                <div className="w-[100%] p-[24px] pb-[32] flex flex-col items-center bg-[#161D2F] rounded-[10px] "  >
                    <h1 className="text-[32px] text-[#FFF] font-light tarcking-[-0.5px] mb-[40px] self-start	" >Login</h1>
                    <div className={`w-[100%] border-b border-b-solid border-b-[#5A698F] mb-[24px] pl-[16px] pb-[18px] ${emptyLogEmailErr || userError?"border-b-[#FC4747]":null} `} ><input className='w-[150px] text-[15px] text-[#FFF] font-light bg-transparent focus:outline-none ' type="email" name="email" id="email" placeholder="Email address" autoComplete="off" ref={logEmail} /> <a className={`${emptyLogEmailErr?"text-[13px] text-[#FC4747] font-light":"hidden"}`} >Can’t be empty</a>  </div>
                    <div className={`w-[100%] border-b border-b-solid border-b-[#5A698F] ${userError?"mb-[24px]":"mb-[40px]"} pl-[16px] pb-[18px] ${emptyLogPassErr || userError?"border-b-[#FC4747]":null} `} ><input className="w-[150px] text-[15px] text-[#FFF] font-light bg-transparent focus:outline-none " type="password" name="password" id="password" placeholder="Password" ref={logPassword} /><a className={`${emptyLogPassErr?"text-[13px] text-[#FC4747] font-light":"hidden"}`} >Can’t be empty</a>  </div>
                    <p className={`${userError?"text-[13px] text-[#FC4747] font-light":"hidden"} mb-[40px]  `}>Email or password is not correct</p>
                    <button className="w-[100%] bg-[#FC4747] rounded-[6px] py-[15px] text-[15px] text-[#FFF] font-light mb-[24px]" onClick={() =>  HandleLogin()} >Login to your account</button>
                    <span className=" flex" ><a className="w-[156px] text-[15px] text-[#FFF] font-light mr-[9px]" >Don’t have an account?</a><Link className="text-[15px] text-[#FC4747] font-light " to="/signup" >Sign Up</Link></span>
                </div>
            </div>
        </>
    )
}

export default Login