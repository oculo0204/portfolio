interface SectionTitleProps {
  italic?: boolean;
  children: React.ReactNode;
}

const SectionTitle = ({ italic = true, children }: SectionTitleProps) => (
  <h2
    className="m-0 text-[64px] text-[rgba(18,18,18,0.81)]"
    style={{
      fontFamily: 'Pretendard',
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: 500,
      lineHeight: '80px',
      textDecoration: italic ? 'underline' : 'none',
    }}>
    {children}
  </h2>
);

export default SectionTitle;
