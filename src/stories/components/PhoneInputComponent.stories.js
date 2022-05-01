import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/Button/index";
import PhoneInputComponent from "../../components/PhoneInputComponent";

export const Base = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const [sent, setSent] = useState(true);
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setSent(true);
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
        {sent ? (
          <AnimatePresence>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <div
                  className="heading-xs"
                  style={{
                    marginBottom: "var(--spc-xs)",
                    color: "var(--textAccent)",
                  }}
                >
                  Gracias!
                </div>
                <div
                  className="body-lead"
                  style={{
                    marginBottom: "var(--spc-m)",
                    color: "var(--textRegular)",
                  }}
                >
                  La información se ha enviado correctamente
                </div>
                <Button
                  appearance="secondary"
                  buttonText="Reset form"
                  onClick={() => {
                    reset();
                    setSent(false);
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <Button
                appearance="secondary"
                type="submit"
                button={true}
                buttonText="Submit"
              />
            </div>
          </form>
        )}
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
