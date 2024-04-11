import { useState, useMemo } from "react";
import { Input, Button } from "@nextui-org/react";

export const SignUp = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleCPass, setIsVisibleCPass] = useState(false);

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (data.email === "") return false;
    return validateEmail(data.email) ? false : true;
  }, [data.email]);

  const validatePhone = (value) => /^([- ]?)?[789]\d{9}/.test(value);
  const isInvalidPhone = useMemo(() => {
    if (data.phone === "") return false;
    return validatePhone(data.phone) ? false : true;
  }, [data.phone]);

  const validateCPass = () => data.password == data.cpassword;
  const isInvalidCPass = useMemo(() => {
    return validateCPass(data.cpassword) ? false : true;
  }, [data.cpassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fname", data.fname);
    formData.append("lname", data.lname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);

    try {
      await fetch("http://localhost:8080/api/user/signup", {
        method: "POST",
        body: formData,
      });

      window.location.href = "/signin";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-1/2 hidden md:flex">
        <img src="/poster.jpg" alt="" className="h-full w-full" />
      </div>
      <div className="w-full md:w-1/2 bg-darkGrey  lg:p-10 flex flex-col items-center justify-center gap-8 py-5">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl font-bold Helv text-white">SIGN UP</h1>
          <p className="text-lg tracking-wide text-primaryYellow font-Poppins">
            Already a member?{" "}
            <a href="signin" className="underline">
              Login
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
            type="tel"
            maxLength="10"
            minLength="10"
            label="Phone No."
            labelPlacement="inside"
            size="sm"
            color="primary"
            variant="bordered"
            classNames={{
              label: "after:content-['] text-white",
              input: "text-white",
              inputWrapper: ["border-2", "hover:border-darkYellow"],
            }}
            isInvalid={isInvalidPhone}
            errorMessage={isInvalidPhone && "Please enter a valid Phone No."}
            value={data.phone}
            name="phone"
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
          <Input
            isRequired
            type={isVisibleCPass ? "text" : "password"}
            label="Confirm Password"
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
                onClick={() => setIsVisibleCPass(!isVisibleCPass)}
              >
                {isVisibleCPass ? (
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
            isInvalid={isInvalidCPass}
            errorMessage={isInvalidCPass && "Passwords dont match"}
            value={data.cpassword}
            name="cpassword"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            color="warning"
            className="submitbtn text-lg"
            radius="lg"
            variant="solid"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};
