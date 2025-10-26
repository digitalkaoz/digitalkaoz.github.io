import React from 'react';
import '../style/icon.scss';

type Props = {
  icon: string;
  name?: string;
};

const Icon: React.FC<Props> = ({ icon, name }) => {
  const className = name ? `icon icon-${name}` : 'icon';

  if (icon.includes('<svg')) {
    // Extract existing class from SVG if present
    const existingClassMatch = icon.match(/class="([^"]*)"/);
    const existingClass = existingClassMatch ? existingClassMatch[1] : '';

    // Combine classes
    const combinedClass = `${className} ${existingClass}`.trim();

    // Insert or update class attribute in SVG
    let processedSvg = icon;
    if (existingClassMatch) {
      // Replace existing class
      processedSvg = icon.replace(/class="[^"]*"/, `class="${combinedClass}"`);
    } else {
      // Insert new class attribute after svg tag
      processedSvg = icon.replace(/<svg/, `<svg class="${combinedClass}"`);
    }

    return <div dangerouslySetInnerHTML={{ __html: processedSvg }} />;
  }

  // For image URLs (including imported SVGs)
  return <img src={icon} className={className} alt={name ?? 'icon'} />;
};

export default Icon;
