import React from "react";
import "./Contact.css";

function Contact() {
  const handleDownload = () => {
    // 더미: 실제 이력서 PDF 경로로 교체해서 사용
    alert("이력서 PDF 다운로드 (더미 동작)");
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Thank you</h2>

      <div className="contact__row">
        <div className="contact__info">
          <div className="contact__line">
            <span className="contact__label">이메일</span>
            <span className="contact__value">retkddbs0519@naver.com</span>
          </div>
          <div className="contact__line">
            <span className="contact__label">전화</span>
            <span className="contact__value">010-8357-6870</span>
          </div>
        </div>

        <button className="contact__resume-btn" onClick={handleDownload}>
          이력서
          <br />
          PDF 다운로드
        </button>
      </div>
    </section>
  );
}

export default Contact;
