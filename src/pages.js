import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>[홈페이지]</h1>
      <nav>
        <Link to="about">회사소개</Link>
        <br />
        <Link to="events">이벤트</Link>
        <br />
        <Link to="products">제품</Link>
        <br />
        <Link to="contact">고객지원</Link>
      </nav>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <h1>[회사소개]</h1>
    </div>
  );
};

export const Events = () => {
  return (
    <div>
      <h1>[이벤트]</h1>
    </div>
  );
};

export const Products = () => {
  return (
    <div>
      <h1>[제품]</h1>
    </div>
  );
};

export const Contact = () => {
  return (
    <div>
      <h1>[고객지원]</h1>
    </div>
  );
};
