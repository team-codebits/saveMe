export const calculateSumValues = (extracts) => {
  let sum = 0;

  for (let i = 0; i < extracts.length; i++) {
    const extract = extracts[i];
    if (extract.value) {
      const value = parseFloat(extract.value);
      if (extract.selectedOption === "expense") {
        sum -= value;
      } else {
        sum += value;
      }
    }
  }

  return sum;
};
