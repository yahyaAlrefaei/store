import { ComponentProps, FormEvent, useRef } from "react";
import http from "../../../config/axios";
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const style = "border border-gray-200 h-12 w-[100%] mb-3 p-2"

const useSignup = () => {
    const formRef = useRef<ComponentProps<"form">>()
    const { register, handleSubmit } = useForm()
    const navigate  = useNavigate()

    const defalutValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    const dataCollect = (data: any) => {

        const formDate = new FormData()

        for (const key in data) {
            formDate.append(key, data[key])
        }
        formDate.append("token", generateToken(32))
        return formDate
    }

    function generateToken(length:number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          token += characters[randomIndex];
        }
      
        return token;
      }

    const onSubmit = async (data: any) => {       
        try {
            const res = await http.post(`login`, dataCollect(data))
            // console.log(res);
            navigate("/auth/login")

        } catch (error) {
            console.log(error);

        }

    }
    return {
        onSubmit,
        formRef,
        register,
        handleSubmit,
        style
    };
}

export default useSignup;