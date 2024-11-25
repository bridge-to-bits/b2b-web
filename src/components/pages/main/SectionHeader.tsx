interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return (
    <div className="w-full bg-gradient-to-r from-[var(--blue)] via-transparent to-transparent py-[1%]">
      <h2 className="pl-[5%] text-[25px] font-medium font-rubik text-white leading-none">
        {text}
      </h2>
    </div>
  );
};

export default SectionHeader;
