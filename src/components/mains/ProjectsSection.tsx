import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import BG_BOOK from '../../assets/imgs/main/bg-book.png';

const projectRoutes: Record<number, string> = {
  1: 'linku',
};

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

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
      color: '#9640FF',
      // skew 대신 3D 회전값 사용
      rotX: 65, // 앞으로 눕히기
      rotY: -10, // 옆으로 틀기
      rotZ: -40, // 평면 회전
      top: '410px',
      left: '280px',
    },
    {
      id: 2,
      title: 'Portfolio API',
      type: 'Backend',
      description: 'Spring Boot 기반의 포트폴리오 관리 API',
      period: '2024.04 - Present',
      color: '#36B37E',
      rotX: 40,
      rotY: 5,
      rotZ: 10,
      top: '58%',
      left: '33%',
    },
    // ... 나머지 프로젝트도 동일한 구조로 값 조정 가능
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

        {/* 프로젝트 태그 (3D Transform 적용) */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="relative h-full w-full">
            {projects.map((proj) => (
              <motion.div
                key={proj.id}
                onMouseEnter={() => setHoveredId(proj.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => projectRoutes[proj.id] && navigate(`/project/${projectRoutes[proj.id]}`)}
                // skew 대신 3D 회전 속성 사용 (서로 간섭하지 않음)
                style={{
                  backgroundColor: proj.color,
                  top: proj.top,
                  left: proj.left,
                  rotateX: proj.rotX,
                  rotateY: proj.rotY,
                  rotateZ: proj.rotZ,
                }}
                whileHover={{ scale: 1.1, zIndex: 50 }}
                className="pointer-events-auto absolute flex h-[80px] w-[160px] cursor-pointer items-center justify-center shadow-2xl transition-shadow">
                <span className="font-sans text-[20px] font-black tracking-tighter text-white italic">
                  {proj.title}
                </span>
                <div className="absolute top-0 right-0 h-full w-4 bg-black/10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
