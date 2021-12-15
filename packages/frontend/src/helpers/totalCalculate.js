const totalCalculate = (type, arr = []) => {
  const total = arr.reduce((prev, curr) => {
    return type === 'price'
      ? parseFloat(+prev + +(curr.product.price * curr.quantity)).toFixed(2)
      : +parseInt(prev) + +parseInt(curr.quantity);
  }, 0);

  return total;
};

export { totalCalculate };
