import React, { useState } from "react";
import "./Design.css";
import Modal from "./Modal";
import designData from "../data/designData";
import toolIcons from "../data/toolIcons";

const TOTAL_PAGES = 5; // 더미: 전체 페이지 수

function Design() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <section className="design" id="design">
      <div className="design__inner">
        <h2 className="design__heading">Design</h2>

        <div className="design-grid">
          {designData.map((item) => (
            <button
              className="design-card"
              key={item.id}
              onClick={() => setSelected(item)}
            >
              <div
                className="design-card__thumb"
                style={{ background: item.thumbnailColor }}
              >
                <img src={item.img} alt={item.title} />
              </div>
              <div className="design-card__body">
                <div className="design-card__category">{item.category}</div>
                <div className="design-card__name">{item.name}</div>
                <div className="design-card__tags">
                  {item.tools.map((tool, i) => (
                    <img
                      key={`${item.id}-${i}`} // ✅ key 추가
                      src={toolIcons[tool] || "/icons/default.png"}
                      alt={tool}
                      className="card__tag-icon"
                    />
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="design__footer">
          <button className="design__more">⟷ 더보기</button>
          <div className="design__pager">
            <span className="design__page-count">
              {String(page).padStart(2, "0")} / 0{TOTAL_PAGES}
            </span>
            <button
              className="design__pager-btn"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              ‹ 이전
            </button>
            <button
              className="design__pager-btn"
              disabled={page >= TOTAL_PAGES}
              onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            >
              다음 ›
            </button>
          </div>
        </div>
      </div>

      <Modal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Design;
