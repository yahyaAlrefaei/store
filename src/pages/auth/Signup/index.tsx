import useSignup from "./useSignup";

const Signup = () => {
    const {onSubmit , formRef, handleSubmit, register} = useSignup()
    return (<>
    <main className="flex justify-center items-center h-svh">
       <div className="bg-gray-200 p-8 w-[100%] max-w-[500px]">
        <h2>Signup</h2>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="text" {...register("first_name")} />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="text" {...register("last_name")} />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="email" {...register("email")} />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="password" {...register("password")} />
            <input className="border border-gray-200 h-12 w-[100%] mb-3 p-2" type="password" {...register("firstconfirm_password_name")} />
            <button type="submit">submit</button>
        </form>
       </div>
    </main>
    </>);
}
 
export default Signup;