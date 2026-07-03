import React, { useRef, useState } from "react";
import "./Project.css";
import Modal from "./Modal";
import projectData from "../data/projectData";
import toolIcons from "../data/toolIcons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Project() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const swiperRef = useRef(null);

  return (
    <section className="project" id="project">
      <h2 className="project__heading">Project</h2>

      <Swiper
        className="card-grid"
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setPage(
            Math.floor(swiper.activeIndex / swiper.params.slidesPerGroup) + 1,
          );
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {projectData.map((item) => (
          <SwiperSlide key={item.id}>
            <button className="card" onClick={() => setSelected(item)}>
              <div
                className="card__thumb"
                style={{ background: item.thumbnailColor }}
              >
                <img src={item.img} alt={item.title} />
              </div>

              <div className="card__body">
                <div className="card__category">{item.category}</div>

                <div className="card__name">{item.name}</div>

                <div className="card__tags">
                  {item.tools.map((tool, i) => (
                    <img
                      key={`${item.id}-${i}`}
                      src={toolIcons[tool] || "/icons/default.png"}
                      alt={tool}
                      className="card__tag-icon"
                    />
                  ))}
                </div>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="project__footer">
        <button className="project__more">⟷ 더보기</button>

        <div className="project__pager">
          <span className="project__page-count">
            {String(page).padStart(2, "0")} /{" "}
            {String(Math.ceil(projectData.length / 3)).padStart(2, "0")}
          </span>

          <button
            className="project__pager-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ‹ 이전
          </button>

          <button
            className="project__pager-btn"
            onClick={() => swiperRef.current?.slideNext()}
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
