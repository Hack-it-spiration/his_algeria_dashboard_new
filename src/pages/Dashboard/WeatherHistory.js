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

const data=
    {
        startBoundId : "Bound1",
        startBoundHistory : [
            {
                time : new Date(),
                weather : {
                    temperature : 27,
                    humidity : 40
                }}
        ],
        endBoundId : "Bound2",
        endBoundHistory : [
            {
                time : new Date(),
                weather : {
                    temperature : 27,
                    humidity : 40
                }}
        ],
    }


const weatherHistory =()=>{
    let { segmentId } = useParams();
    const columns= [
        { title: 'Time',  render: rowData => <div>{moment(rowData.time).format('llll')}</div> },
        // { title: 'Segment', field: 'name' },
        { title: 'Temperature', render: rowData => <div>{rowData.weather.temperature}</div> },
        { title: 'Humidity',  render: rowData => <div>{rowData.weather.humidity}</div> },
    ]

    const options={
        grouping : true,
        search : true
    }

    return(
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Weather History | HIS ALGERIA</title>
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
                                            <div>Weather History</div>
                                        </BreadcrumbItem>
                                    </ol>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <MaterialTable
                        title={`Start Bound weather history , Segment : ${segmentId}  , startBound : ${data.startBoundId}`}
                        icons={tableIcons}
                        localization={tableLang}
                        columns={columns}
                        data={data.startBoundHistory}
                        options={options}
                    />
                    <div style={{marginTop : "3rem"}}>
                        <MaterialTable
                            title={`End Bound weather history , Segment : ${segmentId}  , endBound : ${data.endBoundId}`}
                            icons={tableIcons}
                            localization={tableLang}
                            columns={columns}
                            data={data.endBoundHistory}
                            options={options}
                        />
                    </div>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default withTranslation()(weatherHistory);
