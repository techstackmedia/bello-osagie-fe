import Image from 'next/image';
import { FC } from 'react';

const FilterButton: FC = () => {
  return (
    <button className="flex gap-4 items-center px-4 py-2 border rounded-lg text-gray-700 bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
      <Image src='/filter.png' width={14} height={14} alt='filter icon' className='w-[14px] h-[14px]' />
      <span>Filter</span>
    </button>
  );
};

export default FilterButton;
