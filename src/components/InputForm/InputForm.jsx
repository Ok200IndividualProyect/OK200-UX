import "./InputForm.css";
import { registerUser } from "../../api/userService";
import { useForm } from "react-hook-form";
import { useState } from "react";

function InputForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const [serverErrors, setServerErrors] = useState({});

  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data);
      console.log("Usuario registrado", user);
    setServerErrors({});
    } catch (error) {
      console.error("Backend error:", error);
      setServerErrors(error)
    }
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username"> Username </label>
      <input
        type="text"
        {...register("username", {
           required: "Username is required",
        })}
      />
      {errors.username && <span>{errors.username.message}</span>}
      {serverErrors.username && <span>{serverErrors.username}</span>}

      <label htmlFor="email"> Email </label>
      <input
        type="email"
        {...register("email", {
          required: "Email is required", pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Invalid email format",
          },
        })}
      />
         {errors.email && <span>{errors.email.message}</span>}
      {serverErrors.email && <span>{serverErrors.email}</span>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password requerido",
          minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
          },
          maxLength: {
            value: 16,
            message: "La contraseña debe tener máximo 16 caracteres",
          },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}
      {serverErrors.password && <span>{serverErrors.password}</span>}


      <label>Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: "Confirma tu contraseña",
          validate: (value) =>
            value === password || "Las contraseñas no coinciden",
        })}
      />
      {errors.confirmPassword && (
        <span>{errors.confirmPassword.message}</span>
      )}

      <label htmlFor="description"> Description </label>
      <input type="text"
              {...register("description", {
           required: "Description is required",
        })}
      />
      {errors.description && <span>{errors.description.message}</span>}
      {serverErrors.description && <span>{serverErrors.description}</span>}

    
    <label htmlFor="discordLink"> Paste your Discord Link and start a conversation from there! </label>
      <input type="text"
              {...register("discordLink", {
    required: "El enlace de Discord es requerido",
    pattern: {
      value: /^https:\/\/discord\.com\/.+$/,
      message: "El link debe empezar con https://discord.com/",
    },
  })}
/>
      {errors.discordLink && <span>{errors.discordLink.message}</span>}
      {serverErrors.discordLink && <span>{serverErrors.discordLink}</span>}


      {/* <label htmlFor="technologies"> What am I?</label>
/*COMENT THOSE LINES TO IMPLEMENT ON THE FOLOWING DAYS *\
      <select
        {...register("technologies", {
          required: true,
        })}
      >
        {errors.technologies && <span> Your technologies are requiered </span>}
        <option value="dvFullStak">Developer Full Stak</option>
        <option value="dvJava">Developer Java</option>
        <option value="dvReact">Developer React</option>
        <option value="ciber">CyberSecurity Auditor</option>
        <option value="tryToHackMe">Try to Hackme Lover</option>
      </select> */}
      <button>Sign Up</button>
    </form>
  );
}

export default InputForm;
