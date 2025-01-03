'use client'

import DashboardLayout from '@/views/common/components/Layout'
import { Button, Flex, Tag } from 'antd'
import { Refresh } from 'iconsax-react'
import React, { useEffect } from 'react'
import {Table} from 'antd'
import dayjs from 'dayjs'
import Link from 'next/link'
import { BarChart } from '@/views/common/components/BarChart/BarChart'
import {parseCookies} from 'nookies'
import { useRouter } from 'next/navigation'

const DashboardPage = () => {
  const router = useRouter()

  const dataSource = [
    {
      key: '1',
      created_at: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
      status: 'DONE',
      transaction_id: '9a132512-4ae2-f445-2738-4deb5b45deab',
      venue_name: 'Studio Akasia B Medium',
      venue_type: 'Reguler', 
      user_name: 'Rando Muhammad',
      payment_method: 'QRIS',
      venue_price: 'Rp 1.500.000',
      total_payment: 'RP 1.507.500'
    },
    {
      key: '2',
      created_at: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
      status: 'FAILED',
      transaction_id: '8723bmb-4ae2-f445-2738-3252323532535',
      venue_name: 'Studio Akasia A Luxury',
      venue_type: 'Exclusive',
      user_name: 'Rap Your Bae',
      payment_method: 'QRIS',
      venue_price: 'Rp 2.000.000',
      total_payment: 'RP 2.064.000'
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
      title: 'Total pembayaran',
      dataIndex: 'total_payment',
      key: 'total_payment',
    },
  ];

  useEffect(() => {
    const {token} = parseCookies()
    if (!token) router.push('/login')
  }, [])
  
  return (
    <DashboardLayout breadcrumbs={[{ title: 'Dashboard', separator: '/' }]}>
      <Flex className='w-full justify-between'>
         <p className="font-semibold text-xl mt-2">Dashboard</p>
        <Button type='primary' size='small'><Refresh size={16} color='#FFF'  /> Refresh</Button>
      </Flex>
      <Flex className='mt-6' gap={16}>
        <div className='border-neutral-100 bg-white shadow-sm border-[1px] rounded-xl p-4 w-1/3'>
          <Flex vertical>
            <p className='text'>Transaksi berhasil</p>
            <p className='text-2xl font-bold mt-2'>0</p>
            <p className='mt-2 text-neutral-500'>Rp 0</p>
          </Flex>
        </div>
        <div className='border-neutral-100 bg-white shadow-sm border-[1px] rounded-xl p-4 w-1/3'>
          <Flex vertical>
            <p className='text'>Transaksi gagal</p>
            <p className='text-2xl font-bold mt-2'>0</p>
            <p className='mt-2 text-neutral-500'>Rp 0</p>
          </Flex>
        </div>
        <div className='border-neutral-100 bg-white shadow-sm border-[1px] rounded-xl p-4 w-1/3'>
          <Flex vertical>
            <p className='text'>Transaksi diproses</p>
            <p className='text-2xl font-bold mt-2'>0</p>
            <p className='mt-2 text-neutral-500'>Rp 0</p>
          </Flex>
        </div>
      </Flex>

        <BarChart title="Transaction Overview" chartData={[
          {field: "30 December", value: "8000000"},
          {field: "31 December", value: "750000"},
          {field: "01 December", value: "100000000"},
          {field: "02 December", value: "60000000"},
          {field: "03 December", value: "32000000"},
          {field: "04 December", value: "54000000"},
          {field: "05 December", value: "48000000"},
          {field: "06 December", value: "7100000"},
          {field: "07 December", value: "160000000"},
          {field: "08 December", value: "5000000"},
          {field: "09 December", value: "5000000"},
          {field: "10 December", value: "50000000"},
          {field: "11 December", value: "6700000"},
          {field: "12 December", value: "5006000"},
        ]} />

      <Flex justify='between' className='mt-10 mb-4 justify-between'>
        <p className='font-semibold'>10 transaksi terakhir</p>
        <Link href='/transaction' className='text-primary-30'>Lihat semua</Link>
      </Flex>
      <Table dataSource={dataSource} columns={columns} size="middle"  />
    </DashboardLayout>
  )
}

export default DashboardPage