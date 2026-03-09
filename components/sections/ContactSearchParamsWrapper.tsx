'use client';

import { useSearchParams } from 'next/navigation';
import Contact from './Contact';

export default function ContactSearchParamsWrapper() {
  const searchParams = useSearchParams();

  return <Contact searchParams={searchParams} />;
}
