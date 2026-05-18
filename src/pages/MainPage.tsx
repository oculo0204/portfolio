import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import HeaderCom from '../components/headers/HeaderCom';
import HomeSection from '../components/mains/HomeSection';
import AboutMeSection from '../components/mains/AboutMeSection';
import TechStackSection from '../components/mains/TechStackSection';
import ProjectsSection from '../components/mains/ProjectsSection';
import ContactSection from '../components/mains/ContactSection';
import { ScrollIndicator } from '../components/mains/MainSections';

const MainPage = () => {
  const sections = ['Home', 'AboutMe', 'TechStack', 'Projects', 'Contact'];
  const [currentSection, setCurrentSection] = useState(0);

  // 연속 스크롤 방지 및 타이밍 제어를 위한 Ref
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef(0);

  // [핵심] Framer Motion의 모션 밸류와 스프링 이징 적용
  const yValue = useMotionValue(0);

  // stiffness(뻣뻣함/탄성)와 damping(감속력)을 조절하여 딱딱하지 않고 부드러운 감도를 만듭니다.
  const springY = useSpring(yValue, { stiffness: 80, damping: 20, mass: 1 });

  // 특정 섹션으로 이동하는 함수 (framer-motion 연동)
  const moveToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;

    setCurrentSection(index);
    // 이동할 Y축 목적지 계산 (-100vh, -200vh ...)
    yValue.set(-index * window.innerHeight);
  };

  // 마우스 휠 이벤트 처리
  const handleWheel = (e: React.WheelEvent) => {
    // 이미 애니메이션이 도는 중이면 휠 입력 무시 (민감도 제어)
    if (isAnimatingRef.current) return;

    if (e.deltaY > 30) {
      // 아래로 스크롤 -> 다음 섹션
      if (currentSection < sections.length - 1) {
        isAnimatingRef.current = true;
        moveToSection(currentSection + 1);
      }
    } else if (e.deltaY < -30) {
      // 위로 스크롤 -> 이전 섹션
      if (currentSection > 0) {
        isAnimatingRef.current = true;
        moveToSection(currentSection - 1);
      }
    }
  };

  // 모바일/트랙패드 터치 스크롤 지원
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isAnimatingRef.current) return;
    const touchEndY = e.touches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (diffY > 50) {
      if (currentSection < sections.length - 1) {
        isAnimatingRef.current = true;
        moveToSection(currentSection + 1);
      }
    } else if (diffY < -50) {
      if (currentSection > 0) {
        isAnimatingRef.current = true;
        moveToSection(currentSection - 1);
      }
    }
  };

  // 스프링 애니메이션이 끝나는 시점을 감지해 락(Lock)을 풀어줌
  useEffect(() => {
    const unsubscribe = springY.onChange((latest) => {
      const target = -currentSection * window.innerHeight;
      // 목적지에 거의 도달했을 때 (오차범위 1px 이내) 애니메이션 플래그 해제
      if (Math.abs(latest - target) < 1) {
        isAnimatingRef.current = false;
      }
    });
    return () => unsubscribe();
  }, [currentSection, springY]);

  // 브라우저 리사이즈 시 가변되는 높이값 실시간 동기화
  useEffect(() => {
    const handleResize = () => {
      yValue.set(-currentSection * window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSection, yValue]);

  return (
    // 전체 컨테이너를 스크롤바 없는 fixed로 고정하고 이벤트를 수집합니다.
    <div
      className="bg-bgmain fixed inset-0 h-screen w-full overflow-hidden select-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>
      {/* 고정 상단 헤더 */}
      <HeaderCom
        activeSection={sections[currentSection]}
        setActiveSection={(name) => moveToSection(sections.indexOf(name))}
      />

      {/* [핵심 애니메이션 판] framer-motion의 부드러운 springY 값을 style로 바인딩 */}
      <motion.div className="w-full px-[132px]" style={{ y: springY }}>
        {/* 1. Home 섹션 */}
        <div className="flex h-screen w-full items-center justify-center">
          <HomeSection />
        </div>

        {/* 2. AboutMe 섹션 */}
        <div className="flex h-screen w-full items-center justify-center">
          <AboutMeSection />
        </div>

        {/* 3. TechStack 섹션 */}
        <div className="flex h-screen w-full items-center justify-center">
          <TechStackSection />
        </div>

        {/* 4. Projects 섹션 */}
        <div className="flex h-screen w-full items-center justify-center">
          <ProjectsSection />
        </div>

        {/* 5. Contact 섹션 */}
        <div className="flex h-screen w-full items-center justify-center">
          <ContactSection />
        </div>
      </motion.div>

      {/* 우측 인디케이터 내비게이션 */}
      <ScrollIndicator sections={sections} currentSection={currentSection} moveToSection={moveToSection} />
    </div>
  );
};

export default MainPage;
