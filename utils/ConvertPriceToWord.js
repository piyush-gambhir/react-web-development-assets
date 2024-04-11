export default function ConvertPriceToWord(price) {
    if (price < 1000) {
      return price.toString(); // For prices under 1000, return as-is
    } else {
      const thousands = Math.floor(price / 1000);
      const remainder = price % 1000;
  
      if (remainder === 0) {
        return `${thousands}k`; // For whole thousands
      } else {
        const hundreds = Math.floor(remainder / 100);
        return `${thousands}.${hundreds}k`; // For prices with decimals
      }
    }
  }