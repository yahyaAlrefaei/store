import { ComponentProps, useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const style = "border border-gray-200 h-12 w-[100%] mb-3 p-2"
const useLogin = () => {
    const formRef = useRef<ComponentProps<"form">>()
    const { register, handleSubmit } = useForm()
    const navigate  = useNavigate()

    const onSubmit = () => {
        console.log("print form yahya Login");
        
    }
    return {
        onSubmit,
        formRef,
        register,
        handleSubmit,
        style
    };
}
 
export default useLogin;