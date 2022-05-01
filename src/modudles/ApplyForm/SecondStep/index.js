import React, { useState } from "react";
import InputComponent from "../../../components/InputComponent";
import RadioButtonGroup from "../../../components/RadioButtonGroup";
import SelectComponent from "../../../components/SelectComponent";
import countriesList from "../../../constants/countriesList";
import styles from "./styles.module.scss";

export default ({ register, error }) => {
  const [countryValue, setCountryValue] = useState(null);

  return (
    <div>
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
          name="lead_nationalityISO"
          required={true}
          defaultOptionLabel="Nacionalidad *"
          errorMessage="Este campo es obligatorio"
          options={countriesList}
          value={countryValue}
          setValue={setCountryValue}
          customStyles={styles.halfWidth}
          label="ISO"
        />
        <InputComponent
          labelText="NIF/Pasaporte *"
          name="lead_documentNumber"
          type="text"
          register={register}
          error={error}
          required={{ required: true, minlength: 1 }}
          errorMessage="Este campo es obligatorio"
          customStyles={styles.halfWidth}
        />
      </div>
      <InputComponent
        labelText="Últimos estudios finalizados *"
        name="study_otherStudies"
        type="text"
        register={register}
        error={error}
        required={{ required: true, minlength: 1 }}
        errorMessage="Este campo es obligatorio"
        helperText="ej. Grado en Diseño"
      />
      <InputComponent
        labelText="Año de finalización *"
        name="study_endYearOfAcademicStudies"
        type="text"
        register={register}
        error={error}
        required={{ required: true, minlength: 4 }}
        errorMessage="Este campo es obligatorio"
      />
      <InputComponent
        labelText="Centro / Universidad *"
        name="study_center"
        type="text"
        register={register}
        error={error}
        required={{ required: true, minlength: 1 }}
        errorMessage="Este campo es obligatorio"
      />
      <InputComponent
        labelText="Motivación para escoger el programa *"
        name="contact_comment"
        type="textarea"
        register={register}
        error={error}
        required={{ required: true, minlength: 1 }}
        errorMessage="Este campo es obligatorio"
      />
      <RadioButtonGroup
        register={register}
        error={error}
        label="¿Cuál es tu nivel de inglés?"
        elements={[
          { label: "Bajo", value: "bajo" },
          { label: "Medio", value: "medio" },
          { label: "Alto", value: "alto" },
        ]}
      />
    </div>
  );
};
