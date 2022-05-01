import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/Button/";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import ConfirmationMessage from "../../components/ConfirmationMessage";

export const Base = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const [sent, setSent] = useState(false);
  const onSubmit = (data) => {
    setSent(true);
    alert(JSON.stringify(data));
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "var(--ui02)",
        padding: "var(--spc-4xl)",
        color: "var(--textRegular)",
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
              <ConfirmationMessage reset={reset} setSent={setSent} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <RadioButtonGroup
              register={register}
              error={errors}
              label="How would you describe your English level? *"
              elements={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
              ]}
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
  title: "Components/RadioButtonGroup",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
