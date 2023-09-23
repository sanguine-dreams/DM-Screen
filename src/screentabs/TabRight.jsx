import React, { useState } from 'react';

function TabRight({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons flex justify-center mt-5">
        {tabs.map((tab, index) => (
          <button 
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active bg-orange-100 text-red-900 rounded-t-lg py-8' : 'bg-gray-200 cursor-pointer text-red-900 rounded-t-lg py-8'}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content w-[45vw] p-5 bg-orange-100 overflow-y-scroll">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabRight;
