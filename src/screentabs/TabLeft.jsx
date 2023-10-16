import React, { useState } from 'react';

function TabLeft({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='tab-parent'>
      <div className="tab-buttons flex mt-5 justify-between" >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active bg-orange-100 text-red-900 rounded-t-2xl py-3  w-[32%] px-1' : 'bg-gray-200 cursor-pointer text-red-900 rounded-t-2xl py-3  w-[32%] px-1'}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div  className="tab-content-left w-[48vw] bg-orange-100 overflow-y-scroll h-[91vh] scale-x-[-1]">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabLeft;
