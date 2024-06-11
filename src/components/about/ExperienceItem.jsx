import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import Modal from "react-modal";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const formatStringToParagraph = (text, bulletPoint) => {
  const parts = text.split(/_b_(.*?)_b_/g);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "10px",
      }}
    >
      {!!bulletPoint && (
        <MdOutlineKeyboardArrowRight
          style={{ minWidth: "1rem", marginRight: "10px", marginTop: "8px" }}
        />
      )}
      <p style={{ margin: 0 }}>
        {parts.map((part, i) => (i % 2 === 1 ? <b key={i}>{part}</b> : part))}
      </p>
    </div>
  );
};

export const ExperienceItem = (props) => {
  const { title, timePeriod, employer, link, content, extract } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="portfolio_about_experience">
      <div className="experience_left">
        <h6>{timePeriod}</h6>

        <div className="separator">
          <span></span>
          <HiChevronRight />
        </div>
        <p>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              {employer}
            </a>
          ) : (
            employer
          )}
        </p>
      </div>

      <div className="experience_right">
        <h4>{title}</h4>
        {extract && formatStringToParagraph(extract)}
        {!!content?.length && (
          <button onClick={toggleModal}>Ver detalles</button>
        )}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="custom-modal experience_modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="experience_modal_content">
          {content?.map((v) => formatStringToParagraph(v, true))}
        </div>
      </Modal>
    </div>
  );
};
