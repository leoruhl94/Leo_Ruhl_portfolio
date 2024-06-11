import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    try {
      await axios.post(
        "https://api-portfolio-leoruhl.herokuapp.com/mail",
        data
      );
      console.log("Message submited");
    } catch (error) {
      console.log("Error to submit");
    }
    e.target.reset();
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first">
          <ul>
            <li>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Nombre"
              />
              {errors.name && errors.name.type === "required" && (
                <span>Nombre es requerido</span>
              )}
            </li>
            {/* End first name field */}

            <li>
              <input
                {...register(
                  "mail",
                  {
                    required: "Email es Requerido",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "El valor ingresado no coincide con un formato de email valido",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Email"
              />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </li>
            {/* End email name field */}

            <li>
              <textarea
                {...register("message", { required: true })}
                placeholder="Mensaje"
              ></textarea>
              {errors.subject && <span>Este campo es requerido.</span>}
            </li>
            {/* End subject  field */}
          </ul>
        </div>

        <div className="tokyo_tm_button">
          <button type="submit" className="white-fill-bg fill-black">
            Enviar Mensaje
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
