export   const styleLabel = (label: string): string => {
    return label
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(' ')
      .map(word => word.charAt(0).toLowerCase() + word.slice(1))
      .join(' ')
      .replace(/^./, c => c.toUpperCase());
  };