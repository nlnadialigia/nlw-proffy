import React from 'react';
import {Link} from 'react-router-dom';
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

import './styles.css';

interface PageHeaderProps {
  title: string,
  description?: string,
  children?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description, children}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/" >
          <img src={backIcon} alt="Ícone de voltar" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
}

export default PageHeader;

