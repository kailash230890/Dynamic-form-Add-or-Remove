import React from 'react';
import '../App.css';
import { useForm, useFieldArray } from 'react-hook-form';

const UserInformation = (props) => {
    const { register, control } = props
    const { append, fields, remove } = useFieldArray({
        control,
        name: "users",
    })
    return (
        <div className='card mb-4'>
            <div className='card-header'>User Informations</div>
            <div className='card-body'>
                {
                    fields.map((item, index) => (
                        <div className="form-row form-group" key={item.id}>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="enter first name"
                                    name={`users[${index}].firstName`}
                                    ref={register()}
                                    defaultValue={item.firstName}
                                />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="enter last name"
                                    name={`users[${index}].lastName`}
                                    ref={register()}
                                    defaultValue={item.lastName}
                                />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="enter e-mail address"
                                    name={`users[${index}].emailAddress`}
                                    ref={register()}
                                    defaultValue={item.emailAddress}
                                />
                            </div>
                            <div className="col">
                                {/* <label htmlFor="state">Select Your State</label> */}
                                <select className="form-control" id="state" name={`users[${index}].state`} ref={register()} defaultValue={item.state} >
                                    <option value="">select state</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Manipur">Manipur</option>
                                </select>
                            </div>
                            <div className='col-auto'>
                                <button className='btn btn-danger' onClick={() => remove(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
                <button className='btn btn-secondary' onClick={() => append({ firstName: '', lastName: '', emailAddress: '', state: '' })}>Add User</button>
            </div>
        </div>

    )
}

const DynamicForms = () => {
    const { register, handleSubmit, control } = useForm();

    const basicForm = (
        <div className='card mb-4'>
            <div className='card-header'>
                Basic Informations
            </div>
            <div className='card-body'>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname"
                        ref={register}
                        name='fullname'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"
                        ref={register}
                        name='email'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone"
                        ref={register}
                        name='phone'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"
                        ref={register}
                        name='password'
                    />
                </div>
            </div>
        </div>

    )

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="App">
            <div className="container py-5">
                <div className="card border-0 shadow w-75 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {basicForm}
                        <UserInformation register={register} control={control} />
                        <button type='submit' className='btn btn-secondary btn-block'>Basic Form</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DynamicForms;
