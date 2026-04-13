const TechStackSection = () => {
  const stacks = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Spring Boot', 'Java', 'QueryDSL', 'Redis', 'MySQL'] },
    { category: 'DevOps & Tools', items: ['AWS', 'Docker', 'Git', 'Github Actions'] },
    { category: 'AI & Research', items: ['Python', 'PyTorch', 'LLM', 'RAG'] },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
      {stacks.map((stack) => (
        <div
          key={stack.category}
          className="hover:border-point-lime rounded-2xl border border-gray-100 bg-white/40 p-6 transition-colors">
          <h3 className="text-primary-purple mb-4 text-xl font-bold">{stack.category}</h3>
          <div className="flex flex-wrap gap-2">
            {stack.items.map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStackSection;
