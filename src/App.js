import React, { useState } from 'react'
import { Header,Content,Footer } from './func-components'
import Calendar from './class-components'
import Button from "./class-components";
import {Calculator2} from "./calculator";
import {EventData2} from "./event-data";
import RefsFunc from './refs-func';
import MessageBox from './state-func';
import { userContext } from './context';
import Header2 from './context-header2'
import Content2 from './context-content2'
import Router2 from './router2';
import Router3 from './router3';

//export default function App(){
//  return(
//    <>
//      <Header/>
//      <p><center><Calendar/></center></p>
//      <Content/>
//      <Footer/>
//    </>
//  )
//}

//file1,2,3,refs-func,State,router2
export default function App(){
//   return <Button/>
//   return <Calculator2/>
//   return <EventData2/>
//   return <RefsFunc/>
//   return <MessageBox/>
     return <Router3/>
}

// export default function App(){
//   let[user,setUser] = useState()
//   return(
//     <userContext.Provider value={[user,setUser]}>
//       <Header2/>
//       <Content2/>
//     </userContext.Provider>
//   )
// }

