import React from "react";
import Video from './Video';
import Article from './Article';
import Popular from './Popular';
import New from './New';

export default function WrapperComponent (props) {
    const {type} = props;
    if (type === 'video') {
        return (
            <ComponentForVideo {...props} />
        );
    } else if (type === 'article') {
        return (
            <ComponentForArticle {...props} />
        );
    }
};

const getWrap = (Component) => {
    return (props, ...args) => {
        const node = Component.apply(this, [props, ...args]);
        const {views} = props;
        const newComp = views > 1000 ? <Popular>{node}</Popular> : views < 100 ? <New>{node}</New> : node;
        return newComp;
    }
};

const ComponentForVideo = getWrap(Video);
const ComponentForArticle = getWrap(Article);