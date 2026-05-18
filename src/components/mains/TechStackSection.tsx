const TechStackSection = () => {
  const leftStacks = [
    { category: 'Backend', items: ['Java / Spring Boot', 'Spring Data JPA'] },
    {
      category: 'Server / Deployment',
      items: ['Apache Tomcat', 'AWS EC2 / AWS RDS', 'Load Balancer / Auto Scaling Group'],
    },
    { category: 'OS', items: ['Linux (Ubuntu 20.04 LTS)'] },
  ];

  const rightStacks = [
    { category: 'DB / Cache', items: ['MySQL', 'Redis'] },
    {
      category: 'Tools / Test Code / Performance Test',
      items: ['IntelliJ IDEA / Eclipse / Visual Studio Code', 'JUnit5 / Mockito'],
    },
    { category: 'Collaborations', items: ['Git', 'Notion / Discord'] },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-[2.5vw] text-left">
      {/* 1. 타이틀 영역: 68px 기준 반응형 */}
      <h2 className="font-['Pretendard'] text-[clamp(2.5rem,3.5vw,4.25rem)] leading-normal font-semibold text-[#111]">
        Tech stack
      </h2>

      {/* 2. 메인 카드 컨테이너: h-[763px], w-[1584px] -> 유동적 변경 */}
      <div className="min-h-[clamp(500px,60vh,763px)] w-full rounded-[1.3vw] border border-gray-50 bg-white p-[4vw] shadow-[0_10px_30px_0_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-2 gap-x-[8vw]">
          {/* 왼쪽 컬럼 */}
          <div className="flex flex-col gap-[3vw]">
            {leftStacks.map((stack) => (
              <div key={stack.category} className="flex flex-col gap-[0.8vw]">
                {/* 카테고리: 31.925px 기준 */}
                <h3 className="font-['Pretendard'] text-[clamp(1.1rem,1.66vw,2rem)] leading-tight font-bold tracking-tight break-keep text-[#111]">
                  {stack.category}
                </h3>
                <div className="flex flex-col gap-[0.5vw]">
                  {stack.items.map((item) => (
                    <p
                      key={item}
                      className="font-['Pretendard'] text-[clamp(0.9rem,1.33vw,1.6rem)] leading-snug font-normal break-keep text-[#666]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 오른쪽 컬럼 */}
          <div className="flex flex-col gap-[3vw]">
            {rightStacks.map((stack) => (
              <div key={stack.category} className="flex flex-col gap-[0.8vw]">
                <h3 className="font-['Pretendard'] text-[clamp(1.1rem,1.66vw,2rem)] leading-tight font-bold tracking-tight break-keep text-[#111]">
                  {stack.category}
                </h3>
                <div className="flex flex-col gap-[0.5vw]">
                  {stack.items.map((item) => (
                    <p
                      key={item}
                      className="font-['Pretendard'] text-[clamp(0.9rem,1.33vw,1.6rem)] leading-snug font-normal break-keep text-[#666]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
