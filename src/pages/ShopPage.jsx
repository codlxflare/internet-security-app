import React from 'react';
import { useGame } from '../context/GameContext';
import { motion } from 'framer-motion';
export default function ShopPage(){
  const { state, dispatch } = useGame();
  const items = [
    { id:1, title:'Скин для персонажа', cost:100, image:'/assets/images/selector.png' },
    { id:2, title:'Фоновая музыка', cost:150, image:'/assets/images/music.png' },
    { id:3, title:'Эмблема', cost:200, image:'/assets/images/avatar.png' }
  ];
  const buy = i => { if(state.score>=i.cost) dispatch({type:'COMPLETE_LEVEL', level:0, points:-i.cost}); else alert('Недостаточно баллов'); };
  return <div className="container my-5">
    <h2>Магазин</h2>
    <div className="row">
      {items.map(i=><motion.div key={i.id} className="col-md-4 mb-3" whileHover={{scale:1.05}}>
        <div className="card text-center p-3">
          <img src={i.image} alt={i.title} style={{maxHeight:'120px'}}/>
          <h5>{i.title}</h5><p>Цена: {i.cost}</p>
          <button className="btn btn-success" onClick={()=>buy(i)}>Купить</button>
        </div>
      </motion.div>)}
    </div>
  </div>;
}