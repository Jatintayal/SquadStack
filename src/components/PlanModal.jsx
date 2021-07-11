import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PlanForm from './PlanForm';

export default function PlanModal(props) {
  const defaultFormData = {
    name: '',
    phone: '',
    email: '',
    leadsInAMonth: '',
    totalLeadsInCRM: '',
    crm: '',
    agents: '',
    biggestSources: '',
    howHeared: '',
  };

  const [selectedPlan, setSelectedPlan] = useState({});
  const [formData, setFormData] = useState(defaultFormData);

  /**
   * Sets states for selectedPlan
   */
  useEffect(() => {
    setSelectedPlan(props.plan);
  }, []);

  /**
   * Sends alert on form submission
   */
  const submitForm = () => {
    alert(`
    Hey, you filled these values:\n
    Name: ${formData.name}\n
    Phone: ${formData.phone}\n
    Email: ${formData.email}\n
    Leads in a month: ${formData.leadsInAMonth}\n
    Total leads in CRM: ${formData.totalLeadsInCRM}\n
    CRM: ${formData.crm}\n
    Agents: ${formData.agents}\n
    Biggest sources: ${formData.biggestSources}\n
    How you heard of us: ${formData.howHeared}
    `);
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' className='modal_title'>
          Get started with SquadVoice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='plan_selected'>
          <strong>Plan Selected:</strong>{' '}
          {selectedPlan ? selectedPlan.planName : 'Enterprise'}
        </div>
        <PlanForm formData={formData} setFormData={setFormData} />
      </Modal.Body>
      <Modal.Footer className='modal_footer'>
        <Button
          className='mt-3'
          variant='primary'
          type='submit'
          style={{
            backgroundColor: '#ee5a36',
            border: 'none',
            color: 'white',
            padding: '7px 12px',
            borderRadius: '5px',
          }}
          onClick={() => submitForm()}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
