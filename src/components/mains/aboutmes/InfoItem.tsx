interface InfoItemProps {
  Icon: string;
  label: string;
  value: string;
}

const InfoItem = ({ Icon, label, value }: InfoItemProps) => {
  return (
    // 1920기준 74.148px -> 약 3.8vw
    <div className="flex min-h-[clamp(60px,3.8vw,80px)] w-full items-center gap-[1vw] self-stretch">
      {/* 33.704px -> 약 1.75vw */}
      <img
        src={Icon}
        alt={label}
        className="h-[clamp(24px,1.75vw,34px)] w-[clamp(24px,1.75vw,34px)] shrink-0 object-contain"
      />

      <div className="ml-[1vw] flex flex-col items-start justify-center gap-[0.3vw]">
        {/* 20.222px -> 약 1.05vw */}
        <p className="font-['Inter'] text-[clamp(14px,1.05vw,20px)] leading-tight font-normal tracking-wider text-[#8B7355] uppercase">
          {label}
        </p>

        {/* 26.963px -> 약 1.4vw */}
        <p className="font-['Pretendard'] text-[clamp(18px,1.4vw,27px)] leading-tight font-normal break-keep text-[#2C2416]">
          {value}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
