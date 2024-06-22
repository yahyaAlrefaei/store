import useSignup from "./useSignup";




const Signup = () => {
  const { onSubmit, formRef, handleSubmit, register, style } = useSignup()
  return (<>
    <main className="flex justify-center items-center h-svh">
      <div className="bg-primary-50 p-8 w-[100%] max-w-[500px]">
        <h2 className="text-primary-color text-3xl text-center mb-4">Signup</h2>
        <form className="grid" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="first_name">firstname</label>
          <input className={style} type="text" {...register("first_name")} />
          <label htmlFor="first_name">firstname</label>
          <input className={style} type="text" {...register("last_name")} />
          <label htmlFor="first_name">firstname</label>
          <input className={style} type="email" {...register("email")} />
          <label htmlFor="first_name">firstname</label>
          <input className={style} type="password" {...register("password")} />
          <label htmlFor="first_name">firstname</label>
          <input className={style} type="password" {...register("confirm_password")} />
          <button type="submit" className="bg-primary-color text-secondary text-lg p-3">submit</button>
        </form>
      </div>
    </main>
  </>);
}

export default Signup;