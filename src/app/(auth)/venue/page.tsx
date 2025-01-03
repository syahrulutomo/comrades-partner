"use client";

import React from "react";
import DashboardLayout from "@/views/common/components/Layout";
import { Flex, Button, Table, Switch, Image } from "antd";
import dayjs from "dayjs";
import { Add } from "iconsax-react";
import { useRouter } from "next/navigation";

const VenuePage = () => {
  const router = useRouter();
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      facilities: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      termconditions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
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
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      facilities: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      termconditions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tanggal dibuat",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Nama venue",
      dataIndex: "venue_name",
      key: "venue_name",
    },
    {
      title: "Is Active",
      dataIndex: "is_active",
      key: "is_active",
      render: (value: boolean) => {
        return <Switch size="small" defaultChecked={value} />;
      },
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
      title: "Harga",
      dataIndex: "venue_price",
      key: "venue_price",
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
      key: "description",
      render: (value: string) => <div className="max-w-[400px] truncate">{value}</div>
    },
    {
      title: "Fasilitas",
      dataIndex: "facilities",
      key: "facilities",
      render: (value: string) => <div className="max-w-[400px] truncate">{value}</div>
    },
    {
      title: "TnC",
      dataIndex: "termconditions",
      key: "termconditions",
      render: (value: string) => <div className="max-w-[400px] truncate">{value}</div>
    },
  ];

  return (
    <DashboardLayout
      breadcrumbs={[{ title: "Dashboard", separator: "/" }, { title: "Venue" }]}
    >
      <Flex className="w-full justify-between">
        <p className="font-semibold text-xl mt-2">Venue Page</p>
        <Button
          type="primary"
          size="small"
          onClick={() => router.push("/venue/add")}
        >
          <Add size={16} color="#FFF" /> Tambah Data
        </Button>
      </Flex>
      <Table
        dataSource={dataSource}
        columns={columns}
        size="middle"
        className="mt-10"
        scroll={{ x: "max-content" }}
      />
    </DashboardLayout>
  );
};

export default VenuePage;
