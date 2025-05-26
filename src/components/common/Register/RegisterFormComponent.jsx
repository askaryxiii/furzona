import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerValidation } from "../../utils/yupValidation";
import { authRegister } from "../../../context/slices/register/registerSlice";
import InputField from "../comonUse/InputField";
import RoundedPurpleButton from "../comonUse/RoundedPurpleButton";
import { toast } from "react-toastify";
import TwoSepPhrases from "../comonUse/TwoSepPhrases";
import { useNavigate } from "react-router-dom";

const RegisterFormComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
    defaultValues: {
      username: "",
      password: "",
      phone: "",
      address: "",
      email: "",
    },
  });
  const onSubmit = async ({ username, password, phone, address, email }) => {
    const resultAction = await dispatch(
      authRegister({ username, password, phone, address, email })
    );
    authRegister.fulfilled.match(resultAction) && navigate("/");
    !authRegister.fulfilled.match(resultAction) &&
      toast.error("Register failed. Please check your credentials");
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
        <InputField {...register("email")} name="email" error={errors.email} />
        <InputField {...register("phone")} name="phone" error={errors.phone} />
        <InputField
          {...register("address")}
          name="address"
          error={errors.address}
        />
        <InputField
          {...register("password")}
          name="password"
          error={errors.password}
        />
      </section>
      <RoundedPurpleButton type={"submit"} text={"Sign up"} />
      <TwoSepPhrases
        normalText={`Already have an account?`}
        linkedText={`Login now`}
        dist={"/"}
      />
    </form>
  );
};

export default RegisterFormComponent;
