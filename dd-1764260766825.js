/*
 * Title: dd
 * Language: javascript
 * Description: No description
 * Created: 2025-11-27T16:26:06.825Z
 * Author: SATHIYAMURTHY-GIT
 */

export const formatTimestamp = (timestamp) => {
  if (!timestamp || timestamp === 'unknown') return '26/11/2025';
  
  try {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch (error) {
    return '26/11/2025';
  }
};