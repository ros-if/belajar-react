import { Col, Container, Row } from 'react-bootstrap';
import { testimonial } from '../data';

const TestimonialPage = () => {
  return (
    <div className="testimonial-page min-vh-100">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Semua Testimonial</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, ipsum?</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col
                  key={data.id}
                  className="mb-5"
                >
                  <div className="people">
                    <img
                      src={data.image}
                      alt=""
                    />
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.skill}</p>
                  </div>
                  <p className="desc shadow-sm">{data.desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialPage;
