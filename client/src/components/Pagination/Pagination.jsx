import style from "./pagination.module.css";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages < 1) return null;

  return (
    <div className={style.pageCntnr}>
      {currentPage !== 1 && (
        <button
          className={style.leftBtn}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <Link className={style.icon} href="#" title="Página anterior">
            <ArrowLeftIcon />
          </Link>
        </button>
      )}
      <span className={style.pageIndicator}>
        {currentPage} de {totalPages}
      </span>
      {currentPage !== totalPages && (
        <button
          className="page-item"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <Link className={style.icon} href="#" title="Página siguiente">
            <ArrowRightIcon />
          </Link>
        </button>
      )}
    </div>
  );
};

export default Pagination;
