'use client';

import SearchIcon from '@mui/icons-material/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) params.set('search', term);
      else params.delete('search');
      params.delete('page');
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    // 1. Clear search input value when navigating to a different page
    // 2. Populate search input value from URL search param on page first load
    if (inputRef.current) {
      inputRef.current.value = searchParams.get('search')?.toString() || '';
    }
  }, [pathname]);

  return (
    <div className='relative ml-auto flex flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        ref={inputRef}
        className='peer block w-full rounded-full border border-gray-300 py-[9px] pl-10 text-sm text-gray-900 outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSearch(e.currentTarget.value);
          }
        }}
      />
      <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-gray-600' />
    </div>
  );
}
