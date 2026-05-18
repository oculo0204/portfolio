import { AnimatePresence, motion, MotionValue } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  type: string;
  description: string;
  period: string;
  color: string;
};

type Legend = {
  label: string;
  color: string;
};

interface FloatingProjectCardProps {
  activeProject: Project | undefined;
  legends: Legend[];
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

const FloatingProjectCard = ({ activeProject, legends, springX, springY }: FloatingProjectCardProps) => {
  return (
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
            <p className="text-sm font-semibold text-gray-700 uppercase">책갈피를 클릭하면 프로젝트 상세보기로 이동</p>

            {legends.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="h-8 w-8 rounded-full shadow-inner" style={{ backgroundColor: item.color }} />
                <span className="text-[18px] font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeProject.id}
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

            <p className="font-['Pretendard'] text-[16px] leading-relaxed text-gray-600">{activeProject.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingProjectCard;
{
  /* 마우스 오버 시 마우스 포인터를 따라다니는 고정 플로팅 카드 컴포넌트 
        <FloatingProjectCard
          activeProject={activeProject}
          legends={legends}
          springX={springX}
          springY={springY}
        />
      </div>
*/
}
