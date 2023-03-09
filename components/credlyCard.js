import Card from 'react-bootstrap/Card';

function credlyCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.credly.com/badges/598b60e4-f1c3-4ec9-9275-95acf5f15964/public_url" />
      <Card.Body>
        <Card.Title>AWS Cloud Practitioner</Card.Title>
        <Card.Text>
          Gained this certfication to help learn to use AWS service to create and deploy cloud applications.
        </Card.Text>
        <Card.Link href="https://www.credly.com/badges/598b60e4-f1c3-4ec9-9275-95acf5f15964/public_url">Credly Link</Card.Link>
        <Card.Link href="https://aws.amazon.com/certification/certified-cloud-practitioner/">Link about Certification</Card.Link>
      </Card.Body>
    </Card>
  );
}
