import React from 'react';

const HeaderCom = () => {
  return (
    <header className="flex h-[120px] w-full items-center bg-black px-10">
      {/* 로고 */}
      <div className="text-point-yellow text-4xl font-bold tracking-wider">KKKK</div>

      {/* 네비게이션 */}
      <nav className="text-neutral-cream font-pretendard ml-auto flex gap-8 font-medium">
        <a href="#" className="hover:text-point-lime transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-point-lime transition-colors">
          Project
        </a>
        <a href="#" className="hover:text-point-lime transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default HeaderCom;
