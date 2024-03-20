import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export function Approutes(){
    return(

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/new' element={<New></New>}></Route>
            <Route path='/Profile' element={<Profile></Profile>}></Route>
            <Route path='/Details/:id' element={<Details></Details>}></Route>
        </Routes>



    );



}