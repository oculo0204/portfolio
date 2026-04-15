import { useLanguage } from '../../contexts/LanguageContext';
import { PERSONAL_INFO } from '../../constants/personal_info';
import InfoItem from './aboutmes/InfoItem';

// 아이콘 임포트
import BlogIcon from '../../assets/icons/main/blog.svg';
import GitHubIcon from '../../assets/icons/main/github-icon.svg';
import LinkedinIcon from '../../assets/icons/main/linkedin.svg';
import Location from '../../assets/icons/main/location-brown.svg';
import Email from '../../assets/icons/main/email-brown.svg';
import Graduate from '../../assets/icons/main/graduate-brown.svg';

const AboutMeSection = () => {
  const { t } = useLanguage();
  const data = t.aboutme;

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-[3vw] text-left">
      {/* 1. 상단 타이틀 */}
      <h2 className="font-sans text-[clamp(2.5rem,3.5vw,4.25rem)] font-semibold tracking-tight text-[#111]">
        {data.title}
      </h2>

      {/* 2. 카드 컨테이너 */}
      <div className="flex w-full flex-row items-stretch gap-[2.5vw]">
        {/* [왼쪽] 프로필 카드: 너비 520px -> 약 27vw */}
        <div className="flex min-h-[60vh] w-[clamp(350px,27vw,520px)] shrink-0 flex-col rounded-[1.5vw] border border-gray-200 bg-white p-[2.5vw] shadow-[0_30px_80px_-60px_rgba(15,23,42,0.12)]">
          <div className="mb-[3vw]">
            <h2 className="mb-[1vw] font-['Inter'] text-[clamp(24px,1.87vw,36px)] font-medium text-[#2C2416]">
              {data.name}
            </h2>
            <p className="font-sans text-[clamp(18px,1.35vw,26px)] font-bold text-[rgba(47,111,94,0.60)] uppercase">
              {data.job}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-[1.5vw]">
            <InfoItem Icon={Location} label={data.location_label} value={data.location_value} />
            <InfoItem Icon={Email} label={data.email_label} value={data.email_value} />
            <InfoItem Icon={Graduate} label={data.edu_label} value={data.edu_value} />
          </div>

          {/* 소셜 아이콘 영역 */}
          <div className="mt-auto flex items-center justify-end gap-[0.7vw] border-t border-gray-50 pt-[2vw]">
            {[
              { icon: GitHubIcon, href: PERSONAL_INFO.github, alt: 'Github' },
              { icon: LinkedinIcon, href: PERSONAL_INFO.linkedin, alt: 'Linkedin' },
              { icon: BlogIcon, href: PERSONAL_INFO.blog, alt: 'Blog' },
            ].map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-[clamp(40px,2.9vw,56px)] w-[clamp(40px,2.9vw,56px)] shrink-0 items-center justify-center rounded-full bg-[#333] transition hover:scale-110">
                <img src={social.icon} alt={social.alt} className="h-[45%] w-[45%] object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* [오른쪽] 콘텐츠 카드 */}
        <div className="relative flex flex-1 items-center rounded-[2.5vw] border border-gray-200 bg-white p-[4vw] shadow-[0_40px_120px_-72px_rgba(15,23,42,0.14)]">
          <div className="space-y-[2.5vw]">
            {/* 텍스트 크기: 40px -> 약 2.1vw */}
            <div className="font-['Pretendard'] text-[clamp(1.1rem,2.08vw,2.5rem)] leading-[1.6] font-normal break-keep text-[#111]">
              <p className="mb-[2vw]">
                {data.desc_title_p1}
                <span className="font-semibold text-[#2F6F5E]">{data.desc_title_highlight1}</span>
                {data.desc_title_p2}
                <span className="font-semibold text-[#2F6F5E]">{data.desc_title_highlight2}</span>
                {data.desc_title_p3}
              </p>

              <div className="space-y-[1.5vw]">
                <p>
                  {data.desc_p1_1}
                  <span className="font-semibold text-[#2F6F5E]">{data.desc_p1_highlight}</span>
                  {data.desc_p1_2}
                </p>
                <p>
                  {data.desc_p2_1}
                  <span className="font-semibold text-[#2F6F5E]">{data.desc_p2_highlight}</span>
                  {data.desc_p2_2}
                  <span className="font-semibold text-[#2F6F5E]">{data.desc_p2_highlight2}</span>
                  {data.desc_p2_3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
