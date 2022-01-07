import React, { useEffect } from 'react'
import './Security.css'
import check from '../../../../../image/profile/Check.svg'
import {API_SET_PASS} from '../../../../../config'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Rating from '@material-ui/lab/Rating';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Security = () => {
    const [data,setData] = React.useState(
        {
            new_password1:'',
            new_password2:''
        }
    ) 

    const [diss,setDiss] = React.useState(true)
    const [open, setOpen] = React.useState(false)
    const [status, setStatus] = React.useState('')

    const [statusMessage, setStatusMessage] = React.useState('')
    React.useEffect(()=>{
        if(data.new_password1 == data.new_password2 &&
            data.new_password1.length > 8 
            ){
            setDiss(false)
        }
    })
    const setText = (prop) => (event) => {
        setData({ ...data, [prop] : event.target.value });
    };

    const setPass = async () =>{
        let token = localStorage.getItem('tokensmart')
        try {
            const response = await fetch(API_SET_PASS, {
    
                method: 'POST',
                headers: {
                    Authorization: 'Token ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                
            });
            const json = await response.json();
            console.log(json)
            if(json.new_password1){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.new_password1[0])
            }
            else if(json.new_password2){
                setOpen(true)
                setStatus('warning')
                setStatusMessage(json.new_password2[0])
            }
            else{
                setOpen(true)
                setStatus('success')
                setStatusMessage(json.detail)
                setData({
                    new_password1:'',
                    new_password2:''
                })
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    return (
        <div className="security">
            <h2 className="security__title">Изменить пароль</h2>
            <div className="security__content">
                {/*<h3 className="security__label">Придумайте новый пароль с такими требованиями:</h3>
                 <div className="security__spec">
                    <div className="security__text"><img src={check} alt="" />Длина - не менее 8 символов;</div>
                    <div className="security__text"><img src={check} alt="" />Заглавные буквы;</div>
                    <div className="security__text"><img src={check} alt="" />Строчные буквы;</div>
                    <div className="security__text"><img src={check} alt="" />Цифры или специальные символы: %,#,$ и другие;</div>
                </div> */}

                <div className="security__pw">
                    <div className="security__text">Новый пароль</div>
                    <input type="password" 
                        value={
                            data.new_password1
                        }
                        onChange={setText("new_password1")}
                    />
                </div>
                <div className="security__pw">
                    <div className="security__text">Повторите пароль</div>
                    <input type="password" 
                        value={
                            data.new_password2
                        }
                        onChange={setText("new_password2")}
                    />
                </div>
                <button 
                    className="security__btn"
                    style={diss ? {background:'grey'}: {background:'#f4d962'}} 
                    disabled={diss}
                    onClick={setPass}
                    >Сохранить новый пароль</button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={()=>setOpen(true)}>
                    <Alert onClose={()=>setOpen(false)} severity={status}>
                        {statusMessage}
                    </Alert>
                
            </Snackbar>
        </div>
    )
}

export default Security
