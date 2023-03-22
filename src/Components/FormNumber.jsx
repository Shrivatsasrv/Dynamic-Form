import React from 'react'

const FormNumber = ({ type, isReadonly, isRequired, unit }) => {
    return (
        <div className='input-group'><input className="form-control" type={type} required={isRequired} readOnly={isReadonly} placeholder={unit} aria-label="default input example" />
            <span class="input-group-text">{unit}</span></div>
    )
}

export default FormNumber;
