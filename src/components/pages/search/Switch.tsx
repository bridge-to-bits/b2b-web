interface SwitchProps {
  onLabel: string;
  offLabel: string;
  isOn: boolean;
  onToggle: () => void;
}

export const Switch: React.FC<SwitchProps> = ({
    onLabel,
    offLabel,
    isOn,
    onToggle,
  }) => {
  return (
    <div className="flex items-center gap-10">
      {/* Label */}
      <span
        className={`px-8 py-3 rounded-xl text-sm ${
          isOn
            ? "bg-white text-graphite"
            : "bg-graphite text-white"
        }`}
      >
        {isOn ? onLabel : offLabel}
      </span>

      {/* Toggle Switch */}
      <button
        onClick={onToggle}
        className='w-12 h-6 rounded-full relative transition-colors bg-orange-500'
      >
        <div
          className={`w-5 h-5 bg-background rounded-full absolute top-0.5 transition-transform ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};