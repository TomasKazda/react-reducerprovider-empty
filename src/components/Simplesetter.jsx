import React, {useContext} from 'react'
import {Context, CLEAR, RESET, SETDATA1} from '../providers/Provider'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Simplesetter = () => {
    const [, dispatch] = useContext(Context)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        dispatch({type: SETDATA1, payload: data.textdata});
        navigate("/");
    }
    return (
        <div>
            <div>
                <p><button onClick={()=>{
                    dispatch({type: CLEAR});
                    navigate("/");
                }}>{CLEAR}</button></p>
                <p><button onClick={()=>{
                    dispatch({type: RESET});
                    navigate("/");
                }}>{RESET}</button></p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div><input defaultValue="string" {...register("textdata", { required: true })} />
                    {errors.textdata && <span>This field is required</span>}</div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Simplesetter;