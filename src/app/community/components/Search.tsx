'use client';

import SearchIcon from '@mui/icons-material/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) params.set('search', term);
    else params.delete('search');
    params.delete('page');
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='relative ml-auto flex flex-shrink-0'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        className='peer block w-full rounded-full border border-gray-300 py-[9px] pl-10 text-sm text-gray-900 outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onKeyDown={e =>
          e.key === 'Enter' && handleSearch(e.currentTarget.value)
        }
        defaultValue={searchParams.get('search')?.toString()}
      />
      <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-gray-600' />
    </div>
  );
}
