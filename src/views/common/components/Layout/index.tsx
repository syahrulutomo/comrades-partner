import React, { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";
import { Breadcrumb } from "antd";
import type { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { ConfigProvider } from "antd";
import idID from "antd/locale/id_ID";
import "dayjs/locale/id";
import { appTheme, componentsConfig } from "@/views/common/config/antd";

import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

interface DashboardLayoutProps extends PropsWithChildren {
  breadcrumbs: ItemType[];
}

const DashboardLayout = ({
  breadcrumbs,
  children,
}: DashboardLayoutProps) => {
  return (
    <ConfigProvider
      theme={appTheme}
      getTargetContainer={() => {
        return document.getElementById("root-layout") ?? document.body;
      }}
      locale={idID}
      {...componentsConfig}
    >
      <div className={clsx("flex w-full h-screen", inter.className)}>
        <Sidebar />
        <div className="w-[calc(100%-235px)] overflow-auto px-6 pt-8 pb-6 bg-neutral-50">
          <Breadcrumb items={breadcrumbs} />
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default DashboardLayout;
