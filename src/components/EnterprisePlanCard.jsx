import React from 'react';
import PlanButton from './PlanButton';

export default (props) => {
  const { setModalShow, setSelectedPlan } = props;

  return (
    <div className='card'>
      <div>
        <div style={{ height: '45px' }}></div>
        <div className='bar'>Enterprise</div>
      </div>
      <div className='msg'>
        <span>Want more than 80 qualified leads each month ?</span>
      </div>
      <PlanButton
        setModalShow={setModalShow}
        setSelectedPlan={setSelectedPlan}
        message='Get in touch'
      />
    </div>
  );
};
