import AccessesApi from '@api/accesses';
import { useEffect } from 'react';

export default function useHitAccess(): void {
  useEffect(() => {
    AccessesApi.hit();
  }, []);
}
