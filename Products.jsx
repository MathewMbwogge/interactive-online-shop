import "./User.css"
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, ButtonGroup } from "react-bootstrap"

import { useLocation } from "react-router-dom";
import { useState } from "react";
/* import TotalPrice from "./TotalPrice"; */
import {useTotalPrice} from "../PriceContext"

function Products() {
    // Get the location object
    const location = useLocation();
    // Get the data from the location object
    const data = location.state;

    const { totalPrice, handleBuy, showTotalPrice } = useTotalPrice();

      // Define separate state for each card
    const [cardThemes, setCardThemes] = useState({
        card1: "primary",
        card2: "primary",
        card3: "primary",
        card4: "primary",
        card5: "primary",
        card6: "primary",
        card7: "primary",
        card8: "primary",
        card9: "primary",
        card10: "primary",
        card11: "primary",
        card12: "primary"
    });

    // Function to change theme for a specific card
    const setCardTheme = (cardKey, theme) => {
        setCardThemes((prevThemes) => ({
            ...prevThemes,
            [cardKey]: theme,
        }));
    };

    // Function to reset theme for a specific card
    const resetCardTheme = (cardKey) => {
        setCardThemes((prevThemes) => ({
            ...prevThemes,
            [cardKey]: "primary",
        }));
    };

    return (
        <div>
            <div className="price-container">
                <h1>Products Catalogue</h1>
                {showTotalPrice && 
                <p style={{
                    fontWeight: "bold", 
                    fontSize: "x-large", 
                    color: "blue", 
                    position: "relative", 
                    right: "-593px"
                }}>Total Price: £{totalPrice}</p>}
            </div>
            <div>
            <CardGroup className="image-card">
                <Card style={{ width: '18rem', backgroundColor: "aqua"}}>
                <Card.Img variant="top" src="src/assets/suit1.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Extasis</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">30% off Sale</Card.Subtitle> 
                        <Card.Text>
                            White lined responsible business class suit., light purple shirt, and a mixed purple colored tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(750)}>
                        Buy for $750
                    </Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card1}
                        >
                            {cardThemes.card1}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card1}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="1"
                            onClick={() => setCardTheme("card1", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="2"
                            onClick={() => setCardTheme("card1", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="3"
                            onClick={() => setCardTheme("card1", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="4"
                            onClick={() => resetCardTheme("card1")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua"}}>
                    <Card.Img variant="top" src="src/assets/suit2.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Black Jack</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Medium-sized single piece black Italian suit, cream white shirt and red-colored tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(500)}>
                        Buy for $500
                    </Button>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card2}
                        >
                            {cardThemes.card2}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card2}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="5"
                            onClick={() => setCardTheme("card2", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="6"
                            onClick={() => setCardTheme("card2", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="7"
                            onClick={() => setCardTheme("card2", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="8"
                            onClick={() => resetCardTheme("card2")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua"}}>
                    <Card.Img variant="top" src="src/assets/suit3.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Italiano</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">30% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Diplomatic slim-fit single-piece Italian black suit, cream-white shirt, and red-colored tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(450)}>
                        Buy for $450
                    </Button>
                    <Card.Footer></Card.Footer>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card3}
                        >
                            {cardThemes.card3}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card3}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="9"
                            onClick={() => setCardTheme("card3", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="10"
                            onClick={() => setCardTheme("card3", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="11"
                            onClick={() => setCardTheme("card3", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="12"
                            onClick={() => resetCardTheme("card3")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit4.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Blue Panther</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">15% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Professional outdoor 2-piece slim-fit blue suit, cream-white shirt, and red tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(800)}>
                        Buy for $800
                    </Button>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card4}
                        >
                            {cardThemes.card4}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card4}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="13"
                            onClick={() => setCardTheme("card4", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="14"
                            onClick={() => setCardTheme("card4", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="15"
                            onClick={() => setCardTheme("card4", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="16"
                            onClick={() => resetCardTheme("card4")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
            </CardGroup>
            <CardGroup className="image-card">
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                <Card.Img variant="top" src="src/assets/suit5.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Blue Sparo</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">10% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Gentle weekend outdoor slim-fit single piece blue British suit, cream white shirt, and red tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(750)}>
                        Buy for $750
                    </Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card5}
                        >
                            {cardThemes.card5}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card5}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="17"
                            onClick={() => setCardTheme("card5", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="18"
                            onClick={() => setCardTheme("card5", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="19"
                            onClick={() => setCardTheme("card5", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="20"
                            onClick={() => resetCardTheme("card4")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit6.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Le Metro</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">20% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Gentle party slim-fit and 3-piece master of ceremony British wear for a black tie party
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(900)}>
                        Buy for $900
                    </Button> 
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card6}
                        >
                            {cardThemes.card6}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card6}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="21"
                            onClick={() => setCardTheme("card6", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="22"
                            onClick={() => setCardTheme("card6", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="23"
                            onClick={() => setCardTheme("card6", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="24"
                            onClick={() => resetCardTheme("card6")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit7.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Winter Vice</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">30% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Medium-sized cotton wool brown-colored single-piece winter jacket, cream white shirt, and pochette.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(350)}>
                        Buy for $350
                    </Button> 
                    <Card.Footer></Card.Footer>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card7}
                        >
                            {cardThemes.card7}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card7}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="25"
                            onClick={() => setCardTheme("card7", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="26"
                            onClick={() => setCardTheme("card7", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="27"
                            onClick={() => setCardTheme("card7", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="28"
                            onClick={() => resetCardTheme("card4")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit8.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Body Guard</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">25% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Medium-sized shinny-blue African corporate business class single piece suit, white shirt, and blue tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(600)}>
                        Buy for $600
                    </Button> 
                    <Card.Footer></Card.Footer>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card8}
                        >
                            {cardThemes.card8}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card8}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="29"
                            onClick={() => setCardTheme("card8", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="30"
                            onClick={() => setCardTheme("card8", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="31"
                            onClick={() => setCardTheme("card8", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="32"
                            onClick={() => resetCardTheme("card8")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
            </CardGroup>
            <CardGroup className="image-card">
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                <Card.Img variant="top" src="src/assets/suit9.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Elegancia</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">10% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Medium-sized shinny orange African party casual wear, sky-blue shirt, dark-blue tie, and pochette
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(500)}>
                        Buy for $500
                    </Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card9}
                        >
                            {cardThemes.card9}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card9}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="33"
                            onClick={() => setCardTheme("card9", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="34"
                            onClick={() => setCardTheme("card9", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="35"
                            onClick={() => setCardTheme("card9", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="36"
                            onClick={() => resetCardTheme("card4")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit10.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>Blue Corp</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> 
                        <Card.Text>
                            Medium-szed croporate, and business class French outfit, white shirt, and black tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(800)}>
                        Buy for $800
                    </Button>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card10}
                        >
                            {cardThemes.card10}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card10}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="37"
                            onClick={() => setCardTheme("card10", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="38"
                            onClick={() => setCardTheme("card10", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="39"
                            onClick={() => setCardTheme("card10", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="40"
                            onClick={() => resetCardTheme("card10")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit11.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>French Spy</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">30% off Sale</Card.Subtitle> 
                        <Card.Text>
                            Slim-fit 2-piece brown-coloured professional wear for a french soirée, white shirt, and mixed gold tie.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(750)}>
                        Buy for $750
                    </Button>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card11}
                        >
                            {cardThemes.card11}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card11}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="41"
                            onClick={() => setCardTheme("card11", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="42"
                            onClick={() => setCardTheme("card11", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="43"
                            onClick={() => setCardTheme("card11", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="44"
                            onClick={() => resetCardTheme("card11")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
                <Card style={{ width: '18rem', backgroundColor: "aqua" }}>
                    <Card.Img variant="top" src="src/assets/suit12.png" width={220} height={180} />
                    <Card.Body>
                        <Card.Title>White a capella</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">40% of Sale</Card.Subtitle> 
                        <Card.Text>
                            Midum-sized cream-white single piece British summer wear with a white shirt.
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleBuy(300)}>
                        Buy for $300
                    </Button>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    <Dropdown as={ButtonGroup} size="lg">
                        <Button
                            className="text-capitalize"
                            variant={cardThemes.card12}
                        >
                            {cardThemes.card12}
                        </Button>
                        <Dropdown.Toggle
                            split
                            variant={cardThemes.card12}
                            id="dropdown-split-basic"
                        />
                        <Dropdown.Menu>
                        <Dropdown.Item
                            eventKey="45"
                            onClick={() => setCardTheme("card12", "danger")}
                        >
                            Danger
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="46"
                            onClick={() => setCardTheme("card12", "success")}
                        >
                            Success
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey="47"
                            onClick={() => setCardTheme("card12", "warning")}
                        >
                            Warning
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="49"
                            onClick={() => resetCardTheme("card12")}
                        >
                            Reset Theme
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card>
            </CardGroup>
            </div>
        </div>
        );
}
export default Products;

/*--------------------------------------------------------------*/
