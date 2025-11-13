"use client";
//import node modules libraries
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

//import custom components
import { Button } from "../ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface FormValues {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is required"),
});

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data, "Submit Handler data");
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="md:max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">User Login</CardTitle>
          <CardDescription className="text-sm">
            Welcome back! Please log in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submitHandler)}>
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="emailId">Email ID</FieldLabel>
                    <Input
                      id="emailId"
                      placeholder="Email ID"
                      {...register("email")}
                    />
                    {errors.email && (
                      <FieldDescription className="text-xs text-rose-500">
                        {errors.email.message}
                      </FieldDescription>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <FieldDescription className="text-xs text-rose-500">
                        {errors.password.message}
                      </FieldDescription>
                    )}
                  </Field>
                </FieldGroup>
              </FieldSet>

              <Field orientation="horizontal">
                <Button type="submit" className="w-full rounded" size={"lg"}>
                  Log In
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInForm;
