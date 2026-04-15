export interface Paragraph {
  label: string;
  content: string;
}

export interface ContentCardProps {
  title: string;
  tags: string[];
  paragraphs: Paragraph[];
}

const ContentCard = ({ title, tags, paragraphs }: ContentCardProps) => (
  <div className="overflow-hidden rounded-[13px] border border-[#9e9e9e] bg-white/80">
    {/* Header */}
    <div className="flex h-[84px] items-center gap-[16px] bg-[rgba(255,254,253,0.81)] px-[40px]">
      <span
        className="text-[28px] whitespace-nowrap text-[#121212]"
        style={{ fontFamily: 'Pretendard', fontWeight: 700, lineHeight: '36px' }}>
        {title}
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex h-[44px] shrink-0 items-center rounded-full border-2 border-[#636363] px-[20px] text-[16px] whitespace-nowrap text-[#636363]"
          style={{ fontFamily: 'Pretendard', fontWeight: 500 }}>
          {tag}
        </span>
      ))}
    </div>
    {/* Divider */}
    <div className="h-px bg-[#9e9e9e]" />
    {/* Body */}
    <div className="flex flex-col gap-[20px] px-[40px] py-[32px]">
      {paragraphs.map((p, i) => (
        <div key={i}>
          <p
            className="mb-0 leading-[28px] text-[rgba(18,18,18,0.81)]"
            style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px' }}>
            {p.label}
          </p>
          <p
            className="m-0 leading-[28px] text-[rgba(18,18,18,0.81)]"
            style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px' }}>
            {p.content}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default ContentCard;
