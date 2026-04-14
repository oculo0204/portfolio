import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import BG_BOOK from '../../assets/imgs/main/bg-book.png';

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // motion value (리렌더 없음)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // spring 적용 (쫀득한 느낌)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const projects = [
    {
      id: 1,
      title: 'LINKU',
      type: 'Frontend',
      description: '대학생을 위한 소셜 네트워킹 플랫폼',
      period: '2024.01 - 2024.03',
      color: '#8E7AE6',
      skew: '-15deg',
      rotate: '2deg',
      top: '40%',
      left: '18%',
    },
    {
      id: 2,
      title: 'Portfolio API',
      type: 'Backend',
      description: 'Spring Boot 기반의 포트폴리오 관리 API',
      period: '2024.04 - Present',
      color: '#36B37E',
      skew: '-20deg',
      rotate: '5deg',
      top: '58%',
      left: '33%',
    },
    {
      id: 3,
      title: 'Auth System',
      type: 'Backend',
      description: 'Redis를 활용한 고성능 인증 시스템',
      period: '2023.12 - 2024.01',
      color: '#36B37E',
      skew: '-18deg',
      rotate: '4deg',
      top: '75%',
      left: '55%',
    },
    {
      id: 4,
      title: 'AI Agent',
      type: 'Project',
      description: 'LLM을 활용한 워크플로우 자동화 에이전트',
      period: '2024.02 - 2024.04',
      color: '#FF7452',
      skew: '-25deg',
      rotate: '8deg',
      top: '55%',
      left: '45%',
    },
  ];

  const legends = [
    { label: 'Frontend', color: '#8E7AE6' },
    { label: 'Backend', color: '#36B37E' },
    { label: 'Project', color: '#FF7452' },
  ];

  const activeProject = projects.find((p) => p.id === hoveredId);

  return (
    <div
      className="relative h-full w-full"
      // 리렌더 없이 값만 업데이트
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

        {/* motion.div로 변경 */}
        <motion.div
          className="pointer-events-none fixed min-h-[220px] w-[320px] rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-md"
          style={{
            x: springX,
            y: springY,
          }}>
          {!activeProject ? (
            <div className="space-y-5">
              <p className="text-sm font-bold text-gray-400 uppercase">Legend</p>
              {legends.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="h-8 w-8 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[18px]">{item.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs text-white"
                  style={{ backgroundColor: activeProject.color }}>
                  {activeProject.type}
                </span>
                <span className="text-xs text-gray-400">{activeProject.period}</span>
              </div>

              <h3 className="mb-2 text-[28px] font-bold">{activeProject.title}</h3>

              <p className="text-[16px] text-gray-600">{activeProject.description}</p>
            </div>
          )}
        </motion.div>

        {/* 프로젝트 태그 */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="relative h-full w-full">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onMouseEnter={() => setHoveredId(proj.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="pointer-events-auto absolute h-[40px] w-[70px] cursor-pointer shadow-lg transition hover:scale-125"
                style={{
                  backgroundColor: proj.color,
                  top: proj.top,
                  left: proj.left,
                  transform: `skewY(${proj.skew}) rotate(${proj.rotate})`,
                }}>
                <div className="absolute top-0 right-0 h-5 w-5 skew-y-12 bg-white/20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
