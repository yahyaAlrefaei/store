import { ComponentProps, useRef } from "react";
import http from "../../../config/axios";

const useSignup = () => {
    const formRef = useRef<ComponentProps<"form">>()

    const defalutValues = {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:""
    }

    const submit = (e:any) => {
        e.preventDefault()
        console.log(e);
        
        // console.log(formRef.current);
        
        console.log("print form yahya");
        try {
            // const res = http.post()
        } catch (error) {
            
        }
        
    }
    return {
        submit,
        formRef
    };
}
 
export default useSignup;