import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function ListItem({ UserName, Email, Money }) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{UserName}</div>
        {Email}
      </div>
      <Badge bg="primary" pill>
        {Money}{" "}Rs
      </Badge>  
    </ListGroup.Item>
  );
}

export default ListItem;
