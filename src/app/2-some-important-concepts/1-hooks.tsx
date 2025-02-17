import { useState, useEffect, useContext, createContext } from "react";

/// 1. useState

const [count, setCount] = useState(0);

const [state, setState] = useState({ count: 0 });












const [expansive, setExpansive] = useState(() => {
  const initialState = 4;
  return initialState;
});











// 1.1 setState

setCount(15);

setCount(count + 1);

setCount((c) => c + 1);
















/// 2. useEffect

useEffect(() => {
  console.log("useEffect that runs on every render");
});






useEffect(() => {
  console.log("useEffect that runs only on the first render (debatable)");
}, []);







useEffect(() => {
  console.log("useEffect that runs only when count changes");
}, [count]);






const subscribe = () => {
  console.log("subscribe");

  return () => {
    console.log("unsubscribe");
  };
};

useEffect(() => {
  const unsub = subscribe();

  return () => {
    unsub();
    // now I can gracefully clean up and die
  };
}, [count]);











/// 3. useContext

const MyContext = createContext(1);

<MyContext.Provider value={1}>
  // this is an example of a child component
</MyContext.Provider>;

const value = useContext(MyContext);











// more then one context
const MyContext1 = createContext(1);
const MyContext2 = createContext(2);
const MyContext3 = createContext(3);

<MyContext1.Provider value={1}>
  <MyContext2.Provider value={2}>
    <MyContext3.Provider value={3}>
      // this is an example of a child component
    </MyContext3.Provider>
  </MyContext2.Provider>
</MyContext1.Provider>;
