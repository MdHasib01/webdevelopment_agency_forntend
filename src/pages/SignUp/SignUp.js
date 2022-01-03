import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';




const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const onSubmit = data => {

        console.log(data);
        reset()

    };


    return (
        <div>

            <Row className="gy-md-3">
                <Col xs={11} md={8} lg={5} className="mx-auto my-auto">
                    <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mt-5 mb-3 fw-bold">Fill this sign up form</p>

                        <input defaultValue={""} placeholder="Full Name" className="w-75 px-2  py-3 rounded-3  border border-secondary border-2" {...register("name", { required: true })} />
                        {errors.name && <small className="text-danger ">*This field is required</small>}


                        <input defaultValue={""} placeholder="email" type="email" className="w-75 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("email", { required: true })} />
                        {errors.email && <small className="text-danger ">*This field is required</small>}


                        <input defaultValue={""} type="password" placeholder="password" className="w-75 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("password", { required: true })} />
                        {errors.password && <small className="text-danger ">*This field is required</small>}



                        <input defaultValue={""} type="password" placeholder="retype password" className="w-75 px-2 mt-3  py-3 rounded-3 border border-secondary border-2" {...register("confirmPass", { required: true })} />
                        {errors.confirmPass && <small className="text-danger ">*This field is required</small>}



                        <div className="mt-3"><input className="me-2" type="checkbox" id="agree" name="agreeCheck" value="agreeCheck" />
                            <label for="agree">Agree with our terms and conditions</label>
                        </div>


                        <input className="primary-btn mt-3" type="submit" value='SignUp' />

                    </form>
                    <hr className='w-75 mx-auto' />
                    <Button variant="outline-success" className='d-flex mx-auto'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" /> &nbsp; Sign Up With Google
                    </Button>
                    <div className="mt-3 text-center"><p>Already have a account? <Link to="/signin">Login</Link></p></div>
                </Col>

                <Col xs={12} md={12} lg={7} className='d-flex justify-content-center'>
                    <img className="w-75" src="https://i.ibb.co/jr4RX0V/Designer-life-cuate.png" alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default SignUp;