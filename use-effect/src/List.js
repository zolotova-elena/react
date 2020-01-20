import React, {useState, useEffect} from 'react';

export default function List({listClick}) {
    const [name, setNames] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', {mode: 'cors'})
            .then(response => {
                if(response.ok) {
                    response.json()
                    .then(data => {
                        setNames(data)
                    })
                }})
            .catch((error) => {
                console.log('error', error);
            })
    }, []);

    return (
        <div className="card col-3">
            <ul className="list-group list-group-flush">
                {name.map((item) => {
                    return (
                        <li key={item.id} className="list-group-item" onClick={() => listClick(item)}>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}