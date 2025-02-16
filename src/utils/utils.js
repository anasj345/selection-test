export const sortDomino = (domino, order = "asc") => {
  return [...domino].sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA === sumB) {
      if (order === "asc") {
        return a[0] - b[0];
      } else {
        return b[0] - a[0];
      }
    }

    if (order === "asc") {
      return sumA - sumB;
    } else {
      return sumB - sumA;
    }
  });
};

export const findDoubleDomino = (domino) => {
  let count = 0;
  for (let i = 0; i < domino.length; i++) {
    const [left, right] = domino[i];
    if (left === right) {
      count++;
    }
  }
  return count;
};

export const flipDomino = (domino) => {
  return domino.map(([left, right]) => [right, left]);
};
