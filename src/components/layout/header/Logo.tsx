import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const LogoIcon = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <img
        className="lg:w-20 lg:h-20 w-16 h-16"
        src="/logo.svg"
        alt="Logo icon"
      />
    );
  }

  return (
    <img
      className="lg:w-20 lg:h-20 w-16 h-16"
      src={theme === 'dark' ? '/logo_dark.svg' : '/logo.svg'}
      alt="Logo icon"
    />
  );
};