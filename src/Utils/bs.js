import * as Yup from "yup";
import moment from "moment";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// Minimo 5 caratteri, 1 lettera maiuscola, 1 lettera minuscola, 1 numero.

export const basicSchemaMeteo = Yup.object().shape({
  city: Yup.string()
    .min(4, "Troppo corto!")
    .max(20, "Troppo lungo!")
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Obbligatorio"),
});

export const basicSchemaEurUsd = Yup.object().shape({
  eur: Yup.string("L'euro deve essere espresso numericamente")
    .max(9, "Troppo lungo!")
    .required("Obbligatorio")
    .matches(/^(?:\d+)$/, "Inserire solo numeri"),
});

export const basicSchemaForm = Yup.object().shape({
  task: Yup.string()
    .min(4, "Troppo corto!")
    .max(20, "Troppo lungo!")
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Obbligatorio"),
  date: Yup.date()
    .min(
      moment().startOf("day"),
      "La data non può essere precedente a quella di oggi"
    )
    .required("Inserisci la data!"),
});

export const basicSchemaRegistration = Yup.object().shape({
  name: Yup.string()
    .min(3, "Il nome deve essere di almeno 3 lettere")
    .max(15, "Il nome è troppo lungo")
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Inserisci il tuo nome"),
  surname: Yup.string()
    .min(3, "Il cognome deve essere di almeno 3 lettere")
    .max(15, "Il cognome è troppo lungo")
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Inserisci il tuo cognome"),
  email: Yup.string()
    .email("Inserisci un'email valida")
    .required("Impossibile proseguire senza inserire email"),
  datanascita: Yup.string().required("Inserisci la tua data di nascita"),
  password: Yup.string()
    .min(5, "Minimo 5 caratteri")
    .matches(passwordRules, { message: "Password debole, riprova" })

    .required("Impossibile proseguire senza password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Le due password non combaciano")
    .required("Conferma la password."),
});

export const basicSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Inserisci un'email valida")
    .required("Impossibile proseguire senza inserire email"),
  password: Yup.string()
    .min(5, "Minimo 5 caratteri")
    .matches(passwordRules, { message: "Password debole, riprova" })
    .required("Impossibile proseguire senza password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Le due password non combaciano")
    .required("Conferma la password."),
});
