import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import levelsData from '../data/levels';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { motion } from 'framer-motion';
import { Howl } from 'howler';

const correctSound = new Howl({ src: ['https://freesound.org/data/previews/341/341695_5260877-lq.mp3'] });
const wrongSound = new Howl({ src: ['https://freesound.org/data/previews/109/109662_945474-lq.mp3'] });

export default function LevelPage() {
  const { state, dispatch } = useGame();
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState(false);
  const [modal, setModal] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);
  const { width, height } = useWindowSize();

  const lvl = levelsData.find(l => l.id === +levelId);
  const [answers, setAnswers] = useState({});
  const [dragState, setDragState] = useState({});
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    setShowCheckmark(false);
  }, [levelId]);

  if (!lvl) return <div className="text-center my-5">Уровень не найден</div>;

  const pick = (qid, value) => setAnswers(a => ({ ...a, [qid]: value }));

  const onDragStart = (e, id) => e.dataTransfer.setData('text', id);

  const onDrop = (e, zone) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');
    const item = lvl.miniGame?.items.find(i => i.id === id);
    if (!item) return;
    const ok = item.correctZone === zone;
    setDragState(ds => ({ ...ds, [id]: ok }));
    if (ok) {
      correctSound.play();
      setGameScore(s => s + lvl.miniGame.points);
    } else {
      wrongSound.play();
    }
  };

  const submit = () => {
    const q = lvl.questions;
    const correctCount = q.filter(qu => answers[qu.id] && qu.options.find(o => o.value === answers[qu.id]).correct).length;
    const testPoints = correctCount === q.length ? 100 : correctCount * 10;
    const total = testPoints + (gameScore || 0);
    dispatch({ type: 'COMPLETE_LEVEL', level: +levelId, points: total });
    setConfetti(true);
    setShowCheckmark(true);
    setTimeout(() => {
      setConfetti(false);
      setModal(true);
    }, 2000);
    setTimeout(() => setShowCheckmark(false), 2000);
  };

  const goToNextLevel = () => {
    setModal(false);
    setShowCheckmark(false);
    const isLastLevel = +levelId === levelsData.length;
    if (isLastLevel) {
      navigate('/');
    } else {
      navigate(`/level/${+levelId + 1}`);
    }
  };

  return (
    <>
      {confetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}
      {showCheckmark && +levelId < levelsData.length && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', fontSize: '4rem' }}>✅</div>
      )}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="container my-5">
          <h2>{`Уровень ${levelId}: ${lvl.title}`}</h2>

          <section className="mb-4">
            <h3>Обучающий материал</h3>
            <p>{lvl.instructions}</p>
          </section>

          <section className="mb-4">
            <h3>Тест</h3>
            {lvl.questions.map(q => (
              <div key={q.id} className="mb-3">
                <p>{q.question}</p>
                {q.options.map(o => (
                  <label key={o.value} className="d-block">
                    <input type="radio" name={q.id} onChange={() => pick(q.id, o.value)} /> {o.label}
                  </label>
                ))}
              </div>
            ))}
          </section>

          {lvl.miniGame && (
            <section className="mb-4">
              <h3>Мини-игра</h3>
              <div className="d-flex mb-3">
                {lvl.miniGame.items.map(i => (
                  <div
                    key={i.id}
                    id={i.id}
                    draggable
                    onDragStart={e => onDragStart(e, i.id)}
                    className="border p-2 m-1"
                    style={{
                      backgroundColor:
                        dragState[i.id] === true
                          ? '#c8e6c9'
                          : dragState[i.id] === false
                          ? '#ffcdd2'
                          : ''
                    }}
                  >
                    {i.label}
                  </div>
                ))}
              </div>
              <div className="d-flex">
                {lvl.miniGame.zones.map(z => (
                  <div
                    key={z.key}
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => onDrop(e, z.key)}
                    className="flex-fill border p-3 m-1 text-center"
                  >
                    {z.label}
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="text-center mt-4">
            <motion.button whileHover={{ scale: 1.05 }} className="btn btn-primary" onClick={submit}>
              Завершить
            </motion.button>
            <Link to="/" className="btn btn-secondary ms-2">
              Назад
            </Link>
          </div>

          {modal && (
            <div className="modal show d-block">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Поздравляем!</h5>
                  </div>
                  <div className="modal-body">
                    <p>Баллы начислены.</p>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary" onClick={goToNextLevel}>
                      Далее
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
