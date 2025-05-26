import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../utils/yupValidation";
import InputField from "../comonUse/InputField";
import RoundedPurpleButton from "../comonUse/RoundedPurpleButton";
import LinkText from "../comonUse/LinkText";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../../context/slices/login/loginSlice";
import { toast } from "react-toastify";
import TwoSepPhrases from "../comonUse/TwoSepPhrases";

const LoginFormComponent = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
    defaultValues: { username: "", password: "" },
  });
  const onSubmit = async ({ username, password }) => {
    const resultAction = await dispatch(authLogin({ username, password }));
    !authLogin.fulfilled.match(resultAction) &&
      toast.error("Login failed. Please check your credentials");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-xs md:w-sm">
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
      <TwoSepPhrases
        normalText={`Don't have an account?`}
        linkedText={`Sign up now`}
        dist={"/register"}
      />
    </form>
  );
};

export default LoginFormComponent;
