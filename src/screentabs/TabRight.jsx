import React, { useState } from 'react';

function TabRight({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabRight;
