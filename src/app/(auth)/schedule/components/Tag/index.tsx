import React, { PropsWithChildren } from 'react'
import { Tag } from 'antd'
import clsx from 'clsx'

interface CustomTagProps extends PropsWithChildren{
  selected: boolean
  onClick: () => void
}

const CustomTag = ({children, selected, onClick}: CustomTagProps) => {
  return (
    <Tag className={clsx("!px-4 !py-2 !text-lg  !flex !justify-center cursor-pointer", selected ? '!bg-blue-200 !text-white' : '!bg-neutral-200')} onClick={onClick}>{children}</Tag>
  )
}

export default CustomTag