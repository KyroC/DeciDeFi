import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function Home() {
    const [coins, setCoins] = useState([])
    const [trendingCoins, setTrendingCoins] = useState([])

    
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => res.json())
            .then(
                (result) => setTrendingCoins(result.coins))
    },[])
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Card style={{width: '25rem'}}>
                        <Card.Header>Trending Coins </Card.Header>
                        <Carousel>
                                {trendingCoins.map(coin => {
                                    return(
                                        <Carousel.Item>
                                             <Card.Title>
                                                {coin.item.name}
                                             </Card.Title>
                                             <Card.Img style={{width:'10rem'}}  src={coin.item.large}/>

                                        <Card.Text >
                                            {coin.item.symbol}
                                            <br />
                                            {coin.item.market_cap_rank}
                                        </Card.Text>
                                        </Carousel.Item>
                                    )
                                })}
                        </Carousel>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
            <h1>Market</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Coin</td>
                        <td>Price</td>
                        <td>1h</td>
                        <td>24h</td>
                        <td>7d</td>
                        <td>1m</td>
                        <td>mcap</td>
                    </tr>
                </thead>
            </Table>
            
        </>
    )
}
export default Home;