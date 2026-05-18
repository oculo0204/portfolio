import ArrowRight from '../../assets/icons/main/ArrowRight.svg';
import Profile from '../../assets/imgs/main/profile.png';

const HomeSection = () => {
  return (
    <div className="flex w-full items-center justify-between gap-[4vw]">
      {/* 왼쪽 콘텐츠 영역 */}
      <div className="flex flex-1 flex-col text-left">
        {/* 1920기준 64px -> clamp 적용 (최소 32px, 최대 64px) */}
        <h2 className="font-sans text-[clamp(2rem,3.3vw,4rem)] leading-[1.4] font-normal tracking-tight text-[#111]">
          복잡한 문제를
        </h2>

        {/* 1920기준 128px -> clamp 적용 (최소 60px, 최대 128px) */}
        <h1 className="font-sans text-[clamp(3.75rem,6.6vw,8rem)] leading-[1.1] font-bold tracking-tight break-keep text-[#111]">
          단순한 구조로 해결합니다
        </h1>

        {/* 1920기준 48px -> clamp 적용 */}
        <h3 className="mt-[2vh] font-sans text-[clamp(1.5rem,2.5vw,3rem)] font-medium break-keep text-[#666]">
          기술을 문서화하고 팀의 생산성을 높입니다
        </h3>

        {/* 버튼 크기 및 폰트도 vw 단위에 비례하도록 조정 */}
        <button className="bg-btn-main mt-[4vh] flex h-[clamp(50px,3.4vw,66px)] w-[clamp(180px,12.8vw,247px)] items-center justify-center gap-[0.5vw] rounded-xl transition-transform hover:scale-105">
          <span className="font-sans text-[clamp(14px,1.1vw,22px)] font-normal tracking-wider text-white uppercase">
            view projects
          </span>
          <img src={ArrowRight} alt="arrow" className="h-[1.2vw] min-h-[16px] w-[1.2vw] min-w-[16px]" />
        </button>
      </div>

      {/* 오른쪽 이미지 영역 */}
      <div className="flex flex-1 justify-end">
        <img
          src={Profile}
          alt="profile"
          // 고정 644px -> 33vw(화면의 약 1/3)로 변경, aspect ratio 유지
          className="aspect-[644/601] w-full max-w-[644px] rounded-[2vw] object-cover shadow-[0_12px_30px_0_rgba(0,0,0,0.10)]"
        />
      </div>
    </div>
  );
};

export default HomeSection;
