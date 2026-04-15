export interface ProjectHeroProps {
  bgImage: string;
  appPreviewNode?: React.ReactNode; // 실제 이미지 or placeholder
}

const ProjectHero = ({ bgImage }: ProjectHeroProps) => {
  return (
    <div className="relative h-[820px] overflow-hidden">
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center top' }}
      />
    </div>
  );
};

export default ProjectHero;
