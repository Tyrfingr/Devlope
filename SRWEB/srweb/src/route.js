import * as react from 'react';
import { Login } from './pages/login.js';
import { Userinfo } from './pages/userinfo.js';
import {Routes,Route} from 'react-router-dom';

export function RouteJs()
{
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/userinfo" element={<Userinfo/>} />
        </Routes>
    );
}