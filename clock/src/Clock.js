import React from 'react';
import moment from 'moment';
//import ReactDom from 'react-dom';

export default class Clock extends React.Component {

    constructor (props) {
        super(props);
        const {id,name, time} = props;
        this.state = {
            id   : id,
            name : name,
            time : time,
            timer: null
        };
    };

    timer = () => {
        let {time} = this.state;
        //console.log('time',time);
        time += 2000;
        //console.log('time',time);
        this.setState({time});
    };
    //setInterval(tick, 1000);

    componentDidMount = () => {
        //const timer = setInterval(this.timer, 1000);
        this.setState({
            timer : setInterval(this.timer, 2000)
        });
    };

    onDelete = (data) => {
        //console.log('data', data);
        let {timer} = this.state;
        timer = clearInterval(timer);
        this.setState({timer});

        const {deleteItem} = this.props;
        deleteItem(data);
    };


    render(){
        const {id, name, time} = this.state;

        return(
            <div className={'col-3 clock'}>
                <h4>{name}&nbsp;<i className="fa fa-window-close"  aria-hidden="true" onClick={() => this.onDelete(id)}></i></h4>
                <input type="text" value={moment(time).format('HH:mm:ss')} disabled={true}/>
            </div>
        );
    };
}