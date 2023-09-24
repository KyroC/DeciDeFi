import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack'

function Home() {
    const [coins, setCoins] = useState([])
    const [trendingCoins, setTrendingCoins] = useState([])
    const [trendingNfts, setTrendingNfts] = useState([])
    const [filteredCoins, setFilteredCoins] = useState([])
    const [sortedCoins, setSortedCoins] = useState([])
    
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
            (result) => {
                setCoins(result)
                setSortedCoins(result)}
                )  
    },[])
    const handleSortMcap = (e) => {
        e.preventDefault()
        const sortingArray = sortedCoins.sort(
            (p1,p2) => (p1.market_cap < p2.market_cap) ? 1 : (p1.market_cap > p2.market_cap) ? - 1 : 0 );
            setSortedCoins([...sortingArray])

    }

    const handleSortPrice = (e) => {
        e.preventDefault()
        const sortingArray = sortedCoins.sort(
            (p1,p2) => (p1.current_price < p2.current_price) ? 1 : (p1.current_price > p2.current_price) ? - 1 : 0 );
            setSortedCoins([...sortingArray])

    }
    const handleSortGainer = (e) => {
        e.preventDefault()
        const sortingArray = sortedCoins.sort(
            (p1,p2) => (p1.price_change_percentage_24h < p2.price_change_percentage_24h) ? 1 : (p1.price_change_percentage_24h > p2.price_change_percentage_24h) ? - 1 : 0 );
            setSortedCoins([...sortingArray])
    }
    const handleSortLoser = (e) => {
        e.preventDefault()
        const sortingArray = sortedCoins.sort(
            (p2,p1) => (p1.price_change_percentage_24h < p2.price_change_percentage_24h) ? 1 : (p1.price_change_percentage_24h > p2.price_change_percentage_24h) ? - 1 : 0 );
            setSortedCoins([...sortingArray])
    }
    return(
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xl="4" lg="6" md="8">
                        <Card style={{height:'18rem'}}>
                        <Card.Header><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                            </svg>Trending Coins  
                        </Card.Header>
                        <Carousel interval={10000} style={{height:'18rem'}} >
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
                                                            <ListGroup.Item className="d-flex justify-content-between"><span>Symbol: </span><span>{coin.item.symbol}</span></ListGroup.Item>
                                                            <ListGroup.Item className="d-flex justify-content-between"><span>MCAP Rank:</span><span> {coin.item.market_cap_rank}</span></ListGroup.Item>
                                                            <ListGroup.Item className="d-flex justify-content-between"><span>{coin.item.symbol}/USD</span> <span>$10000</span></ListGroup.Item>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                            </svg>Trending NFTs
                         </Card.Header>
                        <Carousel interval={10000} style={{height:'18rem'}}>
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
                                                            <ListGroup.Item className="d-flex justify-content-between"><span>Symbol: </span><span>{nft.symbol}</span></ListGroup.Item>
                                                            <ListGroup.Item className="d-flex justify-content-between"><span>Native Coin</span><span> {nft.native_currency_symbol.toUpperCase()}</span></ListGroup.Item>
                                                            <ListGroup.Item className="d-flex justify-content-between"><span>{nft.symbol}/ETH</span><span>$1000</span></ListGroup.Item>
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
            <Stack direction="horizontal">
                
                <h1>Market</h1>
                <DropdownButton
                title="Sort By"
                className="ms-auto border rounded"
                variant="Secondary">
                    
                    <Dropdown.Item onClick={(e) => handleSortMcap(e)}>Market Cap (Default)</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleSortPrice(e)}>Price</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleSortGainer(e)}>Top Gainers %</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => handleSortLoser(e)}>Top Losers %</Dropdown.Item>
                </DropdownButton>
            </Stack>
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
                    {sortedCoins.map(coin => {
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