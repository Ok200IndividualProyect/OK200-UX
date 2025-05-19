import "./InputForm.css"
import { useForm } from "react-hook-form";

function InputForm() {

    const {register, handleSubmit, formState: {
        errors
    } } = useForm() ;

    console.log(errors)
    const onSubmit= handleSubmit((data) => {
            console.log(data)
            })


    return (

        <form onSubmit={onSubmit}>

            <label htmlFor="username"> Username </label>
            <input type="text" 
            {...register("username", {
                required: true
            })} />
            {
                errors.username && <span> Name is requiered </span>
            }

            <label htmlFor="email"> Gmail </label>
            <input type="email" 
            {...register("email", {
                required: true
            })} />
             {
                errors.email && <span> Email is requiered </span>
            }

            <label htmlFor="password"> Password </label>
            <input type="password"
            {...register("password", {
                required: true
            })} />
             {
                errors.password && <span> Password is requiered </span>
            }

            <label htmlFor="confirmPassword"> Confirm Password </label>
            <input type="password"
            {...register("confirmPassword", {
                required: true
            })} />
             {
                errors.confirmPassword && <span> Confirm Password </span>
            }

            <label htmlFor="description"> Description </label>
            <input type="text" 
            {...register("description")} />

            <label htmlFor="technologies"> What am I?</label>
            <select 
            {...register("technologies", {
                required: true
            })} >
                 { errors.technologies && <span> Your technologies are requiered </span>
            }
                <option value="dvFullStak">Developer Full Stak</option>
                <option value="dvJava">Developer Java</option>
                <option value="dvReact">Developer React</option>
                <option value="ciber">CyberSecurity Auditor</option>
                <option value="tryToHackMe">Try to Hackme Lover</option>
            </select>
            <button>Sign Up</button>
        </form>
    )
}

export default InputForm;