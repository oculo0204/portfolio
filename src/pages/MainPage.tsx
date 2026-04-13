// src/pages/MainPage.tsx
import { motion } from 'framer-motion';
import HeaderCom from '../components/headers/HeaderCom';
import { useFullPageScroll } from '../hooks/useFullPageScroll';
import { Section, ScrollIndicator } from '../components/mains/MainSections';
import HomeSection from '../components/mains/HomeSection';
import AboutMeSection from '../components/mains/AboutMeSection';
import TechStackSection from '../components/mains/TechStackSection';
import ProjectsSection from '../components/mains/ProjectsSection';
import ContactSection from '../components/mains/ContactSection';

const MainPage = () => {
  const sections = ['Home', 'AboutMe', 'TechStack', 'Projects', 'Contact'];
  const { currentSection, moveToSection } = useFullPageScroll(sections);

  return (
    <div className="bg-bgmain fixed inset-0 overflow-hidden">
      <HeaderCom
        activeSection={sections[currentSection]}
        setActiveSection={(name) => moveToSection(sections.indexOf(name))}
      />

      <motion.div
        animate={{ y: `-${currentSection * 100}vh` }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full px-[132px]">
        {/* 1. Home 섹션 */}
        <Section isActive={currentSection === 0}>
          <HomeSection />
        </Section>

        {/* 2. AboutMe 섹션 */}
        <Section isActive={currentSection === 1}>
          <AboutMeSection />
        </Section>

        {/* 3. TechStack 섹션 */}
        <Section isActive={currentSection === 2}>
          <TechStackSection />
        </Section>

        {/* 나머지 섹션들도 같은 방식으로 작업... */}
        <Section isActive={currentSection === 3}>
          <ProjectsSection />
        </Section>

        <Section isActive={currentSection === 4}>
          <ContactSection />
        </Section>
      </motion.div>

      <ScrollIndicator sections={sections} currentSection={currentSection} moveToSection={moveToSection} />
    </div>
  );
};

export default MainPage;
