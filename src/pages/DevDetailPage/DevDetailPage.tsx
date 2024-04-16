import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./DevDetailPage.module.css";
import { createDev } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

type FormValues = {
  name: string;
  dateOfBirth: string;
  role: string;
  checkbox: boolean;
  radio: string;
  tel: string;
  obs: string;
  mark: string;
  price: string;
};

export const DevDetailPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    createDev({ ...data, profileUrl: './src/assets/backbone.png' }).then(() => {
      navigate(ROUTES.Home)
    })
  };

  const obterDataFormatada = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      {/* Text Field */}
      <div className={styles.inputField}>
        <input {...register("name", { required: true })} placeholder="Name" />
        {errors.name && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>
      {/* Price Field */}
      <div className={styles.inputField}>
        <input {...register("price", { required: true })} placeholder="Price" />
        {errors.price && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>

      {/* Date Field */}
      <div className={styles.inputField}>
        <input
          type="date"
          {...register("dateOfBirth", { required: true })}
          defaultValue={obterDataFormatada()}
        />
        {errors.dateOfBirth && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>

      {/* Dropdown */}
      <div className={styles.selectField}>
        <input type="tel" id="" placeholder="Whatsapp..." {...register("tel", { required: true })} />
        <select {...register("role", { required: true })}>
          <option value="">Tipo de Cliente</option>
          <option value="Empresa">Empresa</option>
          <option value="Cliente Loja">Cliente Loja</option>
          <option value="Funcionário">Funcionário</option>
        </select>
        {errors.role && (
          <span className={styles.errorMsg}>This field is required</span>
        )}
      </div>

      {/* Radio Buttons */}
      <div className={styles.radioContainer}>
        <label>
          <input
            type="Radio"
            value="Computador"
            {...register("radio", { required: true })}
          />
          Computador
        </label>
        <label>
          <input
            type="Radio"
            value="Notebook"
            {...register("radio", { required: true })}
          />
          Notebook
        </label>
        <label>
          <input
            type="Radio"
            value="PC Gamer"
            {...register("radio", { required: true })}
          />
          Pc Gamer
        </label>
        {/* Observações */}
        <div className={styles.inputField}>
          <input type="text" placeholder="Nome ou Modelo" {...register("mark")} />
        </div>
      </div>
      {errors.radio && (
        <span className={styles.errorMsg}>This field is required</span>
      )}


      {/* Observações */}
      <div className={styles.inputField}>
        <input type="text" placeholder="Escreva observações" {...register("obs")} />
      </div>

      {/* Checkbox */}
      <div className={styles.checkboxContainer}>
        <label>
          Confirmar Cadastro?
          <input type="checkbox" {...register("checkbox", { required: true })} />
        </label>
      </div>

      {/* Submit Button */}
      <div className={styles.submitButton}>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
};
