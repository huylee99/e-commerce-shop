const Pagination = ({ data, setPage }) => {
  return (
    <div>
      <div className='flex justify-center gap-2'>
        {data.currentPage === 1 ? null : (
          <button
            className='mr-4 hover:underline hover:text-primary'
            onClick={() => setPage(data.currentPage - 1)}
          >
            Previous
          </button>
        )}

        {new Array(data.totalPages).fill('').map((_, index) => (
          <button
            className={`${
              index + 1 === data.currentPage
                ? 'bg-primary text-white'
                : 'border border-primary'
            } w-8 h-8 text-sm text-center rounded-sm hover:bg-primary hover:text-white font-semibold`}
            key={index}
            onClick={() => setPage(index + 1)}
            disabled={index + 1 === data.currentPage}
          >
            {index + 1}
          </button>
        ))}
        {data.currentPage === data.totalPages ? null : (
          <button
            className='ml-4 hover:underline hover:text-primary'
            onClick={() => setPage(data.currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
