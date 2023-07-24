import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import animations from './animations.module.css'; // Імпорт стилів з animations.module.css
import styles from './PageTransition.module.css'; // Імпорт стилів з PageTransition.module.css

const PageTransition = ({ children }) => {
  const location = useLocation();
  console.log(location)
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={2000} classNames={animations.page}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;