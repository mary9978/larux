
import {  Container } from '@mui/material'
import './App.css'
import LoginImage2 from '../public/login-page2-DIiiFz5k.png';
import LoginImage1 from '../public/login-page-D0PQRj4i.png';
import SignUp from './pages/SignUp';
function App() {
  return (
    <Container>
      <div className="form-grid">
          {/* image container */}
          <div className="hidden lg:flex justify-center bg-lightBlue rounded-lg">
            <img className="w-full object-none" src={LoginImage1} alt="login image" />
          </div>
          {/* form container */}
          <div className="flex flex-col">
            <div className="flex p-2 lg:p-12 flex-col  text-center">
              <p className=" font-bold text-lg">ساخت حساب کاربری</p>
              <p className=" font-light text-xs my-3">
                برای ساخت حساب کاربری ابتدا اطلاعات خود را وارد کنید
              </p>
             <SignUp/>
            </div>
          </div>
       </div>
    </Container>
  )
}

export default App
