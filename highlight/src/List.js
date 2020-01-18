import React from "react";
import WrapperComponent from './WrapperComponent'

export default function List(props) {
    let {list} = props;
    return list.map((item, i) =>{
        return <WrapperComponent key={i} {...item}/>
    });
};