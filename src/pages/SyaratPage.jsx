import { syarat } from '../data';
import { Card, Container } from 'react-bootstrap';

const SyaratPage = () => {
  return (
    <div className="syarat-page min-vh-100">
      <div className="syarat">
        <Container>
          <h1 className="fw-bold text-center">Syarat & Ketentuan</h1>
          <p className="text-center pb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic officia architecto esse dolores doloribus aperiam nobis. Tempore hic dignissimos maxime molestias minus laboriosam voluptatem ea minima praesentium est voluptas
            recusandae explicabo, facere iste cupiditate tempora aperiam nobis doloremque unde nam numquam corrupti corporis adipisci sit. Dolorem exercitationem dolor id obcaecati distinctio, cumque omnis mollitia tempore! Atque commodi
            cumque, et odit facilis, cum voluptas cupiditate asperiores nobis eaque, necessitatibus obcaecati vero!
          </p>
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
