import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import {useState, useEffect} from 'react';

function Dex() {
    const [ newPools, setNewPools ] = useState([])
    const [ ethPools, setEthPools ] = useState([])
    const [ bscPools, setBscPools ] = useState([])
    const [ avaxPools, setAvaxPools ] = useState([])
    const [ tableData, setTableData ] = useState([])
    useEffect(() => {
        fetch(`https://api.geckoterminal.com/api/v2/networks/new_pools`)
            .then(res => res.json())
            .then(
                (result) => setNewPools(result.data)
                
            )
    }, [])  
    useEffect(() => {
        fetch(`https://api.geckoterminal.com/api/v2/networks/eth/pools`)
            .then(res => res.json())
            .then(
                (result) => setEthPools(result.data)
                
            )
    }, [])  
    useEffect(() => {
        fetch(`https://api.geckoterminal.com/api/v2/networks/bsc/pools`)
            .then(res => res.json())
            .then(
                (result) => setBscPools(result.data)
                
            )
    }, [])  
    useEffect(() => {
        fetch(`https://api.geckoterminal.com/api/v2/networks/avax/pools`)
            .then(res => res.json())
            .then(
                (result) => setAvaxPools(result.data)
                
            )
    }, [])  
    useEffect(() => {
        fetch(`https://api.geckoterminal.com/api/v2/networks?page=1`)
        .then(res => res.json())
            .then(
                (result)=> setTableData(result)
            )
    }, [])
    return(
        <>
            <Container fluid = {true}>
                <Row>
                    <Col >
                        <Carousel className="m-auto h-100" interval={10000} >
                           {newPools.map((item, index) => {
                            return(
                                index % 4 === 0 && (
                                         <Carousel.Item style={{ height:'100%', width: '100%', padding:'35px'}}>
                                            <Card className="w-100">
                                                <Card.Title className="mx-auto"> New Pools</Card.Title>
                                                <Card.Text>
                                                    <ListGroup as="ol" numbered className="h-100 w-100">
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">
                                                                <h6>{newPools[index]["attributes"]["name"]}</h6></div>
                                                            <Badge bg="primary" pill>
                                                                <div >{newPools[index]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{newPools[index+1]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{newPools[index+1]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{newPools[index+2]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{newPools[index+2]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{newPools[index+3]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{newPools[index+3]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Text>
                                            </Card>
                                         </Carousel.Item>
                                )
                            )
                           })}
                        </Carousel>
                    </Col>
                    <Col>
                        <Carousel className="m-auto h-100" interval={10000}>
                           {ethPools.map((item, index) => {
                            return(
                                index % 4 === 0 && (
                                    <Carousel.Item style={{ height:'100%', width: '100%', padding:'35px'}}>
                                            <Card>
                                                <Card.Title className="mx-auto"> Top Eth Pools</Card.Title>
                                                <Card.Text>
                                                    <ListGroup as="ol" numbered className="h-100">
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{ethPools[index]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                                <div >{ethPools[index]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{ethPools[index+1]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{ethPools[index+1]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{ethPools[index+2]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{ethPools[index+2]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{ethPools[index+3]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{ethPools[index+3]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Text>
                                            </Card>
                                         </Carousel.Item>
                                )
                            )
                           })}
                        </Carousel>
                    </Col>
                    <Col>
                        <Carousel className="m-auto h-100" interval={10000}>
                           {bscPools.map((item, index) => {
                            return(
                                index % 4 === 0 && (
                                    <Carousel.Item style={{ height:'100%', width: '100%', padding:'35px'}}>
                                            <Card>
                                                <Card.Title className="mx-auto"> Top 20 BSC Pools</Card.Title>
                                                <Card.Text>
                                                    <ListGroup as="ol" numbered className="h-100">
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{bscPools[index]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                                <div >{bscPools[index]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{bscPools[index+1]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{bscPools[index+1]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{bscPools[index+2]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{bscPools[index+2]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{bscPools[index+3]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{bscPools[index+3]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Text>
                                            </Card>
                                         </Carousel.Item>
                                )
                            )
                           })}
                        </Carousel>
                    </Col>
                    <Col>
                        <Carousel className="m-auto h-100" interval={10000}>
                           {avaxPools.map((item, index) => {
                            return(
                                index % 4 === 0 && (
                                    <Carousel.Item style={{ height:'100%', width: '100%', padding:'35px'}}>
                                            <Card>
                                                <Card.Title className="mx-auto"> Top AVAX Pools</Card.Title>
                                                <Card.Text>
                                                    <ListGroup as="ol" numbered className="h-100">
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{avaxPools[index]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                                <div >{avaxPools[index]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{avaxPools[index+1]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{avaxPools[index+1]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{avaxPools[index+2]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{avaxPools[index+2]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item as="li"
                                                        className="d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">{avaxPools[index+3]["attributes"]["name"]}</div>
                                                            <Badge bg="primary" pill>
                                                            <div >{avaxPools[index+3]["attributes"]["price_change_percentage"]["h24"]}%</div>
                                                            </Badge>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Text>
                                            </Card>
                                         </Carousel.Item>
                                )
                            )
                           })}
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                <h1>Available Networks</h1>
                <Table responsive bordered hover>
                    <thead>
                        <tr>
                            <th>Pool</th>
                            <th>Price</th>
                            <th>24H Transaction</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>24h Volume</th>
                            <th>FDV</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </Table>
                </Row>
            </Container>

        </>
    )
}

export default Dex;