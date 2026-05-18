import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectRoutes: Record<number, string> = {
  1: 'linku',
};

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'LINKU',
      type: 'Frontend',
      description:
        'Linku ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      period: '2024.01 - 2024.03',
      color: '#9640FF', // 시안의 보라색
      statusText: 'ACTIVE',
    },
    {
      id: 2,
      title: 'REACT PORTFOLIO API',
      type: 'Backend',
      description:
        'Spring Boot 기반의 포트폴리오 관리 API 백엔드 플랫폼입니다. RESTful API 설계 및 데이터베이스 최적화를 포함하고 있습니다.',
      period: '2024.04 - Present',
      color: '#36B37E', // 시안의 초록색
      statusText: '#36B37E',
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-transparent px-12 py-16 font-sans select-none">
      {/* 타이틀 영역 */}
      <div className="mb-12">
        <h2 className="text-[54px] font-bold tracking-tight text-[#111]">Projects</h2>
      </div>

      {/* [핵심] 메인 레이아웃 컨테이너: 책들을 수평(flex-row)으로 나란히 배치 */}
      <div className="relative flex h-[320px] flex-row items-start gap-4 pl-4">
        {projects.map((proj) => {
          const isHovered = hoveredId === proj.id;

          return (
            <div
              key={proj.id}
              className="relative flex h-[280px] items-center"
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}>
              {/* [1] 수평 정렬 상태로 고정된 책 표지 / 탭 */}
              <div
                onClick={() => projectRoutes[proj.id] && navigate(`/project/${projectRoutes[proj.id]}`)}
                className="relative z-30 flex h-[280px] w-[48px] cursor-pointer flex-col justify-between rounded-xl p-3 text-white shadow-lg transition-transform duration-200"
                style={{
                  backgroundColor: proj.color,
                  // 호버 시 살짝 위로 들리는 위트있는 효과 추가 (원치 않으시면 제거 가능)
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                }}>
                {/* 세로형 타이틀 */}
                <div
                  className="mt-2 text-center text-[13px] font-black tracking-wider whitespace-nowrap"
                  style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                  {proj.title.split(' ')[0]}
                </div>

                {/* 하단 텍스트 */}
                <div
                  className="mb-2 text-center text-[10px] font-medium whitespace-nowrap opacity-80"
                  style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                  {proj.statusText}
                </div>

                {/* 책등 입체감 디자인 */}
                <div className="absolute inset-y-0 left-0 w-[4px] rounded-l-xl bg-white/10" />
                <div className="absolute inset-y-0 right-0 w-[3px] bg-black/10" />
              </div>

              {/* [2] 호버 시 해당 책 '오른쪽'으로 슥 밀려 나오는 세로 구분선 + 상세 카드 */}
              <motion.div
                className="relative z-10 flex h-[280px] origin-left items-center overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: isHovered ? 540 : 0, // 호버 시 오른쪽으로 펼쳐짐
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 240, damping: 25 }}>
                {/* 이미지 시안 속 세로 구분선 구역 */}
                <div className="flex h-full w-[30px] items-center justify-center bg-transparent">
                  <div className="h-[85%] w-[1px] bg-gray-200" />
                </div>

                {/* 이미지 디자인 100% 재현한 카드 컴포넌트 */}
                <div className="flex h-[280px] w-[500px] flex-col justify-between rounded-2xl border border-gray-200/70 bg-white p-7 shadow-xl">
                  <div className="space-y-3">
                    {/* 상단 태그 및 기간 */}
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-lg px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-white uppercase"
                        style={{ backgroundColor: proj.color }}>
                        {proj.type}
                      </span>
                      <span className="text-[12px] font-medium text-gray-400">{proj.period}</span>
                    </div>

                    {/* 대제목 */}
                    <h3 className="text-[28px] font-black tracking-tight text-[#111]">{proj.title}</h3>

                    {/* 본문 설명 */}
                    <p className="line-clamp-4 font-['Pretendard'] text-[14px] leading-relaxed text-gray-600">
                      {proj.description}
                    </p>
                  </div>

                  {/* 하단 링크 이동 버튼 */}
                  <div
                    onClick={() => projectRoutes[proj.id] && navigate(`/project/${projectRoutes[proj.id]}`)}
                    className="inline-flex max-w-max cursor-pointer items-center gap-1 rounded-xl border border-gray-200 bg-white px-4 py-2 text-[13px] font-bold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                    Visit Project Link <span className="text-[11px]">↗</span>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
