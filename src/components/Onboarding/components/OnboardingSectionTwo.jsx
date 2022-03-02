import React from "react";
import { Heading, Input, Text } from "../../../shared";
import { useForm } from "react-hook-form";

const OnboardingSectionTwo = ({ goToNext, setFormData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    goToNext();
    setFormData(data);
  };

  return (
    <div className="onboarding-section-body">
      <div className="text-center">
        <Heading level="1">Lets set up a home for all your work</Heading>
        <Text type="body">You can always creat another workplace later.</Text>
      </div>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Workplace Name"
          register={register}
          required
          error={errors["Workplace Name"]}
          inputProps={{
            placeholder: "Eden",
          }}
        />

        <Input
          label="Workplace URL"
          leftComponent={"www.eden.com/"}
          register={register}
          error={errors["Workplace URL"]}
          inputProps={{
            placeholder: "Example",
          }}
        />

        <input type="submit" value="Create Workplace" />
      </form>
    </div>
  );
};

export default OnboardingSectionTwo;
