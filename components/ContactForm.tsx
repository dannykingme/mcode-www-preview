'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import FormField from '@/components/FormField';
import React from 'react';

const BASIN_TEST_FORM_ID = '56024030b3c4';
const BASIN_LIVE_FORM_ID = '348457fd5b4c';
const formId =
  process.env.NODE_ENV === 'development'
    ? BASIN_TEST_FORM_ID
    : BASIN_LIVE_FORM_ID;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      className="form"
      action={`https://usebasin.com/f/${formId}`}
      method="POST"
    >
      <FormField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormField
        label="Organization"
        name="organization"
        value={formData.organization}
        onChange={handleChange}
      />
      <FormField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        placeholder="Anything you'd like to share"
      />
      <Button type="submit" text="Submit" />
    </form>
  );
}
