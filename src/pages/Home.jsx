import React, { useState, useEffect } from 'react';
import PlansService from '../services/plans';
import Plan from '../components/Plans';
import Tabs from '../components/Tabs';

export default function Home() {
  const defaultRange = '$300k-$400k';

  const [plans, setPlans] = useState([]);
  const [currentPlans, setCurrentPlans] = useState([]);
  const [selectedRange, setSelectedRange] = useState(defaultRange);

  /**
   * sets range in local storage, filters out plans for the current range
   */
  useEffect(async () => {
    const range = localStorage.getItem('range');
    if (range) setSelectedRange(range);
    const { plans } = await PlansService.getPlans();
    setPlans(plans);
    setCurrentPlans(
      plans.filter((plan) => plan.averageHomePrice === defaultRange)
    );
  }, []);

  /**
   * @param range
   * sets range in tab, filters current plans
   */
  const changeTabs = (range) => {
    setSelectedRange(range);
    localStorage.setItem('range', range);
    setCurrentPlans(plans.filter((plan) => plan.averageHomePrice === range));
  };

  /**
   * @param range
   * checks if current range is the selected range
   */
  const isSelected = (range) => {
    return range === selectedRange;
  };

  return (
    <>
      <div className='parant_container'>
        <Tabs changeTabs={changeTabs} isSelected={isSelected} />
        <Plan plans={currentPlans} />
      </div>
    </>
  );
}
