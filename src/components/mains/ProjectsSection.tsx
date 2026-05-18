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
    // AboutMeSection과 좌우 마진, 상하 간격을 일치시키기 위해 mx-auto 및 gap-[3vw] 적용
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-[3vw] bg-transparent py-16 text-left font-sans select-none">
      {/* 1. 상단 타이틀: AboutMe 타이틀과 폰트 크기/반응형 단위(clamp) 완벽 통일 */}
      <h2 className="font-sans text-[clamp(2.5rem,3.5vw,4.25rem)] font-semibold tracking-tight text-[#111]">
        Projects
      </h2>

      {/* 2. 메인 레이아웃 컨테이너: h-auto 및 반응형 간격 설정 */}
      <div className="relative flex min-h-[40vh] flex-row items-start gap-[1.5vw] pl-[0.5vw]">
        {projects.map((proj) => {
          const isHovered = hoveredId === proj.id;

          return (
            <div
              key={proj.id}
              className="relative flex h-[clamp(240px,20vw,320px)] items-center"
              onMouseEnter={() => setHoveredId(proj.id)}
              onMouseLeave={() => setHoveredId(null)}>
              {/* [1] 수평 정렬 상태로 고정된 책 표지 / 탭 */}
              <div
                onClick={() => projectRoutes[proj.id] && navigate(`/project/${projectRoutes[proj.id]}`)}
                className="relative z-30 flex h-[clamp(240px,20vw,320px)] w-[clamp(40px,3.2vw,56px)] cursor-pointer flex-col justify-between rounded-[0.8vw] p-[1vw] text-white shadow-lg transition-transform duration-200"
                style={{
                  backgroundColor: proj.color,
                  transform: isHovered ? 'translateY(-0.5vw)' : 'none',
                }}>
                {/* 세로형 타이틀 */}
                <div
                  className="mt-[0.5vw] text-center text-[clamp(11px,0.85vw,14px)] font-black tracking-wider whitespace-nowrap"
                  style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                  {proj.title.split(' ')[0]}
                </div>

                {/* 하단 텍스트 */}
                <div
                  className="mb-[0.5vw] text-center text-[clamp(9px,0.65vw,11px)] font-medium whitespace-nowrap opacity-80"
                  style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                  {proj.statusText}
                </div>

                {/* 책등 입체감 디자인 */}
                <div className="absolute inset-y-0 left-0 w-[0.3vw] rounded-l-[0.8vw] bg-white/10" />
                <div className="absolute inset-y-0 right-0 w-[0.2vw] bg-black/10" />
              </div>

              {/* [2] 호버 시 해당 책 '오른쪽'으로 슥 밀려 나오는 세로 구분선 + 상세 카드 */}
              <motion.div
                className="relative z-10 flex h-[clamp(240px,20vw,320px)] origin-left items-center overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  // 호버 시 카드의 가로 크기도 vw 단위를 기준으로 유연하게 확장
                  width: isHovered ? 'clamp(380px,34vw,560px)' : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 240, damping: 25 }}>
                {/* 이미지 시안 속 세로 구분선 구역 (패딩과 경계선 반응형 조절) */}
                <div className="flex h-full w-[clamp(20px,2vw,36px)] items-center justify-center bg-transparent">
                  <div className="h-[85%] w-[1px] bg-gray-200" />
                </div>

                {/* AboutMe의 테마를 이식한 100% 가변 반응형 상세 카드 */}
                <div
                  className="flex h-full w-[clamp(340px,31vw,520px)] flex-col justify-between border border-gray-200 bg-white p-[2vw] shadow-[0_30px_80px_-60px_rgba(15,23,42,0.12)]"
                  style={{ borderRadius: '1.5vw' }} // AboutMe 프로필 카드 라운드값(1.5vw) 매칭
                >
                  <div className="space-y-[1vw]">
                    {/* 상단 태그 및 기간 */}
                    <div className="flex items-center gap-[0.7vw]">
                      <span
                        className="rounded-full px-[0.8vw] py-[0.2vw] text-[clamp(9px,0.7vw,11px)] font-bold tracking-wide text-white uppercase"
                        style={{ backgroundColor: proj.color }}>
                        {proj.type}
                      </span>
                      <span className="text-[clamp(11px,0.8vw,13px)] font-medium text-gray-400">{proj.period}</span>
                    </div>

                    {/* 대제목 */}
                    <h3 className="text-[clamp(20px,1.66vw,28px)] font-black tracking-tight text-[#111]">
                      {proj.title}
                    </h3>

                    {/* 본문 설명 */}
                    <p className="line-clamp-4 font-['Pretendard'] text-[clamp(12px,0.9vw,15px)] leading-relaxed break-keep text-gray-600">
                      {proj.description}
                    </p>
                  </div>

                  {/* 하단 링크 이동 버튼 */}
                  <div
                    onClick={() => projectRoutes[proj.id] && navigate(`/project/${projectRoutes[proj.id]}`)}
                    className="inline-flex max-w-max cursor-pointer items-center gap-[0.5vw] rounded-[0.8vw] border border-gray-200 bg-white px-[1.2vw] py-[0.6vw] text-[clamp(11px,0.85vw,13px)] font-bold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
                    Visit Project Link <span className="text-[clamp(10px,0.7vw,12px)]">↗</span>
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
