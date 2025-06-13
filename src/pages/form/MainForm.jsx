import ParagraphLg from "../../components/common/Login/ParagraphLg";
import Logo from "../../components/common/Navbar/Logo";
import MainLoginTitle from "../../components/common/Login/MainLoginTitle";
import RegisterFormComponent from "../../components/common/Register/RegisterFormComponent";
import LoginFormComponent from "../../components/common/Login/LoginFormComponent";

const MainForm = ({ login }) => {
  return (
    <div className="flex justify-center items-center h-svh ">
      <div className="flex flex-col gap-4 md:border-2 px-24 py-8 items-center md:border-gray-200 w-2xl h-fit md:h-fit">
        <Logo width={"sm"} />
        {login ? (
          <>
            <ParagraphLg
              text={
                "Users logging in can post a pet for adoption, and contact owners to adopt an pet, Make a differance and adopt needed pet"
              }
            />
            <MainLoginTitle title={"Login to FURZONA"} size={"text-2xl"} />
            <LoginFormComponent />
          </>
        ) : (
          <>
            <ParagraphLg
              text={
                "Users registered can post a pet for adoption, and contact owners to adopt an pet, Make a differance and adopt needed pet"
              }
            />
            <MainLoginTitle title={"JOIN FURZONA"} size={"text-2xl"} />
            <RegisterFormComponent />
          </>
        )}
      </div>
    </div>
  );
};

export default MainForm;
