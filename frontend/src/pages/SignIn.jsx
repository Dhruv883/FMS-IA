import React, { useState, useMemo } from "react";
import { Input, Button } from "@nextui-org/react";

export const SignIn = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (data.email === "") return false;
    return validateEmail(data.email) ? false : true;
  }, [data.email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 hidden md:flex">
        <img src="/ticket.jpg" alt="" className="h-full w-full" />
      </div>
      <div className="w-full md:w-1/2 bg-darkGrey  lg:p-10 flex flex-col items-center justify-center gap-8 py-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl font-bold Helv text-white">SIGN IN</h1>
          <p className="text-lg tracking-wide text-primaryYellow font-Poppins">
            Not a member?{" "}
            <a href="signup" className="underline">
              Sign Up
            </a>
          </p>
        </div>
        <form className="flex flex-col gap-6 w-2/3" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <Input
              isRequired={true}
              type="text"
              label="First Name"
              labelPlacement="inside"
              size="sm"
              color="primary"
              variant="bordered"
              classNames={{
                label: "after:content-['] text-white",
                input: "text-white",
                inputWrapper: ["border-2", "hover:border-darkYellow"],
              }}
              value={data.fname}
              name="fname"
              onChange={handleInputChange}
            />
            <Input
              isRequired
              type="text"
              label="Last Name"
              labelPlacement="inside"
              size="sm"
              color="primary"
              variant="bordered"
              classNames={{
                label: "after:content-['] text-white",
                input: "text-white",
                inputWrapper: ["border-2", "hover:border-darkYellow"],
              }}
              value={data.lname}
              name="lname"
              onChange={handleInputChange}
            />
          </div>
          <Input
            isRequired
            type="email"
            label="Email"
            labelPlacement="inside"
            size="sm"
            color="primary"
            variant="bordered"
            classNames={{
              label: "after:content-['] text-white",
              input: "text-white",
              inputWrapper: ["border-2", "hover:border-darkYellow"],
            }}
            isInvalid={isInvalidEmail}
            errorMessage={isInvalidEmail && "Please enter a valid email"}
            value={data.email}
            name="email"
            onChange={handleInputChange}
          />

          <Input
            isRequired
            type={isVisiblePass ? "text" : "password"}
            label="Password"
            labelPlacement="inside"
            size="sm"
            color="primary"
            variant="bordered"
            classNames={{
              label: "after:content-['] text-white",
              input: "text-white",
              inputWrapper: ["border-2", "hover:border-darkYellow"],
            }}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsVisiblePass(!isVisiblePass)}
              >
                {isVisiblePass ? (
                  <img
                    src="/eye-slash.svg"
                    className="text-2xl text-default-400 pointer-events-none mb-1"
                  />
                ) : (
                  <img
                    src="/eye.svg"
                    className="text-2xl text-default-400 pointer-events-none mb-1"
                  />
                )}
              </button>
            }
            value={data.password}
            name="password"
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            color="warning"
            className="submitbtn text-lg"
            radius="lg"
            variant="solid"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
