import './App.css';
import Header from './MyComponent/Header';
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import React, { useState } from 'react';
import AddTodo from './AddTodo';
import HookCounter from './MyComponent/HookCounter';
import HookCounterTwo from './MyComponent/HookCounterTwo';
import Hook3Object from './MyComponent/Hook3Object';
import Hook4Array from './MyComponent/Hook4Array';
import Hook5useEffect from './MyComponent/Hook5useEffect';
import Hook5useEffectO from './MyComponent/Hook5useEffectO';
import Hook6useEffectO from './MyComponent/Hook6useEffectO';
import Hook7useEffectmouse from './MyComponent/Hook7useEffectmouse';
import Hook7useEffectmousetoggle from './MyComponent/Hook7useEffectmousetoggle';
import DataFetching1 from './MyComponent/DataFetching1';
import DataFetching2 from './MyComponent/DataFetching2';
import ComponentC from './MyComponent/ComponentC';
import Reducer from './MyComponent/reducer';
import Reducer1 from './MyComponent/Reducer1';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "get this done job1"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "get this done job2"
    },
    {
      sno: 3,
      title: "Go to supermarket",
      desc: "get this done job3"
    }
  ]);


  const onDelete = (todo) => {
    console.log("delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }

  const addTodo = (title, desc) => {
    console.log("add Todo function called", title, desc);
    let sno = 0
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  }



  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todos} onDelete={onDelete} />
      <HookCounter />
      <HookCounterTwo />
      <Hook3Object />
      <Hook4Array />
      {/* <Hook5useEffect/> //not sync properly */}
      {/* <Hook5useEffectO/> */}
      {/* <Hook6useEffectO/> */}
      {/* <Hook7useEffectmouse/> */}
      {/* <Hook7useEffectmousetoggle/> */}
      {/* <DataFetching1/> */}
      {/* <DataFetching2/> */}

      {/* <UserContext.Provider value={"Hiiiiiiii"}>
        <ChannelContext.Provider value={'Byeee'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Reducer/> */}

      <Reducer1/>

      <Footer />
    </>

  );
}

export default App;
