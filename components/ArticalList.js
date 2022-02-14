import React from 'react';
import articalStyle from '../styles/Artical.module.css'
const ArticalList = ({artical}) => {
  return (
    <div className={articalStyle.grid}>
        {artical.map((art) => (
            <h3>{art.name}</h3>
    ))}
    </div>
  )
};

export default ArticalList;
