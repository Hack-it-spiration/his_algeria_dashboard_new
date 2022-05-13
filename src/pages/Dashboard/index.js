import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";

import classNames from "classnames";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

//import action
import { getChartsData as onGetChartsData } from "../../store/actions";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";



//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import {GoogleMap, useJsApiLoader , Marker , DirectionsRenderer , InfoWindow } from "@react-google-maps/api";
import React, {useContext, useRef, useState} from "react";
import {Backdrop, Button, CircularProgress, TextField, Toolbar , Paper , List , Autocomplete} from "@mui/material";
import './styles.css';
// import CarsWindowInfo from "./Compounents/carsWindowInfo.Compounent";
// import CarteVehicule from "../gestionverou/Compounents/Card";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useEffect} from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
const bounds=[{
  label : 'Bound1',
  id : 'Bound1',
  position : {
    lat : 48.5584,
    lng: 2.2945
  },
  speed : '75',
  heat : '55',
  AM : {
    fullName : 'Metidji Sid Ahmed',
    email : 'is_metidji@esi.dz'
  }

}, {
  label : 'Bound2',
  id : 'Bound2',
  position : {
    lat : 48.8570,
    lng: 2.2730
  },
  speed : '20',
  heat : '20',
  AM : {
    fullName : 'Youcef belaili',
    email : 'iy_belaili@esi.dz'
  }
},{
  label : 'Bound3',
  id : 'Bound3',
  position : {
    lat : 48.7570,
    lng: 2.2330
  },
  speed : '35K',
  heat : '40',
  AM : {
    fullName : 'Joe Goldberg',
    email : 'ij_goldberg@esi.dz'
  }
} ,{
  label: 'Bound4',
  id : 'Bound4',
  position : {
    lat : 48.7230,
    lng: 2.2550
  },
  speed : '45',
  heat : '65',
  AM : {
    fullName : 'Eren Yeager',
    email : 'ie_yeager@esi.dz'
  }
}
]

const segments=[
    {
      name : "Segment 1",
      boundStartId : 'Bound1',
      boundEndId : 'Bound2'
    },
    {
      name : "Segment 2",
      boundStartId : 'Bound2',
      boundEndId : 'Bound3'
    }
]
const  CarsWindowInfo=()=>{
  return <h1>CARS WINDOW INFO</h1>
}


const Dashboard = props => {
  const [modal, setmodal] = useState(false);
  const [subscribemodal, setSubscribemodal] = useState(false);


  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData
  }));

  const [WindowInfoStatus, setWindowInfoStatus] = useState({
    isOpen : false ,
    car: bounds[0]
  });
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const [actualBoundStart, setActualBoundStart]=useState(null);
  const [actualBoundEnd , setActualBoundEnd]=useState(null);
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const markerIcon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
  const {isLoaded}= useJsApiLoader({
    googleMapsApiKey : "AIzaSyDwCTYOj2SWL6bt2rz_k8_bcXirZtJNB3g",
    libraries: ['places']
  })

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true);
    }, 2000);
  }, []);

  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");

  useEffect(() => {
    setPeriodData(chartsData);
  }, [chartsData]);

  const onChangeChartPeriod = pType => {
    setPeriodType(pType);
    dispatch(onGetChartsData(pType));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetChartsData("yearly"));
  }, [dispatch]);

  useEffect(()=>{
    if(actualBoundStart && actualBoundEnd){
      calculateRoute();
    }else{
      setDirectionsResponse(null);
    }
  },[actualBoundStart , actualBoundEnd])

  const calculateCenterMap=()=>{
    let sumlat = 0;
    let sumlng = 0;
    bounds.forEach(car=>{
      sumlat += car.position.lat;
      sumlng += car.position.lng;
    })
    return  {
      lat : sumlat/bounds.length,
      lng: sumlng/bounds.length
    }
  }

  async function calculateRoute() {

    console.log("IM GOING TO SEND =" , actualBoundStart)
    console.log("IM GOING TO SEND =",actualBoundEnd)
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: new  window.google.maps.LatLng( actualBoundStart.position.lat , actualBoundStart.position.lng),
      destination: new window.google.maps.LatLng( actualBoundEnd.position.lat , actualBoundEnd.position.lng),
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  if(!isLoaded){
    return(
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
            // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
    )

  }
  const setInfoWindowData=( car )=>{
    setWindowInfoStatus( oldState=>{  return {...oldState , isOpen : true , car: car} })
  }

  const calculateBoundMarkerOpacity=(bound)=>{
    // if the user didin't select yet any bound
    if(!actualBoundStart && !actualBoundEnd){
      return 1
    }
    // if that bound is either the start or the end
      if(bound.id===actualBoundStart?.id || bound.id===actualBoundEnd?.id){
        return 1
      }

    // the started bound is different  and the end bound is not defined yet
    if(actualBoundStart && !actualBoundEnd){
          const potentialSegments= segments.filter(segment=>( segment.boundStartId===actualBoundStart.id && segment.boundEndId===bound.id));
          return potentialSegments.length ? 1 : 0.3
    }
    // the start and the end bound are specified but the actual bound isn't one of them
    else if(actualBoundStart && actualBoundEnd){
        return 0.3

    }

  }
  const getPotentialEndBoundsOfGivenStartBound=()=>{
      if(!actualBoundStart) {return null}
      else{
        let endBoundsId= segments.filter(segment=>segment.boundStartId ===actualBoundStart.id).map(segment=>segment.boundEndId);
        console.log("END BOUNDS ID =",endBoundsId)
        return bounds.filter(bound=>endBoundsId.includes(bound.id));
      }
  }
  const updateBounds=(clickedBound)=>{
    if(!actualBoundStart && !actualBoundStart){
      setActualBoundStart(clickedBound)
    }else if(actualBoundStart && !actualBoundEnd){
      // disable the selection
      if(actualBoundStart.id===clickedBound.id){
        setActualBoundStart(null)
      }else{
        setActualBoundEnd(clickedBound)
      }
    }
    else if(actualBoundStart && actualBoundEnd){
      // setActualBoundStart(null);
      setActualBoundEnd(null);
      setActualBoundStart(actualBoundStart);
      setDirectionsResponse(null);
    }
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | HIS ALGERIA</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />
          <div className="d-flex justify-content-evenly mb-2 mt-2">
            <div id={"startBoundInput"}>
              <Autocomplete
                  value={actualBoundStart}
                  onChange={(event, newValue) => {
                    if(newValue == null){
                      setActualBoundEnd(null);
                    }
                    setActualBoundStart(newValue);
                  }}
                  id="controllable-states-demo"
                  options={bounds}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="start bound" />}
              />
            </div>
            <div id={"endBoundInput"}>
              <Autocomplete
                  disabled={!actualBoundStart}
                  value={actualBoundEnd}
                  onChange={(event, newValue) => {
                    setActualBoundEnd(newValue);
                  }}
                  id="controllable-states-demo"
                  options={getPotentialEndBoundsOfGivenStartBound()}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="end bound" />}
              />
            </div>
          </div>


          <GoogleMap
              style={{height : '100%'}}
              center={ WindowInfoStatus.isOpen ? WindowInfoStatus.car.position :  calculateCenterMap()}
              zoom={10}
              mapContainerStyle={{width : '100%' , height : '80vh'}}
              options={{
                zoomControl: false,
                streetViewControl : false,
                mapTypeControl: false,
                fullscreenControl: false
              }}
          >
            {bounds.map(bound=>{
              return(
                  <Marker key={bound.label} position={bound.position}
                          label={{
                            // text: car.name,
                            // fontFamily: "Material Icons",
                            color: "#ffffff",
                            fontSize: "10px",
                          }}
                          opacity={calculateBoundMarkerOpacity(bound)}
                          disabled={calculateBoundMarkerOpacity(bound)!==1}
                          // icon={'https://lh3.google.com/u/0/d/1VDkBVYwMu-hau9j1SiW4YJelZ_9ZccDN=w1193-h840-iv1'}
                          onClick={()=>{

                            setInfoWindowData(bound)
                            updateBounds(bound)
                          }}
                  />
              )

            })}
            {/*<Toolbar className={"filterBar"}>*/}
            {/*    <h1>CARS VIEW</h1>*/}
            {/*    <div className="d-flex align-items-center">*/}
            {/*        <div className="col-4">*/}
            {/*            <Autocomplete>*/}
            {/*                <TextField className="mt-3 mb-3" id="standard-basic" label="From" variant="standard" ref={originRef} />*/}
            {/*            </Autocomplete>*/}
            {/*        </div>*/}
            {/*        <div className="col-4">*/}
            {/*            <Autocomplete>*/}
            {/*                <TextField className="mt-3 mb-3" id="standard-basic" label="To" variant="standard" ref={destiantionRef} />*/}
            {/*            </Autocomplete>*/}
            {/*        </div>*/}
            {/*        <div className="col-4">*/}
            {/*            <Button onClick={()=>calculateRoute()} className="w-100" variant="contained">Calculate Route</Button>*/}

            {/*        </div>*/}
            {/*    </div></Toolbar>*/}

            {/*<Marker position={Marker2Pos} label={{*/}
            {/*    text: "Car 2",*/}
            {/*    // fontFamily: "Material Icons",*/}
            {/*    color: "#ffffff",*/}
            {/*    fontSize: "10px",*/}
            {/*}}  icon={markerIcon}*/}
            {/*        onClick={()=>setInfoWindowData({position : Marker2Pos})}*/}
            {/*/>*/}


            {/*{WindowInfoStatus.isOpen ?  (*/}
            {/*    <InfoWindow onCloseClick={()=>{*/}
            {/*      setWindowInfoStatus(oldState=>{ return {...oldState , isOpen : false }});*/}
            {/*    }}  position={WindowInfoStatus.car.position}  >*/}
            {/*      <CarsWindowInfo car={WindowInfoStatus.car}/>*/}
            {/*    </InfoWindow>*/}
            {/*): null}*/}



            {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
            )}          </GoogleMap>
        </Container>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
};

export default withTranslation()(Dashboard);
