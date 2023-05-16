import loginImg from "../../assets/login/login.svg"
import { FcGoogle} from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const {login, googleLogin, githubLogin} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email, password)
        .then(result => {
          const loggedUser = result.user;
          
          console.log(loggedUser);
          navigate(from, {replace:true})
          
        })
        .catch(err => console.log(err))

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
        <h2 className="text-4xl font-bold text-center my-5">Sign In</h2>
          <form onSubmit={handleSignIn} className="card-body">
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
                <input className="btn bg-[#FF3811] border-0 block" type="submit" value="Sign In" />
            </div>
          </form>
          <p className="text-center ">Or Sign in with</p>
          <div className="flex justify-center items-center gap-5 text-xl my-5">
            <FcGoogle className="cursor-pointer" onClick={handleGoogleLogin}></FcGoogle>
            <BsGithub className="cursor-pointer" onClick={handleGitHubLogin}></BsGithub>
          </div>

          <p className="text-[#FF3811] text-center mb-6 font-bold"><small className="text-gray-400 font-medium">New user in our workshop?</small> <Link to='/register'>Register</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Login;
