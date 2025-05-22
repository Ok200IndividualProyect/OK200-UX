import "./InputForm.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/userService";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Select from 'react-select';
import { getTechnologies } from "../../api/technologiesService";
import Button from "../Button/Button.jsx";

function InputForm() {
  const { register, handleSubmit, watch, formState: { errors },} = useForm();
  const [serverErrors, setServerErrors] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const password = watch("password", "");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchTechnologies = async() =>{
      try {
        const techList = await getTechnologies();
        const formatted = techList.map(tech => ({
          value: tech.id,
          label: tech.name
        }));
        setTechnologies(formatted);
      } catch (error) {
        console.error("Error al cargar tecnologías:", error);
      }
    };
    fetchTechnologies();
  }, []);


  const handleTechChange = (selected) => {
    setSelectedOptions(selected);
  };

    const onSubmit = async (data) => {
    try {
      const selectedTechIds = selectedOptions.map(option => ({id: option.value}));

      const payload = {
        ...data,
        technologies: selectedTechIds,
      };
      
      const user = await registerUser(payload);
      console.log("Usuario registrado", user);
    localStorage.setItem("loggedUserId", user.id);
     setServerErrors({});
    navigate("/dashboard");
    } catch (error) {
      console.error("Backend error:", error);
      setServerErrors(error)
    }

  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="input-form">
    <h2>Sing up</h2>
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
    // pattern: {
    //   value: /^https:\/\/discord\.com\/.+$/,
    //   message: "El link debe empezar con https://discord.com/",
    // },
  })}
/>
      {errors.discordLink && <span>{errors.discordLink.message}</span>}
      {serverErrors.discordLink && <span>{serverErrors.discordLink}</span>}

<label htmlFor="technologies">What am I?</label>
<Select
  options={technologies}
  isMulti
  value={selectedOptions}
  onChange={handleTechChange}
  closeMenuOnSelect={false}
/>
   
      
      <Button>Sign Up</Button>
    </form>
  );
}

export default InputForm;
