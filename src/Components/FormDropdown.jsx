import React from 'react'

const FormDropdown = ({ type, isReadonly, isRequired, items }) => {
    return (
        <div>
            <select className="form-select" aria-label="Default select example" readOnly={isReadonly} required={isRequired}>
                {items.map((e) => {
                    return (<option key={e.value} value={e.value}>{e.text}</option>)
                })}



            </select>
        </div>
    )
}

export default FormDropdown