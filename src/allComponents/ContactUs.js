import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';


const { Title } = Typography;

const ContactUs = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('');

  const handleFormSubmit = () => {
    setResponse('Soon you will receive a response');
    // Add logic here to handle form submission
  };

  return (
    <div>
      <div style={{ backgroundColor: '#4d63d1' }} className="about-section">
        <Title level={2} className="text-center font-weight-bold my-4" style={{ color: 'white' }}>
          Contact us
        </Title>
        <p className="text-center w-responsive mx-auto mb-5" style={{ color: 'white' }}>
          If you have inquiries, feel free to reach out. Our team responds promptly to assist you.
        </p>
      </div>

      <br />
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                <Form.Item label="Your name">
                  <Input
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item label="Your email">
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Item label="Subject">
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Item label="Your message">
                  <Input.TextArea rows={2} />
                </Form.Item>
              </div>
            </div>
            <div className="text-center text-md-left" style={{ margin: '20px 0' }}>
              <Button type="primary" onClick={handleFormSubmit}>
                Submit
              </Button>
            </div>
            <div className="status"></div>
          </Form>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>New York, NY 10001, USA</p>
            </li>
            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 888 435 89</p>
            </li>
            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@wealthcreation.com</p>
            </li>
          </ul>
        </div>
      </div>
      <h2>{response}</h2>
    </div>
  );
}

export default ContactUs;
