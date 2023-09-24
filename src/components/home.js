import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
    const [coins, setCoins] = useState([])
    const [trendingCoins, setTrendingCoins] = useState([])
    const [trendingNfts, setTrendingNfts] = useState([])

    
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => res.json())
            .then(
                (result) => {setTrendingCoins(result.coins)
                            setTrendingNfts(result.nfts)})
    },[])
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d`)
        .then(res => res.json())
        .then(
            (result) => setCoins(result))  
    },[])
    return(
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xl="4" lg="6" md="8">
                        <Card style={{height:'18rem'}}>
                        <Card.Header><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                            </svg>Trending Coins  
                        </Card.Header>
                        <Carousel style={{height:'18rem'}} >
                                {trendingCoins.map(coin => {
                                    return(
                                        <Carousel.Item className="px-5">
                                            <Card.Body >
                                                <Container style= {{height:"4rem"}} className="d-flex flex-row justify-content-around align-items-center border rounded">
                                                    <Card.Title style={{width:'100%'}} className="h2">
                                                        {coin.item.name}
                                                    </Card.Title>
                                                    <Card.Img style={{width:'2rem'}}  src={coin.item.large}/>
                                                </Container>
                                                    <Card.Text>
                                                        <ListGroup variant="flushed">
                                                            <ListGroup.Item>Symbol: {coin.item.symbol}</ListGroup.Item>
                                                            <ListGroup.Item>MCAP: {coin.item.market_cap_rank}</ListGroup.Item>
                                                            <ListGroup.Item>{coin.item.symbol}/USD: $10000</ListGroup.Item>
                                                        </ListGroup>
                                                        
                                                    </Card.Text>
                                            
                                        </Card.Body>
                                        </Carousel.Item>
                                    )
                                })}
                        </Carousel>
                        </Card>
                    </Col>
                    <Col md="8" lg="6" xl="4" > 
                        <Card style={{height:'18rem'}}>
                        <Card.Header>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                            </svg>Trending NFTs
                         </Card.Header>
                        <Carousel style={{height:'18rem'}}>
                                {trendingNfts.map(nft => {
                                    return(
                                        <Carousel.Item className="px-5">
                                            <Card.Body>
                                            <Container style= {{height:"4rem"}} className="d-flex flex-row justify-content-around align-items-center border rounded">
                                                    <Card.Title style={{width:'100%'}} className="h2">
                                                        {nft.name}
                                                    </Card.Title>
                                                    <Card.Img style={{width:'2rem'}}  src={nft.thumb}/>
                                                </Container>
                                                <Card.Text >
                                                    <ListGroup variant="flushed">
                                                            <ListGroup.Item>Symbol: {nft.symbol}</ListGroup.Item>
                                                            <ListGroup.Item>Native Coin - {nft.native_currency_symbol.toUpperCase()}</ListGroup.Item>
                                                            <ListGroup.Item>{nft.symbol}/ETH: $1000</ListGroup.Item>
                                                        </ListGroup>
                                                </Card.Text>
                                                </Card.Body>
                                                
                                        </Carousel.Item>
                                    )
                                })}
                        </Carousel>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
            <Container className="p-10">
            <h1>Market</h1>
            <Table striped bordered hover responsive className="mt-0">
                <thead>
                    <tr>
                        <td style={{position:"sticky"}}><h4>Coin</h4></td>
                        <td className="text-end"><h4>Price</h4></td>
                        <td className="text-end"><h4>1H</h4></td>
                        <td className="text-end"><h4>24H</h4></td>
                        <td className="text-end"><h4>7d</h4></td>
                        <td className="text-end"><h4>30d</h4></td>
                        <td className="text-end"><h4>Market Cap (Millions)</h4></td>
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin => {
                        return(
                            <tr>
                                <td>{coin.symbol.toUpperCase()}</td>
                                <td className="text-end">${(Math.round(coin.current_price * 100)/100).toFixed(2)}</td>
                                <td className="text-end">{(Math.round(coin.price_change_percentage_1h_in_currency * 100)/100).toFixed(2)}%</td>
                                <td className="text-end">{(Math.round(coin.price_change_percentage_24h_in_currency*100)/100).toFixed(2)}%</td>
                                <td className="text-end">{(Math.round(coin.price_change_percentage_7d_in_currency*100)/100).toFixed(2)}%</td>
                                <td className="text-end">{(Math.round(coin.price_change_percentage_30d_in_currency*100)/100).toFixed(2)}%</td>
                                <td className="text-end">{(coin.market_cap/1000000).toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </Container>
        </>
    )
}
export default Home;