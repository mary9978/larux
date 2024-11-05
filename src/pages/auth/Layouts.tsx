import { Container } from "@mui/material"
import LoginImage1 from '../../../public/login-page-D0PQRj4i.png';
function Layout({children}:any) {
  return (
    <Container>
    <div className="form-grid">
        <div className="hidden lg:flex justify-center bg-lightBlue rounded-lg">
          <img className="w-full object-none" src={LoginImage1} alt="login image" />
        </div>
         {children}
     </div>
  </Container>
  )
}

export default Layout