import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Authroutes(){
    return(

        <Routes>
            <Route path='/' element={<SignIn/>}></Route>
            <Route path='/register' element={<SignUp/>}></Route>
        </Routes>



    );



}