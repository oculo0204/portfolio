import { useLanguage } from '../../contexts/LanguageContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (name: string) => void;
}

const HeaderCom = ({ activeSection, setActiveSection }: HeaderProps) => {
  const { lang, setLang, t } = useLanguage();

  const menuItems = [
    { id: 'Home', label: t.header.home },
    { id: 'Projects', label: t.header.projects },
    { id: 'Contact', label: t.header.contact },
  ];

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-header fixed top-0 z-50 flex h-[86px] w-full items-center px-[80px]">
      {/* 1. 왼쪽 영역 (로고) - flex-1을 주어 공간 확보 */}
      <div className="flex flex-1 items-center">
        <div className="font-sans text-[32px] font-medium whitespace-nowrap text-[#111]">SEOWON CHANG</div>
      </div>

      {/* 2. 중간 영역 (네비게이션) - 중앙 정렬 */}
      <nav className="flex items-center gap-12 font-sans font-medium">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`text-[20px] whitespace-nowrap transition-colors duration-300 ${
              activeSection === item.id ? 'text-[#111111]' : 'text-[#666666]'
            } hover:text-point-lime`}>
            {item.label}
          </button>
        ))}
      </nav>

      {/* 3. 오른쪽 영역 (언어 전환) - flex-1과 justify-end로 우측 배치 */}
      <div className="flex flex-1 items-center justify-end gap-2 text-[18px] font-medium text-[#666]">
        <button
          onClick={() => setLang('EN')}
          className={`transition-colors ${lang === 'EN' ? 'font-bold text-[#111]' : 'hover:text-[#111]'}`}>
          EN
        </button>
        <span className="text-[#e0e0e0]">/</span>
        <button
          onClick={() => setLang('KR')}
          className={`transition-colors ${lang === 'KR' ? 'font-bold text-[#111]' : 'hover:text-[#111]'}`}>
          KR
        </button>
      </div>
    </header>
  );
};

export default HeaderCom;
