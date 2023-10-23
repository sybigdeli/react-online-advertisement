import React, { useState } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="px-4 py-2 mx-1 border rounded hover:bg-gray-200"
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-4 py-2 mx-1 border rounded hover:bg-gray-200 ${
            currentPage === index + 1 ? 'bg-gray-200' : ''
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-4 py-2 mx-1 border rounded hover:bg-gray-200"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;