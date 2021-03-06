import React from "react";
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
// import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = ({setCampsiteId}) => {
    // const campsites = selectAllCampsites();
  return (
    <Row className="ms-auto">
      {CAMPSITES.map((campsite) => {
        return (
          <Col 
          onClick={() => setCampsiteId(campsite.id)} 
          md="5" 
          className="m-4" 
          key={campsite.id}
          >
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
