export const starRatingTheme = (theme?: string) => {
  const resolvedTheme = theme === 'light' ? 'light' : 'dark';

  return {
    colors: {
      backgroundDefault: resolvedTheme === 'dark' ? '#333' : '#4dff7c28',
      backgroundColorHover: resolvedTheme === 'dark' ? '#555' : '#4dff7c',
      backgroundColorActive: resolvedTheme === 'dark' ? '#777' : '#4dff7c',
    },
    size: 24,
  };
};
