import * as Yup from "yup";

export const basicSchemaMeteo = Yup.object().shape({
  city: Yup.string()
    .min(4, "Troppo corto!")
    .max(10, "Troppo lungo!")
    .matches(/^[a-zA-Z]+$/, "Inserire solo lettere")
    .required("Obbligatorio"),
});
