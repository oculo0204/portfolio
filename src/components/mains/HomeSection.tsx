import ArrowRight from '../../assets/icons/main/ArrowRight.svg';
import Profile from '../../assets/imgs/main/profile.png';

const HomeSection = () => {
  return (
    <div className="flex w-full items-center justify-around">
      {/* 왼쪽 */}
      <div className="mr-30 flex w-[819px] flex-col text-left">
        <h2 className="font-sans text-[64px] leading-[92px] font-normal tracking-[0.832px] text-[#111]">
          복잡한 문제를
        </h2>

        <h1 className="font-sans text-[128px] leading-[147px] font-bold tracking-[1.664px] text-[#111]">
          단순한 구조로 해결합니다
        </h1>

        <h3 className="font-sans text-[48px] font-medium text-[#666]">기술을 문서화하고 팀의 생산성을 높입니다</h3>

        <button className="bg-btn-main mt-8 flex h-[66px] w-[247px] items-center justify-center gap-[7.265px] rounded-xl px-[19.373px] py-[14.529px]">
          <span className="font-sans text-[21.794px] font-normal tracking-[0.044px] text-white">view projects</span>
          <img src={ArrowRight} alt="arrow" className="h-5 w-5" />
        </button>
      </div>

      {/* 오른쪽 */}
      <div>
        <img
          src={Profile}
          alt="profile"
          className="h-[601px] w-[644px] rounded-2xl object-cover shadow-[0_12px_30px_0_rgba(0,0,0,0.10)]"
        />
      </div>
    </div>
  );
};

export default HomeSection;
