import React from "react";
import Logo from "../common/Navbar/Logo";
import MainLoginTitle from "../common/LoginReg/MainLoginTitle";
import ParagraphLg from "../common/LoginReg/ParagraphLg";
import LogRegForm from "../common/LoginReg/LogRegForm";

const LoginSection = () => {
  return (
    <div className="flex flex-col gap-4 border-2 px-24 py-8 items-center border-gray-200 w-2xl h-full md:h-fit">
      <Logo width={"sm"} />
      <ParagraphLg
        text={
          "Users logging in can post a pet for adoption, and contact owners to adopt an pet, Make a differance and adopt needed pet"
        }
      />
      <MainLoginTitle title={"Login to FURZONA"} />
      <LogRegForm />
    </div>
  );
};

export default LoginSection;
