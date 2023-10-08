import signupImg from "../assets/Images/signup.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Create an Account"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup