import { syarat } from '../data';
import { Card, Container } from 'react-bootstrap';

const SyaratPage = () => {
  return (
    <div className="syarat-page">
      <div className="syarat">
        <Container>
          <h1 className="fw-bold text-center">Persyaratan</h1>
          <p className="text-center pb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          {syarat.map((data) => {
            return (
              <Card
                key={data.id}
                className="text-center my-3"
              >
                <Card.Header className="title fw-bold m-3 rounded-1">{data.title}</Card.Header>
                <Card.Body className=" shadow">
                  <Card.Text className="desc m-md-4 m-0">{data.desc}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export default SyaratPage;
