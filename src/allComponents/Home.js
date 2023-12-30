import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, List } from 'antd';
import '../App.css';

const { Title, Paragraph } = Typography;

const Home = () => {
  const theme = 'dark';

  return (
    <div>
      <div style={{ backgroundColor: '#4d63d1', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>Stock Market Dashboard!</Title>
      </div>
      <div className="container">
        <div className="overlay">
          <div className="text">

            <Typography>
              <Paragraph className="paragraph">
              Experience a Dynamic Platform Offering Real-Time Stock Market Data and Robust Analytical Tools.
              </Paragraph>
              <Title level={2}>Key Features:</Title>
              <List
                bordered
                dataSource={[
                  'Explore diverse stock categories and sectors',
                  'Craft your customized dashboard',
                  'Experience real-time data visualization with interactive charts',
                  'Tailor your experience with customizable settings',
                ]}
                renderItem={item => <List.Item className="list">{item}</List.Item>}
              />
              <Title level={2}>Explore Now:</Title>
              <Paragraph className="paragraph">
              Embark on your journey by delving into what our platform has to offer
              </Paragraph>
            </Typography>
          </div>
        </div></div> </div>
  );
};

export default Home;
