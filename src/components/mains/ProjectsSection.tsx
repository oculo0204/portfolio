const ProjectsSection = () => {
  const projects = [
    {
      title: 'LinkU',
      desc: 'AI 기반 자동 링크 분류 및 추천 서비스',
      tech: ['Spring Boot', 'Gemini', 'AWS'],
    },
    {
      title: 'Heesoksik',
      desc: '세상의 따뜻한 소식만 전하는 긍정 뉴스 서비스',
      tech: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Dangjanggaja',
      desc: '여행 경비 정산 및 공유 모바일 애플리케이션',
      tech: ['React Native', 'Firebase'],
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl">
          <div className="group-hover:bg-point-lime/20 flex h-40 items-center justify-center bg-gray-200 transition-colors">
            <span className="group-hover:text-primary-purple text-xl font-bold text-gray-400 italic">
              Project Image
            </span>
          </div>
          <div className="p-6 text-left">
            <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-gray-600">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-primary-purple text-[10px] font-bold tracking-wider uppercase">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
