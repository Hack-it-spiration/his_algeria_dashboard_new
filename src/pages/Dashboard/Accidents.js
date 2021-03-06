import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {BreadcrumbItem, Col, Container, Row} from "reactstrap";
import React from "react";
import {Link, useParams} from "react-router-dom";
import MaterialTable from "material-table";
import {tableIcons , tableLang} from "../../materialTableOptions/Widget";
import {withTranslation} from "react-i18next";
import {Add, AddBox} from "@material-ui/icons";
import moment from "moment";

const data=[
    {
        time : new Date(),
        accidentType : "CAR-CAR",
        severity : 3,
        vehiculesNumbers : 6,
        injuriesNumbers : 5,
        deadNumbers : 5
    }
]

const Accidents =()=>{
    let { segmentId } = useParams();
    const columns= [
        { title: 'Time',  render: rowData => <div>{moment(rowData.time).format('llll')}</div> },
        // { title: 'Segment', field: 'name' },
        { title: 'Accident Type', field : 'accidentType', render: rowData => <div>{rowData.accidentType}</div> },
        { title: 'Severity', render : rowData => <div>{rowData.severity}</div> },
        { title : 'Vehicules Numbers' , render : rowData=><div>{rowData.vehiculesNumbers}</div>},
        { title : 'Injuries Numbers' , render : rowData=><div>{rowData.injuriesNumbers}</div> },
        { title : 'Dead Numbers' , render : rowData=><div>{rowData.deadNumbers}</div>}
    ]

    const options={
            grouping : true,
            search : true
    }

    return(
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Accidents | HIS ALGERIA</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Row>
                        <Col xs="12">
                            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                {/*<h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>*/}
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <BreadcrumbItem>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </BreadcrumbItem>
                                        <BreadcrumbItem active>
                                            <Link to="#">Accidents</Link>
                                        </BreadcrumbItem>
                                    </ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <MaterialTable
                        title={`Accidents History for the segment : ${segmentId}`}
                        icons={tableIcons}
                        localization={tableLang}
                        columns={columns}
                        data={data}
                        options={options}
                    />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default withTranslation()(Accidents);
