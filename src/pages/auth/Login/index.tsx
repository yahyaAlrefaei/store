import useLogin from "./useLogin";

const Login = () => {
    const { onSubmit, formRef, handleSubmit, register, style } = useLogin()
    return (<>
       <main className="flex justify-center items-center h-svh">
      <div className="bg-primary-50 p-8 w-[100%] max-w-[500px]">
        <h2 className="text-primary-color text-3xl text-center mb-4">Login</h2>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="first_name">firstname</label>
          <input className={style} type="email" {...register("email")} />
          <label htmlFor="first_name">firstname</label>
          <input className={style} type="password" {...register("password")} />

          <button type="submit" className="bg-primary-color text-secondary text-lg p-3">submit</button>
        </form>
      </div>
    </main>
    </>);
}

export default Login;