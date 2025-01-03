"use client";

import Field from "@/views/common/components/Field";
import Link from "next/link";
import { Flex, Image, Typography, Form, Input, Button, Spin } from "antd";
import clsx from "clsx";

import { Alfa_Slab_One } from "next/font/google";
import { useState, useEffect } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [mount, setMount] = useState(false);

  const handleSubmit = () => {
    setCookie(null, "token", String(Math.random()), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    router.push("/dashboard");
  };

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <Spin fullscreen />;

  return (
    <Flex>
      <Flex className="w-1/2 min-h-screen relative">
        <Image
          preview={false}
          className="!h-full object-cover object-center"
          src="https://res.cloudinary.com/dyav0ifqg/image/upload/v1735287232/daniel-chekalov-rRVGpLI5ceo-unsplash.jpg"
          alt="login image"
        />
        <Typography.Text className="absolute bottom-6 left-1/2 -translate-x-1/2">
          Photo by{" "}
          <a href="https://unsplash.com/@dchuck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Daniel Chekalov
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/guitar-amplifier-near-drum-instrument-rRVGpLI5ceo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </Typography.Text>
      </Flex>
      <Flex
        className="px-10 pt-10 w-1/2"
        vertical
        justify="center"
        align="center"
      >
        <Typography.Text
          className={clsx(
            alfa.className,
            "text-[32px] text-center font-semibold mt-8 mb-8 text-neutral-900"
          )}
        >
          Cirkel
        </Typography.Text>
        <Form
          form={form}
          autoComplete="off"
          className="w-[80%]"
          onFinish={handleSubmit}
        >
          <Field title="Email" required>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Email is mandatory" }, { type: 'email', message: "Email is not valid" }]}
            >
              <Input
                placeholder="ex johndoe@mail.com"
                className="!w-full"
                size="large"
              />
            </Form.Item>
          </Field>
          <Field title="Password" required>
            <Form.Item name="password"   rules={[{ required: true, message: "Password is mandatory"}, { min: 8, message: 'Password must be at least 8 character' }]}>
              <Input placeholder="Your password" size="large" />
            </Form.Item>
          </Field>
          <Button
            htmlType="submit"
            className="mt-8 !bg-primary-30 !hover:opacity-50"
            type="primary"
            color="primary"
            block
            size="large"
          >
            Login
          </Button>
          <Flex className="mt-2" justify="center">
            <Typography.Text>
              Does not have account?{" "}
              <Link className="!text-primary-30" href="/register">
                Register here
              </Link>{" "}
            </Typography.Text>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
