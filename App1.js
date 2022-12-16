import React,{useState} from "react";
// import "./Signup.css"
import "./App.css"
export default function App(props){
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [allData,setAllData]=useState([])
    const[search,setSearch]=useState("")
    var [newList,setNewList]=useState([])
    return(
        <div id="container">
            <center>
            <input id="search" type='text' placeholder='search' onChange={(f)=>{
        setSearch(f.target.value)
      }}></input>
             <button id="click" onClick={()=>{
                let list=[]
                allData.filter((val)=>{
                    if(val.firstName===search){
                        list.push(val)
                    }
                    setNewList(list)
                })
             }}>search</button>
             <br></br>
             <br></br>
           
            <input id="firstname" type="text" placeholder="firstname" onChange={(e)=>{
                setFirstName(e.target.value)
            }}/>
            <input id="lastname" type="text" placeholder="lastname" onChange={(e)=>{
                setLastName(e.target.value)
            }}/>
            <input id="email" type="email" placeholder="enter email" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
             <input id="password" type="password" placeholder="enter password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
           
        <button id="submit1" onClick={()=>{
                let tempObj={
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password
                }
                console.log(tempObj)
                setAllData([...allData,tempObj])
                setSearch("")
                
            }}>Submit</button>
            {
            search.length<3?allData.map((item,index)=>{
                return(
                    <div>
                        <table>
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                        </table>
            
                    </div>
                )
            })
        :newList.map((item,index)=>{

                return(
                <div>
                <table>
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
                </table>
                    </div>
                )
            })
        }
            </center>
        </div>
    )

}