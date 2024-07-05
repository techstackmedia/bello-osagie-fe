import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="bg-white border-b ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/logo.svg" className='h-[40px]' alt="Logo" width={40} height={40} />
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <div className="flex space-x-4 relative">
                <Image src="/search.svg" alt='search bar icon' width={20} height={20} className='absolute left-8 top-5' />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="bg-gray-100 h-[40px] mt-3 border border-gray-300 rounded-md py-2 px-12 w-[500px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center">
              <Image src="/alert.svg" alt='alart' width={24} height={24} />
              <span>Notifications</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center">
            <Image src="/wallet.svg" alt='alart' width={24} height={24} />
            <span>Wallet</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center">
            <Image src="/question.svg" alt='question' width={24} height={24} />
            <span>Inquiries</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 flex flex-col items-center">
            <Image src="/setting.svg" alt='question' width={24} height={24} />
            <span>Settings</span>
            </button>
            <img className="h-8 w-8 rounded-full" src="/profile.png" alt="User" />
            <Image src="/dropdown.svg" alt='question' width={24} height={24}  className='w-[24px] h-[24px]' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
