const AboutMeSection = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-12 text-left">
      <div className="space-y-6">
        <h3 className="text-primary-purple text-4xl font-bold">About Me</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          단순히 코드를 짜는 것을 넘어, 문제의 근본적인 원인을 파악하고
          <br />
          최적의 솔루션을 찾는 과정에서 즐거움을 느낍니다.
        </p>
      </div>
      <div className="rounded-3xl border border-gray-100 bg-white/50 p-8">
        <ul className="space-y-4 text-gray-600">
          <li>🎓 성신여자대학교 컴퓨터공학과</li>
          <li>🌍 University of Silesia 교환학생</li>
          <li>💻 Backend & AI Research 관심</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeSection;
