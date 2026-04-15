interface StatCardProps {
  label: string;
  value: string;
  delta: string;
}

const StatCard = ({ label, value, delta }: StatCardProps) => (
  <div className="flex flex-col gap-[8px] rounded-[10px] border border-[#e5e7eb] bg-white px-[25px] py-[21px]">
    <p className="m-0 text-[13px] text-[#6b7280]" style={{ fontFamily: 'Pretendard', fontWeight: 500 }}>
      {label}
    </p>
    <div className="flex items-end justify-between">
      <p
        className="m-0 text-[32px] leading-[48px] text-[#111827]"
        style={{ fontFamily: 'Pretendard', fontWeight: 700 }}>
        {value}
      </p>
      <p className="m-0 text-[13px] text-[#10b981]" style={{ fontFamily: 'Pretendard' }}>
        {delta}
      </p>
    </div>
  </div>
);

export default StatCard;
