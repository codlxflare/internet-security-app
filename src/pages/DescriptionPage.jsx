import React from 'react';
import { Link } from 'react-router-dom';
export default function DescriptionPage(){
  return <div className="container my-5">
    <header className="hero-section"><h1>О проекте</h1></header>
    <section className="my-4">
      <h2>Цель игры</h2>
      <p>Эта игра создана для обучения детей и подростков безопасному поведению в интернете.</p>
    </section>
    <section className="my-4">
      <h2>Как начисляются баллы</h2>
      <ul>
        <li>Правильный ответ на вопрос: 10 баллов.</li>
        <li>Прохождение уровня без ошибок: +100 баллов.</li>
        <li>Успешное выполнение мини-игры: 20 баллов.</li>
      </ul>
    </section>
    <section className="my-4">
      <h2>Как использовать баллы</h2>
      <p>Баллы можно обменять в магазине на скины, музыку и другие награды!</p>
    </section>
    <Link to="/" className="btn btn-secondary btn-back">Вернуться на главную</Link>
  </div>;
}