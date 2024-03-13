'use client';

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button.js';
import FormField from '@/components/FormField';

export default function ContactForm({ contactElement }) {
  // const [searchParams] = useSearchParams();
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // useEffect(() => {
  //   console.log(searchParams);
  //   if (searchParams.get('submitted')) {
  //     setShowSuccessMessage(true);
  //   }
  // }, [searchParams]);

  return (
    <form
      className="form"
      action="https://usebasin.com/f/56024030b3c4"
      method="POST"
      ref={contactElement}
    >
      {/* {showSuccessMessage && (
        <p>Thank you for submitting the form. We will get back to you soon!</p>
      )} */}
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
