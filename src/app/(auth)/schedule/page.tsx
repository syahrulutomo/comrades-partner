"use client";

import { Flex, Modal, Button, Table, Image } from "antd";
import DashboardLayout from "@/views/common/components/Layout";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import Tag from "./components/Tag";

const dataSource = [
  {
    key: "1",
    created_at: dayjs("2024-12-09").format("YYYY-MM-DDTHH:mm:ss"),
    is_active: true,
    transaction_id: "9a132512-4ae2-f445-2738-4deb5b45deab",
    venue_name: "Studio Akasia B Medium",
    user_name: "Rando Muhammad",
    payment_method: "QRIS",
    venue_price: "Rp 1.500.000",
    total_payment: "RP 1.507.500",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    facilities:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    termconditions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    key: "2",
    created_at: dayjs("2024-12-09").format("YYYY-MM-DDTHH:mm:ss"),
    is_active: false,
    transaction_id: "8723bmb-4ae2-f445-2738-3252323532535",
    venue_name: "Studio Akasia A Luxury",
    user_name: "Rap Your Bae",
    payment_method: "QRIS",
    venue_price: "Rp 2.000.000",
    total_payment: "RP 2.064.000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    facilities:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    termconditions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
];

const FIRST_ROUTINES = [
  "00.00",
  "01.00",
  "02.00",
  "03.00",
  "04.00",
  "06.00",
  "07.00",
  "08.00",
  "09.00",
  "10.00",
  "11.00",
  "12.00",
];
const SECOND_ROUTINES = [
  "13.00",
  "14.00",
  "15.00",
  "16.00",
  "17.00",
  "18.00",
  "19.00",
  "20.00",
  "21.00",
  "22.00",
  "23.00",
  "24.00",
];

const Schedule = () => {
  const [openRoutine, setOpenRoutine] = useState(false);
  const [loadingRoutine, setLoadingRoutine] = useState(false);
  const [routines, setRoutines] = useState<string[]>([]);
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Nama venue",
      dataIndex: "venue_name",
      key: "venue_name",
    },
    {
      title: "Photo",
      dataIndex: "image",
      key: "image",
      render: () => (
        <Image
          width={100}
          height={70}
          preview
          className="rounded-lg"
          src="https://res.cloudinary.com/dyav0ifqg/image/upload/v1730188614/DALL_E_2024-10-27_16.24.52_-_A_realistic_image_of_a_cozy_professional_music_studio_setup_with_high-quality_instruments_including_a_drum_set_electric_guitars_keyboard_and_micro.png"
          alt=""
        />
      ),
    },
    {
      title: "Action",
      dataIndex: "image",
      key: "image",
      render: () => (
        <Flex gap={12}>
          <Button
            type="primary"
            size="small"
            className="!bg-blue-500 !text-sm !hover:text-white"
            onClick={() => setOpenRoutine(true)}
          >
            Routine
          </Button>
          <Button
            type="primary"
            size="small"
            className="!bg-orange-600 !text-sm !hover:text-white"
          >
            Custom
          </Button>
        </Flex>
      ),
    },
  ];

  const handleAddRoutine = (item: string) => {
    if (routines.indexOf(item) > -1) {
      const arr = routines.filter((x) => x !== item);
      setRoutines(arr);
    } else {
      setRoutines([...routines, item]);
    }
  };

  const handleSubmitRoutine = () => {
    setLoadingRoutine(true)
    setTimeout(() => {
      setLoadingRoutine(false)
      setOpenRoutine(false)
      setRoutines([])
    }, 3000)

  }

  const renderRoutines = useMemo(() => {
    return (
      <Flex gap={8}>
        <Flex vertical wrap gap={16} className="w-1/2">
          {FIRST_ROUTINES.map((item) => (
            <Tag
              key={item}
              selected={routines.filter((x) => x === item).length > 0}
              onClick={() => handleAddRoutine(item)}
            >
              {item}
            </Tag>
          ))}
        </Flex>
        <Flex vertical wrap gap={16} className="w-1/2">
          {SECOND_ROUTINES.map((item) => (
            <Tag
              key={item}
              selected={routines.filter((x) => x === item).length > 0}
              onClick={() => handleAddRoutine(item)}
            >
              {item}
            </Tag>
          ))}
        </Flex>
      </Flex>
    );
  }, [routines]);


  return (
    <DashboardLayout
      breadcrumbs={[
        { title: "Dashboard", separator: "/" },
        { title: "Venue", separator: "/" },
        { title: "Schedule" },
      ]}
    >
      <Flex className="w-full justify-between">
        <p className="font-semibold text-xl mt-2">Schedule Page</p>
      </Flex>
      <Table
        dataSource={dataSource}
        columns={columns}
        size="middle"
        className="mt-10"
        scroll={{ x: "max-content" }}
      />
      <Modal
        title="Routine Schedule"
        open={openRoutine}
        onCancel={() => setOpenRoutine(false)}
        confirmLoading={loadingRoutine}
        onOk={handleSubmitRoutine}
        className="min-w-[700px]"
      >{renderRoutines}</Modal>
    </DashboardLayout>
  );
};

export default Schedule;
