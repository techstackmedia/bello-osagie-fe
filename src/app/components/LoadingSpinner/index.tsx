import React from 'react';
import Image from 'next/image';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <Image src="/spinner.svg" alt="Loading..." width={50} height={50} />
        </div>
    );
};

export default LoadingSpinner;
