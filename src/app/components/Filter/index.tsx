import Image from 'next/image';
import { FC } from 'react';

const FilterButton: FC = () => {
  return (
    <button className="flex gap-4 items-center px-4 py-2 border rounded-lg text-gray-700 bg-white shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
      <Image src='/filter.svg' width={24} height={24} alt='filter icon' className='w-6 h-6' />
      <span className='font-semibold'>Filter</span>
    </button>
  );
};

export default FilterButton;
