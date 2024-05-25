import useLogin from "./useLogin";

const Login = () => {
    const {submit} = useLogin()
    return (<>
    <div className="bg-slate-400 p-4 w-fit m-auto">
        <h2>Signup</h2>
        <form className="grid">
            <input type="text" name="first_name" />
            <input type="text" name="last_name" />
            <input type="email" name="email" />
            <input type="password" name="pasword" />
            <input type="password" name="confirm_password" />
            <button onClick={submit}>submit</button>
        </form>
    </div>
    </>);
}
 
export default Login;