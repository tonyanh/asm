import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { SignupForm, signupSchema } from '../models';
import { signup } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd'

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema)
  })

  const navigate = useNavigate()

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await signup(data)
      console.log(response);
      message.success(`Đăng ký thành công.`);
      navigate('/signin')
      
    } catch (error) {
      console.log(error);
      message.error("Email đã tồn tại");
      
    }
  }
  return <div>
    <section className="">
      <div className="">

        <main
          aria-label="Main"
          className=""
        >
          <div className="">

            <form action="#" className="mt-8  mx-auto max-w-[450px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-6">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                 Name
                </label>

                <input
                  {...register('name')}
                  className="mt-1 w-full rounded-md h-[35px] border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
                />
                <p className='text-red-500 text-[20px] font-medium mt-2'>
                   {errors.name && errors.name.message}
                </p>
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  {...register('email')}
                  className="mt-1 w-full rounded-md h-[35px] border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
                />
                <p className='text-red-500 text-[20px] font-medium mt-2'>
                   {errors.email && errors.email.message}
                </p>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  {...register('password')}
                  className="mt-1 w-full rounded-md h-[35px] border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
                />
                <p className='text-red-500 text-[20px] font-medium mt-2'>
                   {errors.password && errors.password.message}
                </p>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium  text-gray-700"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  {...register('confirmPassword')}
                  className="mt-1 w-full rounded-md h-[35px] border-2 border-black bg-white text-sm text-gray-700 shadow-sm"
                />
                <p className='text-red-500 text-[20px] font-medium mt-2'>
                   {errors.confirmPassword && errors.confirmPassword.message}
                </p>
              </div>

              

              <div className="col-span-6 sm:col-span-3">
                <button
                  className="w-[450px] inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>
              </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  Already have an account?
                  <a href="http://localhost:5173/signin" className="text-gray-700 underline"> Log in</a>.
                </div>
            </form>
          </div>
        </main>
      </div>
    </section>


  </div>
}
export default Signup