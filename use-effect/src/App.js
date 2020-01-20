import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

import List from './List';
import Details from './Details';

function App() {
    const [info, setInfo] = useState({id: null});
    const [data, setData] = useState({id: null});
    const [isLoading, setLoading] = useState(false);

    const listClick = (id) => { // получение нового id
        setInfo({id})
    };

    useEffect(() => {
        if(data.id) {
            setLoading(false)
        } else {
            setLoading(true)
        }

        if(info.id) {
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id.id}.json`, {mode: 'cors'})
                .then(response => {
                    if(response.ok) {
                        response.json()
                            .then(d => {
                                setData({id: d}) // setData(prev => ({...prev, id: d}))
                            })
                    }})
                .then(setInfo({id: 0}))
                .then(setLoading(false))
                .catch((error) => {
                    console.log('error', error);
                });
            console.log('data',data);
            if((data.id !== null) && (data.id.id !== info.id.id)) {
                setData({id: null})// очистка Details
            }

        }
    }, [info.id, data]);

    return (
        <div className={'row'}>
            <List listClick={listClick}/>
            {isLoading ? <p>Loading...</p> : null}
            {data.id !== null ? <Details data={data.id}/> : null }
        </div>
    )
}

export default App;
