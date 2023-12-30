import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';


const { Title, Text } = Typography;

const AboutUs = () => {
  return (
    <div>
      
      <div style={{ backgroundColor: '#4d63d1', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>About Us</Title>
        <Text style={{ color: 'white', textAlign: 'center', display: 'block' }}>
        Discover more about our identity and mission. Resize your browser window to witness the responsive design of this page.
        </Text>
      </div>

      <Title level={2} style={{ textAlign: 'center', marginTop: '20px' }}>Our Team</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col span={6}>
          <Card>
            <img
              src="/images/James.jpg" // Update with your image path
              alt="James"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>James Anderson</Title>
              <Text strong>CEO & Founder</Text><br/>
              <Text>Leads with innovation, integrity, and strategic prowess, shaping industry excellence.</Text><br/>
              <Text>james@wealthcreation.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
          <img
              src="/images/Emily.jpg" 
              alt="mike"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Emily Parker</Title>
              <Text strong>Art Director</Text><br/>
              <Text>Crafts visual stories with precision and creativity, captivating audiences.</Text><br/>
              <Text>emily@wealthcreation.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
          <img
              src="/images/benjamin.jpg" // Update with your image path
              alt="John"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Benjamin Hughes</Title>
              <Text strong>Designer</Text><br/>
              <Text>Blends aesthetics and functionality, creating visually stunning solutions.</Text><br/>
              <Text>benjamin@wealthcreation.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;

