import { kMaxLength } from "buffer";
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
    watch,
  } = useForm({ mode: "onChange" });

  // const name = watch("name");

  console.log(errors);

  const onSubmit = (data: any) => console.log("sended", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>My Form</h1>
      <input {...register("name", { required: true, maxLength: 6 })} />
      {errors.name && <i> Must be 15 sybols </i>} <br />
      <input {...register("age", { required: true, max: 99, min: 18 })} />{" "}
      <br />
      <input type="submit" />
    </form>
  );
}

export default App;
