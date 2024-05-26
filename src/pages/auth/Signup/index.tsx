import useSignup from "./useSignup";

const Signup = () => {
    const {submit} = useSignup()
    return (<>
    <main className="flex justify-center items-center h-svh">
       <div className="bg-gray-200 p-8 w-[100%] max-w-[500px]">
        <h2>Signup</h2>
        <form className="grid">
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="text" name="first_name" />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="text" name="last_name" />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="email" name="email" />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="password" name="pasword" />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="password" name="confirm_password" />
            <button onClick={submit}>submit</button>
        </form>
       </div>
    </main>
    </>);
}
 
export default Signup;