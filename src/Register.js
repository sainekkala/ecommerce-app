import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import axiosInstance from './Axios';

function RegisterComponent() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();

    const registerUser = async (user) => {
        try {
            const { data } = await axiosInstance.post('/v1/users/register', user);
            toast.success('Registered Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/');
        } catch(error) {
            if (error.response.data && error.response.data.errorDescription) {
                toast.error(error.response.data.errorDescription, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto my-4">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={handleSubmit(registerUser)} noValidate>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">Firstname<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" {...register('firstName', {required: true, minLength: 3, maxLength: 10})} id="firstName" placeholder="Firstname" />
                            <p className='text-danger'>
                                {errors.firstName?.type === 'required' && 'Please enter firstname'} 
                                {errors.firstName?.type === 'minLength' && 'Please enter min 3 characters'}
                                {errors.firstName?.type === 'maxLength' && 'Please enter max 10 characters'}
                            </p>                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Lastname<span className="text-danger">*</span></label>
                            <input type="text" className="form-control" {...register('lastName', {required: true})} id="lastName" placeholder="Lastname" />
                            <p className='text-danger'>
                                {errors.lastName?.type === 'required' && 'Please enter lastname'} 
                            </p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
                            <input type="email" className="form-control" {...register('email', {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} id="email" placeholder="Email" />
                            <p className='text-danger'>
                                {errors.email?.type === 'required' && 'Please enter email'} 
                                {errors.email?.type === 'pattern' && 'Please enter valid format'}
                            </p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile No<span className="text-danger">*</span></label>
                            <input type="mobile" className="form-control" {...register('mobile', {required: true, pattern: /^[7-9][0-9]{9}$/})} id="mobile" placeholder="Mobile" />
                            <p className='text-danger'>
                                {errors.mobile?.type === 'required' && 'Please enter mobile no'} 
                                {errors.mobile?.type === 'pattern' && 'Please enter valid format'} 
                            </p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                            <input type="password" className="form-control" {...register('password', {required: true, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/})} id="password" placeholder="Password" />
                            <p className='text-danger'>
                                {errors.password?.type === 'required' && 'Please enter password'} 
                                {errors.password?.type === 'pattern' && 'Please enter valid format'} 
                            </p>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        </div>
    )
}

export default RegisterComponent;