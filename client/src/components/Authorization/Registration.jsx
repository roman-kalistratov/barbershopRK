import axios from 'axios'
import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import Sidebar from '../Sidebar/Sidebar';
import { API_URL } from "../../config";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { showSidebar } from '../../reducers/sidebarReducer';
import { hideLoader, showLoader } from "../../reducers/loaderReducer";
import './authorization.scss'

const Registration = () => {
    const dispatch = useDispatch()
    const [isView, setIsView] = useState(false)
    const [error, setError] = useState(null)
    const [isBarber, setIsBarber] = useState(false)   
    const [credentials, setCredentials] = useState({
        name: undefined,
        email: undefined,
        password: undefined,
        phone: undefined,
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const hundleSubmit = async () => {
        const data = {
            name:credentials.name,
            email:credentials.email,
            password:credentials.password,
            phone:credentials.phone,
            isBarber:isBarber
        }

        try {
            dispatch(showLoader())
            await axios.post(`${API_URL}api/auth/registration`, data)
            dispatch(showSidebar('login'))
        } catch (err) {
            setError(err.response.data);
        } finally {
            dispatch(hideLoader())
        }
    }

    return (
        <Sidebar title="הרשמה">
            <div className="authorization">
                <input onChange={handleChange} id="name" type="text" placeholder="שם" />
                <input onChange={handleChange} id="email" type="email" placeholder="כתובת אימייל" />
                <div className="authorization__input-password">
                    {!isView ? <AiOutlineEye onClick={() => setIsView(!isView)} /> : <AiOutlineEyeInvisible onClick={() => setIsView(!isView)} />}
                    <input id="password" onChange={handleChange} type={`${isView ? "text" : "password"}`} placeholder="סיסמה" />
                </div>
                <input onChange={handleChange} id="phone" type="tel" placeholder="טלפון" pattern="[0-9]" />

                <div className='authorization__checkBox'>
                    <input type="checkbox" id="isBarber" name="scales" onChange={() => setIsBarber(!isBarber)} />
                    <label for="scales">סמן אם אתה <span>Barber</span></label>
                </div>

                {error && <div className="authorization__message error">{error.errors ? error.message : error}</div>}
                <Spinner />
                <div className="authorization__btns">
                    <button className="authorization__btn btn" onClick={hundleSubmit}>הרשמה</button>
                    <button className="authorization__btn btn" onClick={() => dispatch(showSidebar('login'))}>התחברות</button>
                </div>
            </div>
        </Sidebar>
    )
}

export default Registration