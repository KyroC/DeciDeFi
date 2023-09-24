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
                    <Col className="col-4">
                        <Card style={{height:'18rem'}}>
                        <Card.Header>Trending Coins </Card.Header>
                        <Carousel style={{height:'18rem'}} >
                                {trendingCoins.map(coin => {
                                    return(
                                        <Carousel.Item className="p-5">
                                             <Card.Title>
                                                {coin.item.name}
                                             </Card.Title>
                                             <Card.Img style={{width:'2rem'}}  src={coin.item.large}/>

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
                    <Col className="col-4">
                        <Card style={{height:'18rem'}}>
                        <Card.Header>Trending NFTs </Card.Header>
                        <Carousel style={{height:'18rem'}}>
                                {trendingNfts.map(nft => {
                                    return(
                                        <Carousel.Item className="p-5">
                                             <Card.Title>
                                                {nft.name}
                                             </Card.Title>
                                             <Card.Img style={{width:'2rem'}}  src={nft.thumb}/>

                                        <Card.Text >
                                            {nft.symbol}
                                            <br />
                                            {nft.native_currency_symbol}
                                        </Card.Text>
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