import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ item, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-card">
        <button
          className="modal-card__close"
          onClick={onClose}
          aria-label="닫기"
        >
          ✕
        </button>

        <div className="modal-card__thumb">
          <img src={item.img} alt={item.title} />
        </div>

        <div className="modal-card__category">{item.category}</div>
        <h3 className="modal-card__title">{item.title}</h3>

        <p className="modal-card__summary">{item.detail.summary}</p>

        <dl className="modal-card__meta">
          <dt>역할</dt>
          <dd>{item.detail.role}</dd>

          <dt>기간</dt>
          <dd>{item.detail.period}</dd>

          <dt>스택</dt>
          <dd>{item.detail.stack.join(", ")}</dd>
        </dl>

        <ul className="modal-card__points">
          {item.detail.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="modal-card__tags">
          {item.tools.map((tool) => (
            <span key={tool} className="modal-card__tag">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
