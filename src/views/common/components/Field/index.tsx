import React from "react";
import { Flex, Typography } from "antd";
import { PropsWithChildren } from "react";
import { tokenGuidelines } from "../../config/antd";
import clsx from "clsx";

interface FieldProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  required?: boolean;
  customStyles?: string;
  error?: string;
  isLoading?: boolean;
}

const Field = ({
  title,
  subtitle,
  required,
  children,
  customStyles,
  error,
}: FieldProps) => {
  return (
    <Flex vertical className={clsx('w-full',customStyles)}>
      <Typography.Title level={5} style={{ marginTop: "0" }}>
        {title}{" "}
        {required && <span style={{ color: tokenGuidelines.R500 }}>*</span>}
      </Typography.Title>
      {subtitle && (
        <Typography.Text style={{ marginBottom: "8px" }}>
          {subtitle}
        </Typography.Text>
      )}
      {children}
      {error && (
        <Typography.Text type="danger" style={{ marginTop: "8px" }}>
          {error}
        </Typography.Text>
      )}
    </Flex>
  );
};

export default Field;
