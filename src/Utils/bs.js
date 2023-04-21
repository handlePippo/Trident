import * as Yup from "yup";

export const basicSchemaMeteo = Yup.object().shape({
  city: Yup.string()
    .min(4, "Troppo corto!")
    .max(20, "Troppo lungo!")
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Obbligatorio"),
});

export const basicSchemaForm = Yup.object().shape({
  task: Yup.string()
    .min(4, "Troppo corto!")
    .max(20, "Troppo lungo!")
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Obbligatorio"),
  date: Yup.string().required("Obbligatorio"),
});

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// Minimo 5 caratteri, 1 lettera maiuscola, 1 lettera minuscola, 1 numero.

export const basicSchemaRegistration = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .max(10)
    .matches(/^[a-zA-Z,\s]+$/, "Inserire solo lettere")
    .required("Inserisci il tuo nome"),
  cognome: Yup.string()
    .min(3)
    .max(10)
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
