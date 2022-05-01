import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import PhoneInputComponent from "../../components/PhoneInputComponent";

export const SchemaDefaults = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "var(--ui02)",
        padding: "var(--spc-4xl)",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} data-theme="light">
          <PhoneInputComponent
            labelText="Phone number *"
            name="phone"
            register={register}
            error={errors}
            required={true}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Button type="submit" label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default {
  title: "Components/PhoneInputComponent",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
