
export const getEqualCols = (array: object[], colCount: number, res: any[]) => {
  const itemsPerCol = Math.ceil(array.length / colCount);

  for (let item = 0; item < colCount; item++) {
    for (let i = 0; i < itemsPerCol; i++) {
      const value = array[i + item * itemsPerCol];
      if (!value) {
        continue;
      }
      (res[item] as object[]).push(value);
    }
  }

  return res;
};

