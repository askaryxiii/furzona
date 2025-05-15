import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidation } from "../../utils/yupValidation";
import InputField from "../comonUse/InputField";
import RoundedPurpleButton from "../comonUse/RoundedPurpleButton";
import { loginUser } from "../../services/api";
import LinkText from "../comonUse/LinkText";
import { useNavigate } from "react-router-dom";

const LogRegForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidation),
    defaultValues: { username: "", password: "" },
  });
  const onSubmit = ({ username, password }) =>
    loginUser(username, password, navigate);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-sm">
      <section className="flex flex-col gap-3">
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
        <LinkText dist={"/forgetPassword"} text={"Forgot your password?"} />
      </section>
      <RoundedPurpleButton type={"submit"} text={"Sign in"} />
    </form>
  );
};

export default LogRegForm;
