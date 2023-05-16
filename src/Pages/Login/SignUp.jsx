
import loginImg from "../../assets/login/login.svg"
import { FcGoogle} from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
    const {createUser, googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
    async function handleSignUp(e)  {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        try {
            await createUser(email, password, name);
            form.reset();
        } catch (error) {
            console.log(error);
        }

    }
    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
          const googleUser = result.user;
          console.log(googleUser);
      })
      .catch(error => {
          console.log(error);
      })
  }
  const handleGitHubLogin = () => {
      githubLogin()
      .then(result => {
          const gitHubUser = result.user;
          console.log(gitHubUser);
          navigate(from, { replace: true })
      })
      .catch(error => {
          console.log(error);
      })
  }
    return (
        <div className="hero min-h-screen my-20">
      <div className="hero-content flex-col-reverse lg:flex-row justify-around gap-20">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card p-6 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <h2 className="text-4xl font-bold text-center my-5">Sign Up</h2>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <input className="btn bg-[#FF3811] border-0 block" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center ">Or Sign in with</p>
          <div className="flex justify-center items-center gap-5 text-xl my-5">
            <FcGoogle onClick={handleGoogleLogin}></FcGoogle>
            <BsGithub onClick={handleGitHubLogin}></BsGithub>
          </div>

          <p className="text-[#FF3811] text-center mb-6 font-bold"><small className="text-gray-400 font-medium">Already have an account?</small> <Link to='/login'>Login</Link></p>

        </div>
      </div>
    </div>
    );
};

export default SignUp;