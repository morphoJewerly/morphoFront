import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import styles from './Accordion.module.css';
import { Link } from 'react-router-dom';

const AccordionItem = ({ title, content1, content2 ,content3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles['accordion-item']}>
      <div className={styles['accordion-header']} onClick={toggleAccordion}>
        <p>{title}</p>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>&#9660;</span>
      </div>
      <Collapse isOpened={isOpen}>
        <Link to="/oferta"><div className={styles['accordion-content']}>{content1}</div></Link>
        <Link to="/deliverinfo"><div className={styles['accordion-content']}>{content2}</div></Link>
        <Link to="/turnaround"><div className={styles['accordion-content']}>{content3}</div></Link>
      </Collapse>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <AccordionItem
        title="Інформація для покупців"
        content1="Угода користувача"
        content2="Інформація про доставку"
        content3="Повернення товару"
      />
    </div>
  );
};

export default Accordion;