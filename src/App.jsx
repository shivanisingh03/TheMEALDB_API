import './App.css';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from "react"
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`
export default function Home() {
    // const {idMeal}=recipe
    const [apidata, setapidata] = useState([])

    const [addData, setAddData] = useState([])

    const [invoiceaddData, setinvoiceaddData] = useState([])


    const [allsearch, setAllSearch] = useState('')

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setapidata(data.meals)
        // console.log(apidata)
    }
    fetchData()


    const Function = !allsearch ? apidata : apidata.filter((item) =>
        item.strMeal.toLowerCase().includes(allsearch.toLowerCase())
    )

    useEffect(() => {
        fetchData()
        console.log(apidata)

    }, [])

    return (
        <div style={{ background: "#2d2013" }}>

            <div style={{ width: "99vw", height: "20vh", background: "#23180d" }}>

                <div style={{ marginTop: '4vh', background: "#23180d" }}>
                    <img src="	https://www.themealdb.com/images/logo-small.png" alt="" /><button style={{ background: '#c52d2f', marginLeft: "30vw", width: "15vh", height: "5vh" }}>Home</button> <button style={{ marginLeft: "2vh", width: "15vh", height: "5vh" }}>API</button> <button style={{ marginLeft: "2vh", width: "15vh", height: "5vh" }}>Forum</button ><button style={{ marginLeft: "2vh", width: "10vh", height: "5vh" }}><img src='https://www.themealdb.com/images/facebook_icon.png' /></button><button style={{ marginLeft: "2vh", width: "10vh", height: "6vh" }}><img src='https://www.themealdb.com/images/twitter_icon.png' /></button> <input style={{ width: "4vw", borderTopRightRadius: "0", borderBottomRightRadius: "0" }} type="text" placeholder='Search' /></div>
            </div>

            <div style={{ border: '1px solid #2d2013', background: "#2d2013" }}>
                <h1 style={{ marginLeft: '34vw', color: 'white' }}>Welcome to TheMealDB</h1>
                <div style={{ marginTop: '-18vh' }}><img src='https://www.themealdb.com/images/meal-icon.png' />
                    <p style={{ marginLeft: '24vw', marginTop: '-13vw', color: 'white' }}>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
                    <p style={{ marginLeft: '23vw', marginTop: '-2vh', color: 'white' }}>We also offer a <span style={{ color: "#d57d1f" }}>free JSON API</span>  for anyone wanting to use it, with additional features for subscribers.</p>
                    <button style={{ marginLeft: "44vw", width: "25vh", height: "4vh", marginTop: '-2vh', background: "#ffc439", borderRadius: "4px" }}><img style={{ width: '4vw', height: '5vh', marginRight: '5vw', marginTop: '0.5vh' }} src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4' /> <p style={{ marginTop: '-5.5vh', marginLeft: '9vh', color: 'black' }}>Subscribe</p> </button>
                    <p style={{ marginLeft: '36vw', marginTop: '-2vh', color: 'white' }}>Click to Support $2 per month (cancel anytime) </p>
                    <p style={{ marginLeft: '41vw', marginTop: '-2.5vh', color: 'white' }}>Currently 50 supporters</p><img style={{ marginLeft: '80vw', marginTop: '-38vh' }} src='https://www.themealdb.com/images/meal-icon.png' /></div>
            </div >

            <div style={{ border: '1px solid #2d2013', width: "99vw", height: "25vh", background: "#2d2013" }}>
                <hr
                    style={{
                        background: 'white',
                        width: '92vw',
                        height: '1px',
                        marginTop: '2vh',

                        marginLeft: '4vh'
                    }} />
                <input style={{ marginLeft: '38vw', width: "20vw", height: "5vh", marginTop: '2vh', borderTopRightRadius: "0", borderBottomRightRadius: "0" }} type="search" value={allsearch} placeholder='Search for a Meal...' onChange={(e) => {
                    setAllSearch(e.target.value)
                }} /><button style={{ width: "3vw", height: "5vh", background: 'white', color: 'black', border: '#2d2013' }}><div style={{ color: 'black' }}>< BsSearch /></div>
                </button>
                <hr
                    style={{
                        background: 'white',
                        width: '92vw',
                        height: '1px',
                        marginTop: '10vh',

                        marginLeft: '4vh'
                    }} />
                <h5 style={{ marginTop: '-11vh', marginLeft: '34vw', color: 'white' }}><img src='https://www.themealdb.com/images/icons/meal-icon6.png' /> Total Meals: 285 <img style={{ marginTop: '1vh' }} src='https://www.themealdb.com/images/icons/meal-icon4.png' /> Total Ingredients: 574 <img src='https://www.themealdb.com/images/icons/image2.png' /> Images: 285</h5>
            </div>

            <div id="home" style={{ background: "#2d2013" }}>

                {
                    Function.map((item, index) => {
                        return (
                            <div id="grid" key={index} >
                                <h2 style={{ marginLeft: '15vw', color: 'white' }}>{item.idMeal} </h2>
                                <h3 style={{ marginTop: '-3.5vw', color: 'white' }}>($100)</h3>
                                <img id='foodimg' src={item.strMealThumb} />
                                <h2 style={{ color: "#d57d1f", marginLeft: "14vh", marginTop: '-0.3vh' }}>{item.strMeal} </h2>
                                <button style={{ marginTop: '-4vh', color: 'Black', width: "15vh", height: "4vh", background: 'white' }} onClick={() => {
                                    let Object = {
                                        idMeal: item.idMeal,
                                        Price: 100,
                                        strMeal: item.strMeal,
                                        strMealThumb: item.strMealThumb
                                    }
                                    setAddData([...addData, Object])
                                    console.log(addData)
                                }}>Add To Cart</button>


                                <button style={{ marginTop: '-4vh', color: 'Black', width: "15vh", height: "4vh", background: 'white', marginLeft:'6vw' }} onClick={() => {
                                    let InvoiceObject = {
                                        idMeal: item.idMeal,
                                        Price: 100,
                                        strMeal: item.strMeal,
                                        strMealThumb: item.strMealThumb
                                    }
                                    setinvoiceaddData([...invoiceaddData, InvoiceObject])
                                    console.log(addData)
                                }}>Invoice</button>





                            </div>
                        )
                    })
                }


            </div>

            <div>
                <table style={{ border: '2px solid black' }}>
                    <th>Dish Name</th>
                    <th>Price</th>
                    <th>Dish</th>
                    <th>Total</th>
                </table>

            </div>

            {
                invoiceaddData.map((item, index) => {
                    return (
                        <div>

                            <body>
                                <table>
                                    <tr>
                                        <td>{item.strMeal}</td>
                                        <td>price:100</td>
                                        <td><img style={{ width: "100px", height: "50px" }} src={item.strMealThumb} /></td>
                                        <td>{invoiceaddData.length * 60}</td>
                                    </tr>
                                </table>
                            </body>


                        </div>
                    )
                })
            }


        </div>

    )
}


















