import React from 'react';
import "./HeaderOption.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOption({avatar,Icon,title,onClick}) {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="header_options">

      {Icon && <Icon className="headerOptions_icon"/>}

      {avatar && (
      <Avatar className="headerOptions_icon" > {user?.email[0]}</Avatar> )}
      <h3 className='headerOption_title'>{title}</h3>

    </div>
  )
}

export default HeaderOption