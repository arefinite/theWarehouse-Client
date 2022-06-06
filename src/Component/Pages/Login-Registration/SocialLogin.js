import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import googleLogo from '../../../Img/Social/google-logo.png'
import facebookLogo from '../../../Img/Social/facebook-logo.png'
import gitHubLogo from '../../../Img/Social/github-logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../API/UseToken';

const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [token] = useToken(user)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    
    if(token){
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='flex justify-start items-center'>
                <div style={{height: '2px'}} className='bg-slate-400 w-1/2'></div>
                <p className='mx-2'>or</p>
                <div style={{height: '2px'}} className='bg-slate-400 w-1/2'></div>
            </div>
            <div className='items-center flex justify-center'>
                <div className='flex justify-center transition ease-in-out duration-500 w-screen md:w-1/2 my-3 cursor-pointer '>
                    <div onClick={()=>signInWithGoogle()} className='bg-red-300 p-1 px-3 rounded font-semibold hover:bg-red-500 hover:text-white duration-300 text-center w-full flex justify-center items-center'> 
                        <img className='w-7 mr-2' src={googleLogo} alt="" /><p>Continue With Google</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SocialLogin;