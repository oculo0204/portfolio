// src/components/mains/MainSections.tsx
import { motion } from 'framer-motion';

interface SectionProps {
  isActive: boolean;
  children?: React.ReactNode;
}

export const Section = ({ isActive, children }: SectionProps) => (
  <section className="flex h-screen w-full flex-col items-center justify-center px-[80px]">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full">
      {/* 이 자리에 MainPage에서 넣어준 div나 컴포넌트들이 들어갑니다 */}
      <div className="w-full">{children}</div>
    </motion.div>
  </section>
);

export const ScrollIndicator = ({
  sections,
  currentSection,
  moveToSection,
}: {
  sections: string[];
  currentSection: number;
  moveToSection: (i: number) => void;
}) => (
  <div className="fixed top-1/2 right-10 z-50 flex -translate-y-1/2 flex-col gap-4">
    {sections.map((_, i) => (
      <button
        key={i}
        onClick={() => moveToSection(i)}
        className={`w-2.5 rounded-full transition-all duration-700 ${
          currentSection === i ? 'bg-scroll-main h-10' : 'h-2.5 bg-gray-300'
        }`}
      />
    ))}
  </div>
);
