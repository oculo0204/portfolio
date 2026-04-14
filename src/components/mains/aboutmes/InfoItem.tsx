interface InfoItemProps {
  Icon: string;
  label: string;
  value: string;
}

const InfoItem = ({ Icon, label, value }: InfoItemProps) => {
  return (
    /* 컨테이너: height 74.148px, flex-shrink 0, align-self stretch */
    <div className="flex h-[74.148px] w-full shrink-0 items-center gap-[20px] self-stretch">
      {/* svg 크기: width/height 33.704px */}
      <img src={Icon} alt={label} className="h-[33.704px] w-[33.704px] object-contain" />

      <div className="ml-[20px] flex h-[74.148px] w-full flex-col items-start justify-start gap-[6.741px]">
        {/* 첫번째 p (Label): #8B7355, 20.222px, Inter */}
        <p className="font-['Inter'] text-[20.222px] leading-[26.963px] font-normal tracking-[0.506px] text-[#8B7355] uppercase">
          {label}
        </p>

        {/* 두번째 p (Value): #2C2416, 26.963px, Pretendard */}
        <p className="font-['Pretendard'] text-[26.963px] leading-[40.444px] font-normal text-[#2C2416]">{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;
