"use client";

import { Button, Divider, Form, Input, Layout, Select } from "antd";
import { VenueSchema } from "./schema";
import DashboardLayout from "@/views/common/components/Layout";
import Field from "@/views/common/components/Field";
import WYSIWYGEditor from "@/views/common/components/Wyiswyg";
import CustomUpload from "@/views/common/components/Upload";

const { Content } = Layout;

const AddVenuePage = () => {
  const [form] = Form.useForm<VenueSchema>();

  const venueTypes = [
    { label: "Recording studio", value: "recording" },
    { label: "Band studio", value: "band" },
  ];

  const handleSubmit = () => {
    console.log('is submit')
  };

  return (
    <DashboardLayout
      breadcrumbs={[
        { title: "Dashboard", separator: "/" },
        { title: "Venue", separator: "/" },
        { title: "Add venue" },
      ]}
    >
      <p className="font-semibold text-xl mt-2 mb-10">Add Venue</p>
      <Content className="w-full p-10 bg-white shadow-sm rounded-xl">
        <Form
          form={form}
          autoComplete="off"
          onFinish={handleSubmit}
          className="max-w-[1400px] relative "
        >
          <Field title="Name" required>
            <Form.Item<VenueSchema> name="venue_name">
              <Input placeholder="Nama venue" />
            </Form.Item>
          </Field>
          <Field title="Type" required>
            <Form.Item<VenueSchema> name="type">
              <Select placeholder="Pilih jenis studio" options={venueTypes} />
            </Form.Item>
          </Field>
          {/* <Field title="Location (opsional)">
            <Form.Item<VenueSchema> name="location">
              <TextArea placeholder="Location" />
            </Form.Item>
          </Field>
          <Field title="Coordinate (opsional)">
            <Flex gap={16} className="w-full">
              <Form.Item<VenueSchema> name="latitude" className="w-1/2">
                <Input placeholder="Latitude" />
              </Form.Item>
              <Form.Item<VenueSchema> name="longitude" className="w-1/2">
                <Input placeholder="Longitude" />
              </Form.Item>
            </Flex>
          </Field> */}
          <Field title="Description (opsional)">
            <Form.Item<VenueSchema> name="description">
              <WYSIWYGEditor />
            </Form.Item>
          </Field>
          <Field title="Facilities">
            <Form.Item<VenueSchema> name="facilities">
              <WYSIWYGEditor />
            </Form.Item>
          </Field>
          <Field title="Terms & Conditions">
            <Form.Item<VenueSchema>>
              <WYSIWYGEditor />
            </Form.Item>
          </Field>
          <Field title="Images">
            <Form.Item<VenueSchema>>
              <CustomUpload />
            </Form.Item>
          </Field>
          <Divider className="my-4" />
          <Button block color="primary" size="middle" type="primary">Save</Button>
        </Form>
      </Content>
    </DashboardLayout>
  );
};

export default AddVenuePage;
