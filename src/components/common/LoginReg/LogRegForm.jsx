import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidation } from "../../utils/yupValidation";
import InputField from "../comonUse/InputField";
import RoundedButton from "../comonUse/RoundedButton";
import { loginUser } from "../../services/api";

const LogRegForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidation),
    defaultValues: { username: "", password: "" },
  });
  const onSubmit = ({ username, password }) => loginUser(username, password);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-sm">
      <InputField
        {...register("username")}
        name="username"
        error={errors.username}
      />
      <InputField
        {...register("password")}
        name="password"
        error={errors.password}
      />
      <RoundedButton
        type={"submit"}
        color={"#4a276b"}
        textColor={"white"}
        text={"Sign in"}
      />
    </form>
  );
};

export default LogRegForm;
