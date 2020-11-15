import React, { useState, useEffect } from 'react';
import {Alert, Button} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import './RegForm.css';

const RegForm = (props) => {
    // const [myErrors, setMyErrors] = useState();
    const {register, handleSubmit, errors} = useForm();

    const [success, setSuccess] = useState(0);

    // const onSubmit = data => console.log(data);

    const variants = {
        0: "info",
        1: "success",
        2: "danger"
    }

    const textVariant = {
        0: "Submit",
        1: "Submitted!",
        2: "Email Already Exists!"    
    }

    const err = (e) => Object.values(e).map((d,i) => <li key={i}>{d.message}</li>)
    
    const onSubmit = async data => {        
        try {

            if (!data.Email) {
                throw new Error('No Email Given');
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                }
            }

            const link = 'https://c2rug2aa9i.execute-api.us-east-2.amazonaws.com/prod/members';

            const body = {
                Email: data.Email,
                FName: data.Firstname ? data.Firstname : '',
                LName: data.Lastname ? data.Lastname : '',
                School: data.School ? data.School : '',
                AccessID: data.AccessID ? data.AccessID : '',
                Major: data.Major ? data.Major : '',
                Grade: data.Grade ? data.Grade : '',
                Age: data.Age ? data.Age : '',
                Gender: data.Gender ? data.Gender : '',
                Skills: data.Skills ? data.Skills : '',
                Random: data.RandomTeam ? data.RandomTeam : 0
            }
            await axios.post(link, body, config)
            .then((data) => {
                console.log('success!')
                setSuccess(1);
                setTimeout(() => setSuccess(0), 1000);
            })
            .catch((err) => {
                console.log('Error')
                setSuccess(2);
                setTimeout(() => setSuccess(0), 1000);
            })
        } catch (err) {
            console.log('Error in try', err);
        }  
    }

    useEffect(() => {
    }, [success]);

    return (
        <div ref={props.scroll} className="reg-form">
            <div className="registration">
                <div className="left">
                    <div className="Hlogo"></div>
                </div>
                <div className="right">
                    <h3>REGISTER</h3>
                    <div className="register">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-cont">
                                <input className="reg-input" type="email" placeholder="Email" name="Email" ref={register({required: 'Email Required', pattern: {value: /^\S+@\S+$/i, message: 'Valid Email Required'}})} />
                                <div className="name">
                                    <input className="reg-input" type="text" placeholder="First name" name="Firstname" ref={register({required: 'First Name Required', maxLength: {value: 80, message: 'First Name Required'}})} />
                                    <input className="reg-input" type="text" placeholder="Last name" name="Lastname" ref={register({required: 'Last Name Required', maxLength: {value: 100, message: 'Last Name Required'}})} />
                                </div>
                                <input className="reg-input" type="text" placeholder="AccessID" name="AccessID" ref={register({required: 'Wayne State AccessID required', min: 6, pattern: {value: /([a-z]|[A-Z])([a-z]|[A-Z])\d\d\d\d/gi, message: 'Not a valid Access ID'}})} />
                                <input className="reg-input" type="text" placeholder="Age" name="Age" ref={register({required: 'Age Required', min: 0, pattern: {value: /([1][8-9]|[2-9][0-9])/gi, message: 'you must be over 18'} })} />
                                <input className="reg-input" type="text" placeholder="Gender" name="Gender" ref={register} />
                                <input className="reg-input" type="text" placeholder="School" name="School" ref={register} />
                                <input className="reg-input" type="text" placeholder="Grade" name="Grade" ref={register} />
                                <input className="reg-input" type="text" placeholder="Major" name="Major" ref={register} />
                                <textarea className="reg-input" name="Skills" placeholder="Skills (comma separated)" ref={register} />
                                <label for="Random Team">Random Team</label>
                                <div className="randomteam">
                                    <input id="rand-yes" name="RandomTeam" type="radio" value="1" ref={register}/>
                                    <label for="rand-yes">Yes</label>
                                    <input id="rand-no" name="RandomTeam" type="radio" value=" 0" ref={register}/>
                                    <label for="rand-no">No</label>
                                </div>
                                <div className="error">
                                    { Object.keys(errors).length > 0 ? 
                                        <Alert variant="danger">
                                            <ul style={{margin: 0, marginLeft: '2rem'}}>
                                                {err(errors)}
                                            </ul>
                                        </Alert>
                                        :
                                        <></>
                                    }
                                </div>
                                <Button type="submit" variant={variants[success]}>
                                    {textVariant[success]}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegForm;