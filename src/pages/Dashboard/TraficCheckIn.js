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
        vehiculeType : 'CAR'
    },{
        time : new Date(),
        vehiculeType : "TRUCK"
    },{
        time : new Date(),
        vehiculeType : "MOTORCYCLE"
    }
]

const TraficCheckin =()=>{
    let { segmentId } = useParams();
    const columns= [
        { title: 'Time',  render: rowData => <div>{moment(rowData.time).format('llll')}</div> },
        // { title: 'Segment', field: 'name' },
        { title: 'vehiculeType', field : 'vehiculeType', render: rowData => <div>{rowData.vehiculeType}</div> },

    ]

    const options={
        grouping : true,
        search : true
    }

    return(
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Trafic Checkin | HIS ALGERIA</title>
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
                                            <Link to={"#"}>Trafic Checkin</Link>
                                        </BreadcrumbItem>
                                    </ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <MaterialTable
                        title={`Trafic Checkin History for the segment : ${segmentId}`}
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

export default withTranslation()(TraficCheckin);
