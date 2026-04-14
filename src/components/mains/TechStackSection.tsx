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
    <div className="mx-auto flex w-full max-w-[1584px] flex-col gap-10 text-left">
      {/* 1. 타이틀 영역: 피그마 68px 반영 */}
      <h2 className="font-['Pretendard'] text-[68px] leading-normal font-semibold text-[#111]">Tech stack</h2>

      {/* 2. 메인 카드 컨테이너: 피그마 규격 반영 */}
      <div className="h-[763px] w-[1584px] rounded-[25.54px] border border-gray-50 bg-white px-[76.619px] pt-[76.619px] shadow-[0_10px_30px_0_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-2 gap-x-[150px]">
          {' '}
          {/* 두 컬럼 사이 간격을 넉넉히 배치 */}
          {/* 왼쪽 컬럼 */}
          <div className="space-y-[60px]">
            {leftStacks.map((stack) => (
              <div key={stack.category} className="space-y-[12px]">
                <h3 className="font-['Pretendard'] text-[31.925px] leading-[44.695px] font-bold tracking-[-0.717px] text-[#111]">
                  {stack.category}
                </h3>
                <div className="space-y-[8px]">
                  {stack.items.map((item) => (
                    <p
                      key={item}
                      className="font-['Pretendard'] text-[25.54px] leading-[38.31px] font-normal tracking-[-0.499px] text-[#666]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* 오른쪽 컬럼 */}
          <div className="space-y-[60px]">
            {rightStacks.map((stack) => (
              <div key={stack.category} className="space-y-[12px]">
                <h3 className="font-['Pretendard'] text-[31.925px] leading-[44.695px] font-bold tracking-[-0.717px] text-[#111]">
                  {stack.category}
                </h3>
                <div className="space-y-[8px]">
                  {stack.items.map((item) => (
                    <p
                      key={item}
                      className="font-['Pretendard'] text-[25.54px] leading-[38.31px] font-normal tracking-[-0.499px] text-[#666]">
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
