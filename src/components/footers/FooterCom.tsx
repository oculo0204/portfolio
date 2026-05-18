import { useLanguage } from '../../contexts/LanguageContext';

const FooterCom = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E5E5E5] bg-white px-[80px]">
      <div className="mx-auto flex h-[222px] max-w-[1920px] items-center justify-between">
        {/* 왼쪽: 이름 및 저작권 정보 */}
        <div className="flex flex-col gap-2">
          {/* SEOWON CHANG: 32px, Medium, #111 */}
          <h2 className="font-sans text-[32px] font-medium tracking-tight text-[#111] uppercase">{t.header.name}</h2>

          {/* Reserved: 20px, Regular, rgba(0,0,0,0.4) */}
          <p className="font-sans text-[20px] font-normal text-black/40">
            © {currentYear} {t.header.name}. All rights reserved.
          </p>
        </div>

        {/* 오른쪽: 슬로건 (Job Title) */}
        <div className="flex items-center">
          {/* Problem Solving Developer: 26px, Medium, rgba(47,111,94,0.6) */}
          <p className="font-sans text-[26px] font-medium text-[rgba(47,111,94,0.60)]">{t.aboutme.job}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
