'use client';

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import FormField from '@/components/FormField';

const BASIN_TEST_FORM_ID = '56024030b3c4';
const BASIN_LIVE_FORM_ID = '348457fd5b4c';
const formId =
  process.env.NODE_ENV === 'development'
    ? BASIN_TEST_FORM_ID
    : BASIN_LIVE_FORM_ID;

export default function ContactForm() {
  return (
    <form
      className="form"
      action={`https://usebasin.com/f/${formId}`}
      method="POST"
    >
      <FormField label="Name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Organization" name="organization" />
      <FormField label="Phone" name="phone" />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        placeholder="Anything you'd like to share"
      />
      <Button type="submit" text="Submit" />
    </form>
  );
}
