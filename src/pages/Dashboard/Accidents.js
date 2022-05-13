import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {Container} from "reactstrap";
import React from "react";
import {useParams} from "react-router-dom";
import MaterialTable from "material-table";

const Accidents =()=>{
    let { segmentId } = useParams();

    return(
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Accidents | HIS ALGERIA</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs
                        title={"Accidents"}
                        breadcrumbItem={"Dashboard"}
                    />
                    <MaterialTable
                        icons={tableIcons}
                        localization={tableLang}
                        title="Multiple Actions Preview"
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Surname', field: 'surname' },
                            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                            {
                                title: 'Birth Place',
                                field: 'birthCity',
                                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                            },
                        ]}
                        data={[
                            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        ]}
                        actions={[
                            {
                                icon: 'save',
                                tooltip: 'Save User',
                                onClick: (event, rowData) => alert("You saved " + rowData.name)
                            },
                            {
                                icon: 'delete',
                                tooltip: 'Delete User',
                                onClick: (event, rowData) => confirm("You want to delete " + rowData.name)
                            }
                        ]}
                    />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Accidents
