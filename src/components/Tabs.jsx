import React from 'react';

export default (props) => {
  const { changeTabs, isSelected } = props;
  const ranges = [
    '$100k-$200k',
    '$200k-$300k',
    '$300k-$400k',
    '$400k-$500k',
    '$500k+',
  ];

  return (
    <div className='tabs'>
      {ranges.map((range, index) => {
        return (
          <button
            onClick={() => changeTabs(range)}
            key={index}
            className={`tab ${isSelected(range) ? 'selected_tab' : ''}`}
          >
            {range}
          </button>
        );
      })}
    </div>
  );
};
