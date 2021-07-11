import React from 'react';
import { attachDollar } from '../utils/plans';
import PlanButton from './PlanButton';

export default (props) => {
  const { item, showPopular, setModalShow, setSelectedPlan } = props;
  const {
    planName,
    qualifiedLeadsPerMonth,
    pricePerLiveTransfer,
    totalPlatformPrice,
    totalQualifiedLeadPrice,
  } = item;

  /**
   * @param totalQualifiedLeadPrice
   * @param totalPlatformPrice
   * @returns finalPrice
   *
   * Calculates final price
   */
  const calculateFinalPrice = (totalQualifiedLeadPrice, totalPlatformPrice) => {
    return totalQualifiedLeadPrice + totalPlatformPrice;
  };

  return (
    <div className='card'>
      {showPopular}
      {showPopular ? (
        <div className='popular'>Most Popular!</div>
      ) : (
        <div style={{ height: '50px' }}></div>
      )}
      <div className='plan_name bar'>{planName}</div>
      <div className='card_details_container'>
        <div className='per_qualified_leads'>
          <div className='per_qualified_leads_amount'>
            {attachDollar(pricePerLiveTransfer)}
          </div>
          <div>Per Qualified lead</div>
        </div>
        <div className='card_row'>
          <div>Qualified Leads Per Month</div>
          <div>{attachDollar(qualifiedLeadsPerMonth)}</div>
        </div>
        <div className='card_row'>
          <div>Platform Fee Per Month</div>
          <div>{attachDollar(totalPlatformPrice)}</div>
        </div>
      </div>
      <div className='bar'>
        {attachDollar(
          calculateFinalPrice(totalQualifiedLeadPrice, totalPlatformPrice)
        )}
        /mo
      </div>
      <PlanButton
        item={item}
        setModalShow={setModalShow}
        setSelectedPlan={setSelectedPlan}
        message='Start your trial'
      />
    </div>
  );
};
