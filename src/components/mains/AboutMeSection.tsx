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
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 text-left">
      {/* 1. 상단 타이틀: 섹션 전체의 제목 */}
      <h2 className="font-sans text-[68px] leading-normal font-semibold tracking-tight text-[#111]">{data.title}</h2>

      {/* 2. 카드 컨테이너: 왼쪽과 오른쪽 카드를 가로로 배치 */}
      <div className="flex w-full flex-row items-stretch gap-12">
        {/* [왼쪽] 프로필 카드: 너비 고정 */}
        <div className="flex h-[748px] w-[520px] shrink-0 flex-col rounded-[19px] border border-gray-200 bg-white p-10 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.12)]">
          {/* 헤더: 이름 & 직업 */}
          <div className="mb-12">
            <h2 className="mb-[20px] font-['Inter'] text-[36px] leading-[40px] font-medium text-[#2C2416]">
              {data.name}
            </h2>
            <p className="font-sans text-[26px] leading-[20px] font-bold text-[rgba(47,111,94,0.60)]">{data.job}</p>
          </div>

          {/* 리스트: 상세 정보 (InfoItem) */}
          <div className="flex flex-1 flex-col gap-6">
            <InfoItem Icon={Location} label={data.location_label} value={data.location_value} />
            <InfoItem Icon={Email} label={data.email_label} value={data.email_value} />
            <InfoItem Icon={Graduate} label={data.edu_label} value={data.edu_value} />
          </div>

          {/* 하단: 소셜 아이콘 */}
          <div className="mt-auto flex items-center justify-end gap-[13.48px] border-t border-gray-50 pt-8">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#333] transition hover:scale-110">
              <img src={GitHubIcon} alt="Github" className="h-[33.7px] w-[24px]" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#333] transition hover:scale-110">
              <img src={LinkedinIcon} alt="Linkedin" className="h-[24px] w-[24px]" />
            </a>

            <a
              href={PERSONAL_INFO.blog}
              target="_blank"
              rel="noreferrer"
              className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#333] transition hover:scale-110">
              <img src={BlogIcon} alt="Blog" className="h-[24px] w-[24px]" />
            </a>
          </div>
        </div>

        {/* [오른쪽] 콘텐츠 카드: 남은 공간 모두 차지 */}
        <div className="relative flex flex-1 items-center rounded-[40px] border border-gray-200 bg-white p-16 shadow-[0_40px_120px_-72px_rgba(15,23,42,0.14)]">
          <div className="space-y-12">
            {/* 메인 타이틀 부분 */}
            <p className="font-['Pretendard'] text-[40px] leading-[1.6] font-normal text-[#111]">
              {data.desc_title_p1}
              <span className="font-semibold text-[#2F6F5E]">{data.desc_title_highlight1}</span>
              {data.desc_title_p2}
              <span className="font-semibold text-[#2F6F5E]">{data.desc_title_highlight2}</span>
              {data.desc_title_p3}
            </p>

            <div className="space-y-8 font-['Pretendard'] text-[40px] leading-[1.6] font-normal text-[#111]">
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
  );
};

export default AboutMeSection;
