import React, { useEffect, useState } from 'react';
import drug1 from '../Components/Form1.json';
import drug2 from '../Components/Form2.json';
import FormDate from './FormDate';
import FormDropdown from './FormDropdown';
import FormNumber from './FormNumber';
console.log(drug2);

const MainForm = () => {
    const [data1, setdata1] = useState(drug1);

    return (
        <div className=''>
            <h1>Dynamic Form</h1>
            <p>Select The required Data</p>
            <button type="button" class="btn btn-outline-primary m-3" onClick={() => { setdata1(drug1) }}>Drug1</button>
            <button type="button m-3" class="btn btn-outline-primary" onClick={() => { setdata1(drug2) }}>Drug2</button>
            <div className='border m-auto p-3 formdatablock'>
                {<form>{
                    data1[0].fields.map((e, id) => {
                        return (

                            <div className="mb-3" key={e.key}>
                                <label htmlfor="exampleInputEmail1" className="form-label">{e.label}</label>
                                {(e.type == 'number') ? <FormNumber type={e.type} isReadonly={e.isReadonly} isRequired={e.isRequired}
                                    unit={e.unit} /> : (e.type == 'date') ? <FormDate type={e.type} isReadonly={e.isReadonly} isRequired={e.isRequired} /> : <FormDropdown
                                        type={e.type} isReadonly={e.isReadonly} isRequired={e.isRequired}
                                        items={e.items} />}

                            </div>
                        )

                    })
                }
                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>
                }
            </div>
        </div>

    )
}

export default MainForm