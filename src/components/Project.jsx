import React, { useState } from "react";
import "./Project.css";
import Modal from "./Modal";
import projectData from "../data/projectData";

const TOTAL_PAGES = 5; // 더미: 전체 페이지 수

function Project() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <section className="project" id="project">
      <h2 className="project__heading">Project</h2>

      <div className="card-grid">
        {projectData.map((item) => (
          <button
            className="card"
            key={item.id}
            onClick={() => setSelected(item)}
          >
            <div
              className="card__thumb"
              style={{ background: item.thumbnailColor }}
            >
              {item.title}
            </div>
            <div className="card__body">
              <div className="card__category">{item.category}</div>
              <div className="card__name">{item.name}</div>
              <div className="card__tags">
                {item.tools.map((tool, i) => (
                  <span className="card__tag-dot" key={`${item.id}-${i}`}>
                    {tool[0]}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="project__footer">
        <button className="project__more">⟷ 더보기</button>
        <div className="project__pager">
          <span className="project__page-count">
            {String(page).padStart(2, "0")} / 0{TOTAL_PAGES}
          </span>
          <button
            className="project__pager-btn"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            ‹ 이전
          </button>
          <button
            className="project__pager-btn"
            disabled={page >= TOTAL_PAGES}
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          >
            다음 ›
          </button>
        </div>
      </div>

      <Modal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Project;
