import React from 'react';

export default function Details({data}) {
    return (
        <div className="card col-3" >
            <img src={data.avatar} className="card-img-top" alt="avatar" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">City: {data.details.city}</li>
                <li className="list-group-item">Company: {data.details.company}</li>
                <li className="list-group-item">Position: {data.details.position}</li>
            </ul>
        </div>
    )
}