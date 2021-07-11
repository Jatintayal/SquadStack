import React from 'react';

export default (props) => {
  const { message, setSelectedPlan, setModalShow, item } = props;

  /**
   * sets plan details, opens the modal
   */
  const openModal = async () => {
    await setSelectedPlan(item);
    setModalShow(true);
  };

  return (
    <div className='trial_button' onClick={openModal}>
      {message}
    </div>
  );
};
