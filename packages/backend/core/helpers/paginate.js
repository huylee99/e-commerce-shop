const paginate = (total, skip, offset) => {
  return {
    currentPage: skip / offset + 1,
    totalPages: Math.ceil(total / offset),
  };
};

module.exports = paginate;
