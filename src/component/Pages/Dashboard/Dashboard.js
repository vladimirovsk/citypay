import React, {Component} from "react";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faShapes} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import {Tab, Col, Container, Nav, Row, Card, CardDeck, CardGroup} from "react-bootstrap";
import { Chart} from "react-google-charts";
import {connect} from "react-redux";
import {getPayMount} from "../../../store/actions/works";
import {translate} from "react-switch-lang";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            year_yyyy: 2020,
            datasource_private: [],
            datasource_easy: [],
            privat:[]
        }
        //this.isRender = this.isRender.bind()
    }


    componentDidMount() {
//    componentWillMount() {
        this.props.getPayMount(
            this.state.year_yyyy,
            this.state.datasource_private,
            this.state.datasource_easy,

        );

        this.setState({
            datasource_private: this.props.datasource_private,
            datasource_easy: this.props.datasource_easy
        })
    }

    getPayHandler = () => {
    }

    render (){
        const {t} = this.props;

        let jsonMePrivat = this.props.datasource_private;
        let jsonMeEasy = this.props.datasource_easy;
        let chartDataPrivat = [];
        let chartDataEasy = [];
        let sumPrivat = 0;
        let sumEasy = 0;
        try {

            chartDataPrivat.push([t('dashboard.tab1.data'), t('dashboard.tab1.summa')])
            for (let i = 0; i < jsonMePrivat.length; i += 1) {
                chartDataPrivat.push([jsonMePrivat[i].date, parseInt(jsonMePrivat[i].sum)])
                sumPrivat = sumPrivat+parseInt(jsonMePrivat[i].sum);
            }

            chartDataEasy.push([t('dashboard.tab1.data'), t('dashboard.tab1.summa')])
            for (let i = 0; i < jsonMeEasy.length; i += 1) {
                chartDataEasy.push([jsonMeEasy[i].date, parseInt(jsonMeEasy[i].sum)])
                sumEasy = parseInt(sumEasy)+parseInt(jsonMeEasy[i].sum);
            }
        }
        catch (e) {
            console.log(e.text)
        }

    return (
        <Container className="medash">
            <Tab.Container id="ledt-tabs-example" className="mt-5" defaultActiveKey="first">
                <Row className="p-3">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">{t('dashboard.tab1.title')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">{t('dashboard.tab2.title')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">{t('dashboard.tab3.title')}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CardDeck>
                                    <Card style={{width: '20rem'}} bg={"success"} className="p-0">
                                        <Card.Header>{t('dashboard.tab1.chart1.title')}</Card.Header>
                                        <Chart
                                            chartType="AreaChart"
                                            loader={<div>Loading Chart</div>}
                                            data = {chartDataPrivat
                                                }

                                            options={{
                                                title: t('dashboard.tab1.chart1.caption'),
                                                hAxis: {title: this.state.year_yyyy, titleTextStyle: {color: '#333'}},
                                                vAxis: {minValue: 0},
                                                // For the legend to fit, we make the chart area smaller
                                                ////chartArea: { width: '50%', height: '70%' },
                                                // lineWidth: 25
                                            }}
                                            // For tests
                                            rootProps={{'data-testid': '1'}}
                                        />
                                    </Card>
                                    <Card style={{width: '20rem'}} bg={"info"} className="p-0">
                                        <Card.Header>{t('dashboard.tab1.chart2.title')}</Card.Header>
                                        <Chart
                                            chartType="AreaChart"
                                            loader={<div>Loading Chart</div>}
                                            data={
                                                chartDataEasy
                                            }
                                            options={{
                                                title: t('dashboard.tab1.chart2.caption'),
                                                hAxis: {title: this.state.year_yyyy, titleTextStyle: {color: '#333'}},
                                                vAxis: {minValue: 0},
                                                // For the legend to fit, we make the chart area smaller
                                                ////chartArea: { width: '50%', height: '70%' },
                                                // lineWidth: 25
                                            }}
                                            // For tests
                                            rootProps={{'data-testid': '1'}}
                                        />
                                    </Card>
                                </CardDeck>
                                <CardGroup className={"mb-2"}>
                                    <Card  bg="primary" className="p-1">
                                        <Card.Header>{t('dashboard.tab1.chart3.title')}</Card.Header>
                                        <Chart style={{height: '20rem'}}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                [t('dashboard.tab1.bank'), t('dashboard.tab1.summa')],
                                                [t('dashboard.tab1.chart1.title'),sumPrivat],
                                                [t('dashboard.tab1.chart2.title'), sumEasy]
                                            ]}
                                            options={{
                                                title: t('dashboard.tab1.chart3.caption')+' '+this.state.year_yyyy,
                                                //hAxis: {title: this.state.year_yyyy, titleTextStyle: {color: '#6433'}},
                                                //vAxis: {minValue: 0},
                                                // For the legend to fit, we make the chart area smaller
                                                ////chartArea: { width: '50%', height: '70%' },
                                                // lineWidth: 25
                                            }}
                                            // For tests
                                            //rootProps={{ 'data-testid': '1' }}
                                        />
                                    </Card>
                                </CardGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">

                            </Tab.Pane>
                            <Tab.Pane eventKey="third">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">

                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Container>
    )
    }
}

function mapDispatchToProps(dispatch){
    return{
        getPayMount:(year_yyyy, datasource_private, datasource_easy) => dispatch(getPayMount(year_yyyy, datasource_private, datasource_easy))
    }
}

function mapStateToProps(state){
    return{
        datasource_private: state.work.datasource_private,
        datasource_easy: state.work.datasource_easy
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (translate(Dashboard));


//export default Dashboard;
