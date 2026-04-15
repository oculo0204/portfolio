interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

const ImagePlaceholder = ({ label, className = '' }: ImagePlaceholderProps) => (
  <div className={`flex items-center justify-center bg-[#d9d9d9] ${className}`}>
    <span className="text-[14px] text-[#888]" style={{ fontFamily: 'Pretendard', fontWeight: 400 }}>
      {label}
    </span>
  </div>
);

export default ImagePlaceholder;
