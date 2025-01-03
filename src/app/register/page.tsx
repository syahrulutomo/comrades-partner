"use client";

import Field from "@/views/common/components/Field";
import Link from "next/link";
import { Flex, Image, Typography, Form, Input, Button, Checkbox, Spin } from "antd";
import clsx from "clsx";
import { useState, useEffect } from "react";

import { Alfa_Slab_One } from "next/font/google";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

const RegisterPage = () => {
  const [form] = Form.useForm()
  const [mount, setMount] = useState(false)
  
  useEffect(() => {
    setMount(true)
  }, [])
  
  if (!mount) return <Spin fullscreen />

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
          Photo by <a href="https://unsplash.com/@dchuck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Daniel Chekalov</a> on <a href="https://unsplash.com/photos/guitar-amplifier-near-drum-instrument-rRVGpLI5ceo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </Typography.Text>
      </Flex>
      <Flex className="px-10 pt-10 w-1/2 bg-white" vertical justify="center" align="center">
        <Typography.Text
          className={clsx(
            alfa.className,
            "text-[32px] text-center font-semibold mt-8 mb-8 text-neutral-900"
          )}
        >
          Cirkel
        </Typography.Text>
        <Form form={form} autoComplete="off" className="w-[80%]">
          <Field title="Email" required>
            <Form.Item name="email">
              <Input placeholder="ex johndoe@mail.com" className="!w-full" size="large" />
            </Form.Item>
          </Field>
          <Field title="Password" required>
            <Form.Item name="password" >
              <Input placeholder="Your password" size="large" />
            </Form.Item>
          </Field>
          <Field title="Name" required>
            <Form.Item name="studio_name" >
              <Input placeholder="Your studio name" size="large" />
            </Form.Item>
          </Field>
          <Field title="Location" required>
            <Form.Item name="studio_location" >
              <Input.TextArea placeholder="Your studio location" size="large" />
            </Form.Item>
          </Field>
          <Field title="">
            <Flex gap={16}>
              <Form.Item className="w-1/2" name="latitude" >
                <Input className="w-full" placeholder="Latitude" size="large" />
              </Form.Item>
              <Form.Item className="w-1/2" name="longitude" >
                <Input className="w-full" placeholder="Longitude" size="large" />
              </Form.Item>
            </Flex>

          </Field>
          <Flex gap={8}>
            <Checkbox className="text-primary-30" />
            <Typography.Text>By this, you agree with our TnC dan Privacy Policy</Typography.Text>
          </Flex>
          <Button className="mt-8 !bg-primary-30 !hover:opacity-50" type="primary" color="primary" block size="large">Register</Button>
          <Flex className="mt-2" justify="center">
            <Typography.Text>Already have account? <Link className="!text-primary-30" href="/login">Login here</Link>  </Typography.Text>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
