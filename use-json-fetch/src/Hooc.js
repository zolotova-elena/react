import React from "react";
import useJsonFetch from './useJsonFetch';

export default function Hook({url}) {
    const [data, loading, error] = useJsonFetch(url);

    console.log('ddd',error);

    return (
        <div>
            <>{data != null ? <h3>status: {data.status}</h3> : null}</>
            <>{loading ? <h3>loading: Loading...</h3> : null}</>
            <>{error ? <h3>error: {error}</h3> : null}</>
        </div>
    )
}