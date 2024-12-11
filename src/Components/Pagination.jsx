/* eslint-disable react/prop-types */
// Pagination component (assuming it's now in its own file)

function Pagination({ currentPage, setCurrentPage, totalItems, itemsPerPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fa-solid fa-caret-left"></i>
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="fa-solid fa-caret-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
