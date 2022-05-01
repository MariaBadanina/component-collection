import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/InputComponent";
import PhoneInputComponent from "../../../components/PhoneInputComponent";
import SelectComponent from "../../../components/SelectComponent";
import countriesList from "../../../constants/countriesList";
import prefixesList from "../../../constants/prefixesList";
import regionsList from "../../../constants/regionsList";
import styles from "./styles.module.scss";

const educationLevel = {
  ES_AD: [
    { label: "Estudios Finalizados", code: 0 },
    { label: "Educación Primaria", code: 1 },
    { label: "Educación Secundaria", code: 2 },
    { label: "Bachillerato", code: 3 },
    { label: "Formación Profesional Superior", code: 4 },
    { label: "Grado o Licenciatura", code: 5 },
    { label: "Otro", code: 6 },
  ],
  INT: [
    { label: "Estudios Finalizados", code: 0 },
    { label: "Educación Primaria", code: 2 },
    { label: "Bachillerato o Educación Secundaria", code: 3 },
    { label: "Formación Técnica o Tecnológica", code: 4 },
    { label: "Carrera, Pregrado o Licenciatura", code: 5 },
    { label: "Otro", code: 6 },
  ],
};

export default (props) => {
  const {
    register,
    error,
    setValue,
    countryValue,
    setCountryValue,
    provinceSelect,
  } = props;

  const [educationValue, setEducationValue] = useState(null);
  const [regionValue, setRegionValue] = useState(null);

  const [regionsOptions, setRegionsOptions] = useState(null);
  const [educationLevelOptions, setEducationLevelOptions] = useState(null);
  const [prefixValue, setPrefixValue] = useState("+0");

  useEffect(() => {
    if (countryValue) {
      setRegionsOptions(
        regionsList.filter((reg) => reg.ISO.slice(0, 2) === countryValue)
      );
      const pr = prefixesList.filter((pref) => pref.ISO === countryValue);
      setPrefixValue(pr?.[0]?.value);
      setValue("prefix", prefixValue);

      if (countryValue === "ES" || countryValue === "AD") {
        setEducationLevelOptions(educationLevel.ES_AD);
      } else {
        setEducationLevelOptions(educationLevel.INT);
      }
    } else {
      setPrefixValue("+0");
      setRegionsOptions(null);
      setEducationLevelOptions(null);
    }
  }, [countryValue, prefixValue]);

  return (
    <div>
      <InputComponent
        labelText="Nombre y Apellidos *"
        name="lead_name"
        type="text"
        register={register}
        error={error}
        required={{
          required: "Este campo es obligatorio",
          minlength: 1,
          maxlength: 128,
          pattern: {
            value: /^([a-zA-ZÀ-ÿẞ])+(([ ]([a-zA-ZÀ-ÿẞ])+)+)?$/,
            message: "Introduce un nombre válido",
          },
        }}
      />
      <InputComponent
        labelText="Email *"
        name="lead_email"
        type="email"
        register={register}
        error={error}
        required={{
          required: "Este campo es obligatorio",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/,
            message: "Introduce un email válido",
          },
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: "14px",
        }}
      >
        <SelectComponent
          register={register}
          error={error}
          name="lead_countryISO"
          required={true}
          defaultOptionLabel="País *"
          errorMessage="Elige un país"
          options={countriesList}
          setValue={setCountryValue}
          value={countryValue}
          customStyles={styles.contryRegionSelect}
          label="ISO"
        />
        {provinceSelect ? (
          <SelectComponent
            register={register}
            error={error}
            name="lead_provinceISO"
            required={true}
            defaultOptionLabel="Provincia *"
            options={regionsOptions}
            setValue={setRegionValue}
            value={regionValue}
            customStyles={styles.contryRegionSelect}
            label="ISO"
          />
        ) : (
          <InputComponent
            labelText="Provincia *"
            name="lead_province"
            type="text"
            register={register}
            error={error}
            required={{
              required: "Este campo es obligatorio",
              pattern: {
                value: /^([a-zA-ZÀ-ÿẞ])+(([ ]([a-zA-ZÀ-ÿẞ])+)+)?$/,
                message: "Introduce un valor válido",
              },
            }}
          />
        )}
      </div>
      <PhoneInputComponent
        labelText="Número *"
        name="phone"
        register={register}
        error={error}
        required={true}
        prefixValue={prefixValue}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "65px 1fr",
          columnGap: "var(--spc-xxs)",
        }}
      >
        <InputComponent
          labelText="Edad *"
          name="lead_age"
          type="text"
          register={register}
          error={error}
          required={{ required: true, minlength: 1 }}
        />
        <SelectComponent
          register={register}
          error={error}
          required={true}
          name="study_level"
          defaultOptionLabel="Nivel de estudios *"
          value={educationValue}
          options={educationLevelOptions}
          setValue={setEducationValue}
          label="code"
          errorMessage="Elige un nuvel de estudios"
        />
      </div>
    </div>
  );
};
