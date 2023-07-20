import style from './pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pageCntnr}>
      {/* Botón "Prev" */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        anterior
      </button>

      {/* Números de página */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          style={{ backgroundColor: currentPage === number ? 'red' : '#385170' }}
        >
          {number}
        </button>
      ))}

      {/* Botón "Next" */}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        siguiente
      </button>
    </div>
  );
}

export default Pagination;
