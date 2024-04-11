import { useState, useMemo } from "react";
import { Input, Button } from "@nextui-org/react";

export const SignIn = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const [data, setData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const res = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Failed to login");
      }
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data));

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
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
