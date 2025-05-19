import "./User.css";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";

import { useTotalPrice } from "../PriceContext";

function About() {
    const { totalPrice, showTotalPrice } = useTotalPrice();

    return (
        <>
        <div className="price-container">
            {showTotalPrice && 
            <p style={{
                    fontWeight: "bold", 
                    fontSize: "x-large", 
                    color: "blue", 
                    position: "relative", 
                    right: "-948px"
                }}>Total Price: £{totalPrice}
            </p>}
            <div style={{padding: "1rem"}}>
                <Figure>
                    <Figure.Image
                        style={{
                            position: "absolute",
                            left: "33px",
                            top: "150px"
                        }}
                        width={171}
                        height={180}
                        alt="171x180"
                        src="src/assets/logo.png"
                    />
                </Figure>
            </div>
        </div>
        <div style={{display: "flex"}}>
            <CardGroup className="image-card2">
            <Card style={{ width: '40rem', backgroundColor: "aqua"}}>
                <Card.Body>
                    <Card.Title>What We Do</Card.Title>
                    <Card.Text style={{textAlign: "left"}}>
                        The world of business is changing and personal image 
                        portfolio build matters more than ever before.
                        We are concered with fast-paced workplaces in which businesses 
                        anchor personal image around first impression.
                        We create a positive career cutlture and impression by building 
                        on image and presentation to get it right the fisrt time.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '40rem', backgroundColor: "aqua"}}>
                <Card.Body>
                    <Card.Title>How We Do It</Card.Title> 
                    <Card.Text style={{textAlign: "left"}}>
                        SmartWear uses a build strategy anchored around;
                        <span>- Personal image through personal presentation</span>
                        <span>- Corporate image build througb vaue proposition</span>
                        <span>- Face value boost through model recommendations</span> 
                    </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
        <div>
            <CardGroup className="image-card">
                <Card style={{ width: '18rem', backgroundColor: "aqua"}}>
                    <Card.Img variant="top" src="src/assets/suit13.png" width={220} height={250} />
                    <Card.Body>
                        <Card.Title>Italiano</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua"}}>
                    <Card.Img variant="top" src="src/assets/suit14.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Britton</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua"}}>
                    <Card.Img variant="top" src="src/assets/suit15.png" width={220} height={300} />
                    <Card.Body>
                        <Card.Title>Francais</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
        </>
    );
 }

 export default About;