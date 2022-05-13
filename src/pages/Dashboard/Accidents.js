import MetaTags from "react-meta-tags";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {Container} from "reactstrap";
import React from "react";
import {useParams} from "react-router-dom";
import MaterialTable from "material-table";
import {tableIcons , tableLang} from "../../materialTableOptions/Widget";
import {withTranslation} from "react-i18next";
import {Add, AddBox} from "@material-ui/icons";


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
                        title="Free Action Preview"
                        icons={tableIcons}
                        localization={tableLang}
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
                                icon: ()=><AddBox/>,
                                tooltip: 'Add User',
                                isFreeAction: true,
                                onClick: (event) => alert("You want to add a new row")
                            }
                        ]}
                    />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default withTranslation()(Accidents);
