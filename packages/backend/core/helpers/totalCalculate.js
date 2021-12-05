const totalCalculate = (arr = []) => {
  const total = arr.reduce((prev, curr) => {
    return (
      +parseFloat(prev).toFixed(2) +
      +parseFloat(curr.product.price * curr.quantity).toFixed(2)
    );
  }, 0);

  return total;
};

export { totalCalculate };
