import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Feature.css"
import financeImage from './finance.jpg';
function Feature() {
  return (
    <div id="feature">

    <div className="feture-item">
    <Card style={{ width: '20rem' }}>
         <Card.Img variant="top" src={financeImage} alt="Finance" style={{ height: '18rem' }} />
      <Card.Body style={{'textAlign':'center'}}>
        <Card.Title>Smart Expense Tracking  </Card.Title>
        <Card.Text>
         Automatically categorize and monitor expenses with advanced algorithms
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="feture-item">
    <Card style={{ width: '20rem' }}>
         <Card.Img variant="top" src={financeImage} alt="Finance" style={{ height: '18rem' }} />
      <Card.Body style={{'textAlign':'center'}}>
        <Card.Title>Streamlined Management</Card.Title>
        <Card.Text>
         User-friendly interface effortlessly captures, organizes, and digitizes finance
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="feture-item">
    <Card style={{ width: '20rem' }}>
         <Card.Img variant="top" src={financeImage} alt="Finance" style={{ height: '18rem' }} />
      <Card.Body style={{'textAlign':'center'}}>
        <Card.Title>Real-Time Financial Insights</Card.Title>
        <Card.Text>
          Visualize spending trends, set budgets, and take control of your finances 
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Feature;