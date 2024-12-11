import { Button, Card, Modal } from "react-bootstrap";
import { useState } from "react";

/* eslint-disable react/prop-types */
function BikesData({ data }) {
  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleShow = (product) => {
    setCurrentProduct(product);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="card-container">
        {data.map((product, index) => (
          <div key={index} className="carddata">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "286px", height: "200px" }}
              />
              <Card.Body>
                <Card.Text>
                  <span>{product.engine_capacity}</span> |{" "}
                  <span>{product.mileage}</span>
                </Card.Text>
                <Card.Title>{product.model_name}</Card.Title>
                <br />
                <Card.Subtitle>Rs.{product.price}/-</Card.Subtitle>
                <br />
                <Button variant="primary" onClick={() => handleShow(product)}>
                  more spec
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {currentProduct && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>More Specifications</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Model:</strong> {currentProduct.model_name}
            </p>
            <p>
              <strong>Variants: </strong>
              <select name="" id="">
                <option value=""> {currentProduct.variants.v1}</option>
                <option value=""> {currentProduct.variants.v2}</option>
                <option value="">{currentProduct.variants.v3}</option>
              </select>
            </p>
            <p>
              <strong>Weight:</strong> {currentProduct.weight}
            </p>
            <p>
              <strong>Power</strong> {currentProduct.power}
            </p>
            <p>
              <strong>Mileage:</strong> {currentProduct.mileage}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default BikesData;
