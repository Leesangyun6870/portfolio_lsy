import React, { useRef, useState } from "react";
import "./Design.css";
import Modal from "./Modal";
import designData from "../data/designData";
import toolIcons from "../data/toolIcons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Design() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const swiperRef = useRef(null);

  return (
    <section className="design" id="design">
      <div className="design__inner">
        <h2 className="design__heading">Design</h2>

        <Swiper
          className="design-grid"
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
          {designData.map((item) => (
            <SwiperSlide key={item.id}>
              <button className="design-card" onClick={() => setSelected(item)}>
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

        <div className="design__footer">
          <button className="design__more">⟷ 더보기</button>

          <div className="design__pager">
            <span className="design__page-count">
              {String(page).padStart(2, "0")} /{" "}
              {String(Math.ceil(designData.length / 3)).padStart(2, "0")}
            </span>

            <button
              className="design__pager-btn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ‹ 이전
            </button>

            <button
              className="design__pager-btn"
              onClick={() => swiperRef.current?.slideNext()}
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
