import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default (props) => {
  const { formData, setFormData } = props;

  /**
   * @param key
   * @param value
   * Manages all the changes in the form
   */
  const changeFormDetails = (key, value) => {
    let tempData = { ...formData };
    Object.defineProperty(tempData, key, { value });
    setFormData(tempData);
  };

  /**
   * @param type
   * @param value
   * @return is checked
   * Checks if current checkbox is checked or not
   */
  const isChecked = (type, value) => {
    return formData[type] === value;
  };

  return (
    <Form className='start_trial_form'>
      <Form.Group controlId='formBasicName'>
        <Form.Label className='start_trial_form_label'>Name</Form.Label>
        <Form.Control
          type='text'
          value={formData.name}
          onChange={(e) => changeFormDetails('name', e.target.value)}
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Label className='start_trial_form_label'>Email</Form.Label>
          <Form.Control
            value={formData.email}
            onChange={(e) => changeFormDetails('email', e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label className='start_trial_form_label'>Phone</Form.Label>
          <Form.Control
            value={formData.phone}
            onChange={(e) => changeFormDetails('phone', e.target.value)}
          />
        </Col>
      </Row>
      <Row className='mt-3 mb-3'>
        <Col>
          <Form.Label className='start_trial_form_label'>
            Number of leads you generate in a month
          </Form.Label>
          <Form.Control
            type='number'
            value={formData.leadsInAMonth}
            onChange={(e) => changeFormDetails('leadsInAMonth', e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label className='start_trial_form_label'>
            Total leads in your CRM
          </Form.Label>
          <Form.Control
            type='number'
            value={formData.totalLeadsInCRM}
            onChange={(e) =>
              changeFormDetails('totalLeadsInCRM', e.target.value)
            }
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label className='start_trial_form_label'>
            Which CRM do you use
          </Form.Label>
          <Form.Control
            type='number'
            value={formData.crm}
            onChange={(e) => changeFormDetails('crm', e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label className='start_trial_form_label'>
            No. of Agents
          </Form.Label>
          <Form.Control
            type='number'
            value={formData.agents}
            onChange={(e) => changeFormDetails('agents', e.target.value)}
          />
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className='mt-3 start_trial_form_label'>
          What are your biggest Lead sources?
        </Form.Label>
        <div>
          <Form.Check
            inline
            label='Zillow'
            checked={isChecked('biggestSources', 'Zillow')}
            onChange={(e) => changeFormDetails('biggestSources', 'Zillow')}
          />
          <Form.Check
            inline
            label='Realtor'
            checked={isChecked('biggestSources', 'Realtor')}
            onChange={(e) => changeFormDetails('biggestSources', 'Realtor')}
          />
          <Form.Check
            inline
            label='Ylopo'
            checked={isChecked('biggestSources', 'Ylopo')}
            onChange={(e) => changeFormDetails('biggestSources', 'Ylopo')}
          />
          <Form.Check
            inline
            label='others'
            checked={isChecked('biggestSources', 'others')}
            onChange={(e) => changeFormDetails('biggestSources', 'others')}
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Label className='start_trial_form_label'>
          How did you hear about us?
        </Form.Label>
        <div>
          <Form.Check
            inline
            label='Google'
            checked={isChecked('howHeared', 'Google')}
            onChange={(e) => changeFormDetails('howHeared', 'Google')}
          />
          <Form.Check
            inline
            label='Facebook'
            checked={isChecked('howHeared', 'Facebook')}
            onChange={(e) => changeFormDetails('howHeared', 'Facebook')}
          />
          <Form.Check
            inline
            label='Email'
            checked={isChecked('howHeared', 'Email')}
            onChange={(e) => changeFormDetails('howHeared', 'Email')}
          />
          <Form.Check
            inline
            label='Friends'
            checked={isChecked('howHeared', 'Friends')}
            onChange={(e) => changeFormDetails('howHeared', 'Friends')}
          />
          <Form.Check
            inline
            label='Real closers'
            checked={isChecked('howHeared', 'Closers')}
            onChange={(e) => changeFormDetails('howHeared', 'Closers')}
          />
        </div>
      </Form.Group>
    </Form>
  );
};
