import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import BG_BOOK from '../../assets/imgs/main/bg-book.png';

const projectRoutes: Record<number, string> = {
  1: 'linku',
};

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const projects = [
    {
      id: 1,
      title: 'LINKU',
      type: 'Frontend',
      description: '대학생을 위한 소셜 네트워킹 플랫폼',
      period: '2024.01 - 2024.03',
      color: '#9640FF',
      rotX: 65,
      rotY: -10,
      rotZ: -40,
      top: '410px',
      left: '280px',
    },
    {
      id: 2,
      title: 'REACT',
      type: 'Backend',
      description: 'Spring Boot 기반의 포트폴리오 관리 API',
      period: '2024.04 - Present',
      color: '#36B37E',
      rotX: 65,
      rotY: -10,
      rotZ: -40,
      top: '600px',
      left: '33%',
    },
  ];

  const legends = [
    { label: 'Backend', color: '#8E7AE6' },
    { label: 'Frontend', color: '#36B37E' },
    { label: 'Project', color: '#FF7452' },
  ];

  const activeProject = projects.find((p) => p.id === hoveredId);

  return (
    <div
      className="relative h-full w-full"
      onMouseMove={(e) => {
        mouseX.set(e.clientX - 260);
        mouseY.set(e.clientY - 260);
      }}>
      {/* 배경 */}
      <div className="pointer-events-none absolute top-[-50px] left-1/2 z-0 h-screen w-screen -translate-x-1/2 overflow-hidden">
        <img src={BG_BOOK} alt="Background Book" className="h-full w-full object-cover object-top" />
      </div>

      <div className="relative z-10 h-[900px] w-full pt-[20px]">
        <h2 className="text-[68px] font-semibold text-[#111]">Projects</h2>

        {/* 마우스 따라다니는 카드 */}
        <motion.div
          className="pointer-events-none fixed z-[100] min-h-[220px] w-[320px] rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-md"
          style={{ x: springX, y: springY }}>
          <AnimatePresence mode="wait">
            {!activeProject ? (
              <motion.div
                key="legend"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5">
                <p className="font- semibold text-sm text-gray-700 uppercase">
                  책갈피를 클릭하면 프로젝트 상세보기로 이동
                </p>
                {legends.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="h-8 w-8 rounded-full shadow-inner" style={{ backgroundColor: item.color }} />
                    <span className="text-[18px] font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}>
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-white uppercase"
                    style={{ backgroundColor: activeProject.color }}>
                    {activeProject.type}
                  </span>
                  <span className="text-xs font-medium text-gray-400">{activeProject.period}</span>
                </div>
                <h3 className="mb-2 text-[28px] font-bold text-[#111]">{activeProject.title}</h3>
                <p className="font-['Pretendard'] text-[16px] leading-relaxed text-gray-600">
                  {activeProject.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 책갈피 */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="relative h-full w-full" style={{ perspective: '1200px' }}>
            {projects.map((proj) => {
              const isHovered = hoveredId === proj.id;

              const closedWidth = 25;
              const openWidth = 240;

              return (
                <motion.div
                  key={proj.id}
                  onMouseEnter={() => setHoveredId(proj.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => projectRoutes[proj.id] && navigate(`/project/${projectRoutes[proj.id]}`)}
                  initial={false}
                  animate={{
                    width: isHovered ? openWidth : closedWidth,
                    height: 80,
                    scale: isHovered ? 1.05 : 1,
                    zIndex: isHovered ? 50 : 10,
                    x: isHovered ? -(openWidth - closedWidth) : 0, // 🔥 핵심 (오른쪽 고정)
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{
                    backgroundColor: proj.color,
                    top: proj.top,
                    left: proj.left,
                    rotateX: proj.rotX,
                    rotateY: proj.rotY,
                    rotateZ: proj.rotZ,
                    transformOrigin: 'right center', // 🔥 핵심
                  }}
                  className="pointer-events-auto absolute flex cursor-pointer items-center justify-start overflow-hidden rounded-r-sm shadow-2xl">
                  <motion.span
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 20 : -20,
                    }}
                    transition={{ duration: 0.2 }}
                    className="font-sans text-[36px] font-black tracking-tighter whitespace-nowrap text-white italic">
                    {proj.title}
                  </motion.span>

                  <div className="absolute top-0 right-0 h-full w-2 bg-black/10"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
