const icons = {};
const files =  import.meta.glob('./*.svg', { eager: true });

Object.entries(files).forEach(([path, icon]) => {
  const iconName = path
    .replace(/^\.\//, '') // Remove './' from the beginning of the path
    .replace(/\.\w+$/, '') // Remove file extension
    .replace(/^\w/, c => c.toUpperCase()); // Capitalize the first letter

  icons[iconName] = icon.default || icon;
});

export { icons };
