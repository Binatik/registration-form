// =================================================
import React, { useState } from 'react';
// =================================================

// Component
import './input.css';

function Input({index, field}) {
    const [ isValidationName, setIsValidationName ] = useState(false);
    const [ isValidationEmail, setIsValidationEmail ] = useState(false);
    const [ isValidationTel, setIsValidationTel ] = useState(false);
    const [ isWaiting, setIsWaiting ] = useState(false);

    const { title, placeholder, warning } = field;

    const reg = {
        name: /^[a-zа-яё-]+$/i,
        email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        tel: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    }

    function verifyValidity(event) {
        const target = event.target;
        setIsWaiting(true);

        if(reg.name.test(target.value) && index === 0){
            setIsValidationName(true);
        }
        else if(reg.email.test(target.value) && index === 1){
            setIsValidationEmail(true);
        }
        else if(reg.tel.test(target.value) && index === 2){
            setIsValidationTel(true);
        }
        else {
            setIsValidationName(false);
            setIsValidationEmail(false);
            setIsValidationTel(false);
        }
    }

    function checkIsValidation() {
        return isValidationName || isValidationEmail || isValidationTel ? "form__input_ok" : "form__input_error";
    }

    function waiting() {
        return !isWaiting ? "form__input_waiting" : "";
    }


    return (
        <React.Fragment>
            <div className="form__group">
                <h2 className="form__title">{title}</h2>
                <div className="form__control">
                    <input
                        onChange={verifyValidity}
                        className="form__input"
                        type="text"
                        placeholder={placeholder}
                    />
                </div>
                <span
                    className={`form__input_validation ${checkIsValidation() + ' ' + waiting()}`}
                    >{warning}
                </span>
            </div>
        </React.Fragment>
    );
}

export default Input;