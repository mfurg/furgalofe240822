import { useState, useEffect } from 'react';
import './App.scss';
import { Button } from './Button';
import { percentCalc } from './helper';

function App() {
  const [data, setData] = useState([{ name: "Landing Page", time: 7.4 },
                { name: "Configurator", time: 0.2 },
                { name: "Check-out", time: 7.0 },
                { name: "Deal", time: 3.8 }])
  let totalMargin = 0;
  const totalTime = data.reduce((accumulator, object) => {
    return accumulator + object.time;
  }, 0).toFixed(2);

  data.forEach((item) => {
    item.margin = totalMargin;
    totalMargin += percentCalc(item.time, totalTime)
  });

  useEffect(()=>{
    const timer = setInterval(setRandomData, (60000*0.53));
  
    return () => {
      clearInterval(timer);
    };
  },[]);
  

  const setRandomData = () => {
    let newData = data.map((item) => {
      return {...item, time: Math.ceil(Math.random()*30)};
   })
   setData(newData)
  }
 
  return (
    <div className="App">
      <dl>
        <dt>
          SPEND TIME ( {totalTime} SECONDS)
        </dt>
        {data.map((item, i) => 
          <dd key={i} className={`percentage margin-${item.margin} percentage-${percentCalc(item.time, totalTime)}`}>
            <span className="text">
              {item.name} {item.time}s
            </span>
          </dd>)}
          <dt>
            <Button setRandomData={setRandomData}>Random</Button>
          </dt>
      </dl>
    </div>
  );
}

export default App;
