import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import axiosInstance from './Axios';

function LoginComponent() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();

    const loginUser = async (user) => {
        try {
            const { data } = await axiosInstance.post('/v1/users/login', user);
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
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleSubmit(loginUser)} noValidate>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email<span className="text-danger">*</span></label>
                            <input type="email" class="form-control" {...register('email', {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} id="email" placeholder="Email" />
                            <p className='text-danger'>
                                {errors.email?.type === 'required' && 'Please enter email'} 
                                {errors.email?.type === 'pattern' && 'Please enter valid format'}
                            </p>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password<span className="text-danger">*</span></label>
                            <input type="password" class="form-control" {...register('password', {required: true, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/})} id="password" placeholder="Password" />
                            <p className='text-danger'>
                                {errors.password?.type === 'required' && 'Please enter password'} 
                                {errors.password?.type === 'pattern' && 'Please enter valid format'} 
                            </p>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
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

export default LoginComponent;