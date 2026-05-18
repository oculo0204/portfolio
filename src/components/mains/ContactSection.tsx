import emailIcon from '../../assets/imgs/main/mail-logo.png';
import linkedinIcon from '../../assets/imgs/main/linkedin-icon-blue.svg';
import githubIcon from '../../assets/imgs/main/github-icon-black.svg';
import { PERSONAL_INFO } from '../../constants/personal_info';

// 공통 아이콘 박스 컴포넌트
const ContactBox = ({
  icon,
  label,
  value,
  href,
  download,
}: {
  icon: string | React.ReactNode;
  label: string;
  value: string;
  href: string;
  download?: string;
}) => (
  <a
    href={href}
    download={download}
    target={download ? undefined : '_blank'} // 다운로드 시에는 새창 방지
    rel="noopener noreferrer"
    // 1920 기준 550px -> 약 28.6vw / 114px -> 약 6vh
    className="group flex h-[clamp(80px,6vh,114px)] w-full max-w-[clamp(300px,28.6vw,550px)] shrink-0 items-center gap-[1vw] rounded-xl bg-[#F3F4F6] px-[1vw] transition-colors hover:bg-gray-200">
    {/* Icon 영역: 1920 기준 50px -> 약 2.6vw */}
    <div className="flex aspect-square h-[clamp(32px,2.6vw,50px)] w-[clamp(32px,2.6vw,50px)] shrink-0 items-center justify-center">
      {typeof icon === 'string' ? <img src={icon} alt={label} className="h-full w-full object-contain" /> : icon}
    </div>

    <div className="flex min-w-0 flex-col">
      {' '}
      {/* min-w-0으로 텍스트 넘침 방지 */}
      {/* Label: 14px 기준 */}
      <span className="font-['Inter'] text-[clamp(12px,0.73vw,14px)] leading-tight font-normal text-[#90A1B9] uppercase">
        {label}
      </span>
      {/* Value: 16px 기준 */}
      <span className="group-hover:text-point-lime truncate font-['Inter'] text-[clamp(13px,0.83vw,16px)] leading-normal font-medium text-[#111] transition-colors">
        {value}
      </span>
    </div>
  </a>
);

const ContactSection = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center px-[5vw] py-[5vh]">
      {/* 1. 타이틀 영역: 68px 기준 */}
      <div className="mb-[4vh] w-full text-left">
        <h2 className="font-['Pretendard'] text-[clamp(2.5rem,3.5vw,4.25rem)] leading-normal font-semibold text-[#111]">
          Contact.
        </h2>
      </div>

      {/* 2. 컨택트 박스 그리드 레이아웃 (2열) */}
      <div className="grid w-full grid-cols-1 gap-x-[2vw] gap-y-[2vh] md:grid-cols-2">
        {/* Email */}
        <ContactBox label="Email" value={PERSONAL_INFO.email} href={`mailto:${PERSONAL_INFO.email}`} icon={emailIcon} />

        {/* LinkedIn */}
        <ContactBox
          label="LinkedIn"
          value={PERSONAL_INFO.linkedin.replace('https://', '')}
          href={PERSONAL_INFO.linkedin}
          icon={linkedinIcon}
        />

        {/* GitHub */}
        <ContactBox
          label="GitHub"
          value={PERSONAL_INFO.github.replace('https://', '')}
          href={PERSONAL_INFO.github}
          icon={githubIcon}
        />

        {/* Resume: public 폴더 내 파일 연동 */}
        <ContactBox
          label="Resume"
          value="Download PDF"
          href={PERSONAL_INFO.cv_path}
          download="Seowon_Chang_CV.pdf"
          icon={<div className="text-[clamp(24px,2.1vw,40px)] leading-none select-none">📄</div>}
        />
      </div>
    </div>
  );
};

export default ContactSection;
