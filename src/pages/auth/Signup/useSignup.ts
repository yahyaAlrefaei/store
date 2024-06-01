import { ComponentProps, FormEvent, useRef } from "react";
import http from "../../../config/axios";
import { SubmitHandler, useForm } from "react-hook-form"

const useSignup = () => {
    const formRef = useRef<ComponentProps<"form">>()
    const { register, handleSubmit } = useForm()

    const defalutValues = {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:""
    }

    const onSubmit = (data: any) => {
     
        console.log(data);
        
    }
    return {
        onSubmit,
        formRef,
        register,
        handleSubmit
    };
}
 
export default useSignup;