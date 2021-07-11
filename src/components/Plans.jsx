import React, { useEffect, useState } from 'react';
import PlanModal from './PlanModal';
import PlanCard from './PlanCard';
import EnterprisePlanCard from './EnterprisePlanCard';

export default function Plans(props) {
  const [plans, setPlans] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  /**
   * Sets plans state
   */
  useEffect(() => {
    setPlans(props.plans);
  }, [props.plans]);

  /**
   *
   * @param index
   * @returns is popular
   * Checks if current plan card is popular or not.
   * (There was no specific criteria defined in the shared document so I used index here)
   */
  const showPopular = (index) => {
    return index === 1;
  };

  return (
    <div className='cards_container'>
      {plans.map((item, index) => {
        return (
          <PlanCard
            key={index}
            item={item}
            showPopular={showPopular(index)}
            setModalShow={setModalShow}
            setSelectedPlan={setSelectedPlan}
          />
        );
      })}
      <EnterprisePlanCard
        setModalShow={setModalShow}
        setSelectedPlan={setSelectedPlan}
      />
      {modalShow && (
        <PlanModal
          show={modalShow}
          plan={selectedPlan}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
}
