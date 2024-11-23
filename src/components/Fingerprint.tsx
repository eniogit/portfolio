'use client';

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { useEffect } from 'react';

import { add } from '@/utils/counter';

export function Fingerprint() {
  useEffect(() => {
    const fpPromise = FingerprintJS.load();
    fpPromise
      .then((fp) => fp.get())
      .then((result) => {
        add(result.visitorId);
      });
  }, []);
  return '';
}
