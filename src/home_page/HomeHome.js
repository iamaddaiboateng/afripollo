import {
  Carousel,
  Row,
  Col,
  Image,
  Typography,
  Radio,
  Divider,
  Button,
} from "antd";
import React from "react";
import polo1 from "../assets/POLO_22.png";
import polo2 from "../assets/POLO_33.png";
import "./HomeHome.css"

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
      <Row>
        <Col
        className="image-grid"
          xs={0}
          sm={0}
          md={12}
          lg={14}
          style={{
            height: "100vh",
            maxHeight: "100vh",
          }}
        >
          <div>
            <Carousel autoplay>
              <Image src={polo1} />
              <Image src={polo2} />
            </Carousel>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={10}
          className="form-grid"
          style={{
            padding: 3,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: "left",
            alignContent: "start",
          }}
        >
        <div className="form-container">
          <Title level={1} style={{fontWeight:"bolder"}}>Welcome to AfriPolo</Title>
          <Title level={5} style={{ marginBottom: 30 }}>
            Please select a Ticket to Continue
          </Title>
          <Row>
            <Divider orientation="left">Table Packages</Divider>
            <Radio.Group>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Radio
                  style={{
                    marginBottom: "10px",
                  }}
                  value={1}
                >
                  Executive Black
                </Radio>
                <Radio
                  style={{
                    marginBottom: "10px",
                  }}
                  value={2}
                >
                  Executive Red
                </Radio>
                <Radio
                  style={{
                    marginBottom: "10px",
                  }}
                  value={3}
                >
                  Platinum
                </Radio>
                <Radio
                  style={{
                    marginBottom: "10px",
                  }}
                  value={4}
                >
                  Gold
                </Radio>
                <Radio value={5}>VIP</Radio>
              </div>
            </Radio.Group>

            <Divider
              style={{
                marginBottom: "20px",
              }}
              orientation="left"
            >
              Individdual Packages
            </Divider>

            <Radio.Group>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "start",
                }}
              >
                <Radio
                  style={{
                    marginBottom: "10px",
                  }}
                  value={1}
                >
                  Regular - GH&cent; 20,000{" "}
                </Radio>
                <Radio value={2}> Gold - GH&cent; 20,000 </Radio>
              </div>
            </Radio.Group>
          </Row>
          <Row
            style={{
              marginTop: "30px",
            }}
          >
            <Button type="primary" block size="large">
              Continue
            </Button>
          </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
