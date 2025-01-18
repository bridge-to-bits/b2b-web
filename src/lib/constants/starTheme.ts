export const starRatingTheme = (theme?: string) => {
  const resolvedTheme = theme === 'light' ? 'light' : 'dark';

  return {
    colors: {
      backgroundDefault: resolvedTheme === 'dark' ? '#5b55e7' : '#d27546',
      backgroundColorHover: resolvedTheme === 'dark' ? '#100ad9' : '#ff5e00',
      backgroundColorActive: resolvedTheme === 'dark' ? '#1E18C2' : '#ec5d0b',
    },
    size: 24,
  };
};
