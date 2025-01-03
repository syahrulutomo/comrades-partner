'use client'

import React from "react";
import { Flex, Button, Table, Tag } from "antd";
import dayjs from "dayjs";
import { Refresh, Check, StopCircle  } from "iconsax-react";
import DashboardLayout from "@/views/common/components/Layout";

const TransactionPage = () => {
  const dataSource = [
      {
        key: '1',
        created_at: dayjs('2024-12-09').format('YYYY-MM-DDTHH:mm:ss'),
        status: 'DONE',
        transaction_id: '9a132512-4ae2-f445-2738-4deb5b45deab',
        venue_name: 'Studio Akasia B Medium',
        venue_type: 'Reguler', 
        user_name: 'Rando Muhammad',
        payment_method: 'QRIS',
        venue_price: 'Rp 1.500.000',
        total_payment: 'RP 1.507.500',
        action: ''
      },
      {
        key: '2',
        created_at: dayjs('2024-12-09').format('YYYY-MM-DDTHH:mm:ss'),
        status: 'DONE',
        transaction_id: '8723bmb-4ae2-f445-2738-3252323532535',
        venue_name: 'Studio Akasia A Luxury',
        venue_type: 'Exclusive',
        user_name: 'Rap Your Bae',
        payment_method: 'QRIS',
          venue_price: 'Rp 2.000.000',
        total_payment: 'RP 2.064.000',
        action: ''
      },
    ];
    
    const columns = [
      {
        title: 'No',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: 'Tanggal dibuat',
        dataIndex: 'created_at',
        key: 'created_at',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (value: string) => {
          console.log(value)
          if (value === 'DONE') return <Tag className='!py-1 !px-2 !text-sm' color="success">{value}</Tag>
          else if (value === 'FAILED') return <Tag className='!py-1 !px-2 !text-sm' color="error">{value}</Tag>
        }
      },
      {
        title: 'ID Transaksi',
        dataIndex: 'transaction_id',
        key: 'transaction_id',
      },
      {
        title: 'Nama venue',
        dataIndex: 'venue_name',
        key: 'venue_name',
      },
      {
        title: 'Tipe venue',
        dataIndex: 'venue_type',
        key: 'venue_type',
      },
      {
        title: 'Nama Pengguna',
        dataIndex: 'user_name',
        key: 'user_name',
      },
      {
        title: 'Metode pembayaran',
        dataIndex: 'payment_method',
        key: 'venue_id',
      },
      {
        title: 'Harga',
        dataIndex: 'venue_price',
        key: 'venue_price',
      },
      {
        title: 'Total pembayaran',
        dataIndex: 'total_payment',
        key: 'total_payment',
      },
      {
        tile: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
          <Flex gap={8} >
            <Button className="!bg-green-500 border-none !px-4" size="small"><Check color='#FFF' size={16}/></Button>
            <Button className="!bg-red-600 border-none !px-4" size="small"><StopCircle color='#FFF' size={16} /></Button>
          </Flex>
        )
      }
    ];

  return (
    <DashboardLayout breadcrumbs={[{ title: 'Dashboard', separator: '/' }, { title: 'Transaction' },]}>
      <Flex className='w-full justify-between'>
         <p className="font-semibold text-xl mt-2">Transaction Page</p>
        <Button type='primary' size='small'><Refresh size={16} color='#FFF'  /> Refresh</Button>
      </Flex>
      <Table dataSource={dataSource} columns={columns} size='middle' className="mt-10" scroll={{ x: 'max-content' }}  />
    </DashboardLayout>
  );
};

export default TransactionPage;
