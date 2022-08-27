
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


export const formatDate = (initialDate: string) => {
  const date = new Date(initialDate);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);

  return `${month} ${day}, ${year}`;
};
