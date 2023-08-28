import React from 'react';

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className='text-white hover:text-gray-300 cursor-pointer transition'>
      {label}
    </div>
  )
}

export default NavbarItem;