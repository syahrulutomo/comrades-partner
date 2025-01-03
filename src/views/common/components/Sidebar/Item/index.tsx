import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Flex } from "antd";

interface SidebarItemProps {
  label: string;
  // eslint-disable-next-line
  Icon: any;
  link: string;
  isActive?: boolean;
  child?: SidebarItemProps[];
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SidebarItem = ({
  label,
  link,
  Icon,
  child,
  onClick,
}: SidebarItemProps) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={link}
        className={clsx(
          "flex p-4 gap-4 items-center mb-4 cursor-pointer",
          pathname === link &&
            "rounded-xl bg-white  text-neutral-800 font-bold"
        )}
        onClick={onClick}
        suppressHydrationWarning
      >
        <Icon
          size={20}
          color={pathname === link ? "#262626" : "#FFF"}
          variant="Bold"
          suppressHydrationWarning
        />
        <span>{label}</span>
      </Link>
      {child && (
        <Flex vertical>
          {child.map((item, index) => (
            <Link
              className={clsx(
                "flex p-4 gap-4 items-center mb-4 cursor-pointer",
                pathname === item.link && child &&
                  "rounded-xl bg-white  text-neutral-800 font-bold"
              )}
              href={item.link}
              key={index}
            >
              <span className={clsx("pl-6", pathname === item.link ? 'text-neutral-800': 'text-white')}>{item.label}</span>
            </Link>
          ))}
        </Flex>
      )}
    </>
  );
};

export default SidebarItem;
