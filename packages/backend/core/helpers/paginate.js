const paginate = (total, skip, limit) => {
  return {
    currentPage: skip / limit + 1,
    totalPages: Math.ceil(total / limit),
  };
};

module.exports = paginate;
