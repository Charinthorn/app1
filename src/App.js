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

// file1
// function App(){
//  return <Button/>
// }
// export default App

//file2
//export default function App(){
// return <Calculator2/>
//}

//file3
// export default function App() {
//   return <EventData2/>
// }

//refs-func
// export default function App(){
//   return <RefsFunc/>
// }

//State
//export default function App(){
//  return <MessageBox/>
//}

export default function App(){
  let[user,setUser] = useState()
  return(
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
}