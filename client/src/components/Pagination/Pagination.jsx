import React from 'react';
import style from './pagination.module.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if(totalPages < 1) return null;

  return (
    <div className={style.pageCntnr}>{currentPage !== 1 && (
      <button className={style.leftBtn} onClick={() => onPageChange(currentPage - 1)}>
        <a className="page-link" href="#">
          <ArrowLeftIcon />
        </a>
      </button>
    )}
      <span className="page-indicator">
        {currentPage} de {totalPages}
      </span>
      {currentPage !== totalPages && (
        <button
          className="page-item"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <a className="page-link" href="#">
            <ArrowRightIcon />
          </a>
        </button>
      )}
    </div>
  );
};

export default Pagination;
