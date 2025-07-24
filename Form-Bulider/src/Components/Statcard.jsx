import React from 'react';
import '../Styles/statcard.css';
import { FaChartBar, FaRegFile, FaChartLine, FaCheckSquare } from 'react-icons/fa';

const StatCard = () => {

  const card=[{
    title:"New Leads",
    value:"198",
    change:"37.8",
    Period:"this month",
    icon:<FaChartBar/>,
    positive:true
  },
  {
    title:"Lost",
    value:"198",
    change:"37.8",
    Period:"this month",
    icon:<FaRegFile/>,
    positive:false
  },{
     title:"Total Leads",
     value:"23",
     change:"12.3",
     period:"this week",
    icon:<FaChartLine />,
    positive:true
  },{
    title:"Total Closed",
    value:"12k",
    change:"5.4",
    period:"from last month",
    icon:<FaCheckSquare />,
    positive:false
  }
]
  return (
<div className='statcardcon'>
      {card.map((card, index) => (
        <div className="stat-card" key={index}>
          <div className="blue-line"></div>
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-title">{card.title}</span>
              <div className="stat-icon">{card.icon}</div>
            </div>
            <div className="stat-value">{card.value}</div>
            <div className={`stat-change ${card.positive ? 'positive' : 'negative'}`}>
              {card.positive ? '+' : '-'}
              {card.change}% <span className="period-text">{card.period}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
  );
};

export default StatCard;
