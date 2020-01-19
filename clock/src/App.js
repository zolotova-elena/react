import React from 'react';
import moment from 'moment';
//import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Clock from "./Clock";
import nanoid  from "nanoid";

export default class App extends React.Component {
  state = {
      currUserTZ : moment().utcOffset() * 60,
      clocks : [/*{
          name : 'grinvich',
          tz : 0,
          id : 'ss'
      }
      */]
  };

    addClock = (name, tz) => {
        tz = tz * 60*60;
        let {clocks} = this.state;
        const id = nanoid();
        clocks.push({id, name, tz});
        //console.log('clocks create', clocks);
        this.setState({clocks});
    };

    getClocks = () => {
        const {currUserTZ, clocks} = this.state;
        const delItem = this.deleteItem;
        return clocks.map((item,i) => {
            const currMillSec = ( moment().unix() - currUserTZ + item.tz) * 1000;
            //const time = moment(currMillSec).format('HH:mm:ss');
            //console.log('time',moment(currMillSec).format('HH:mm:ss'));
            return (
                <Clock
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    time={currMillSec}
                    deleteItem={delItem}/>
            );
        })
    };

    deleteItem = (id) => {
        let {clocks} = this.state;
        let index = -1;
        //console.log('before del', clocks);
        clocks.forEach((item, i) => {

            if (item.id === id) {
                index = i;
            }
        });

        if (index > -1) {
            if (clocks.length === 1) {
                clocks = [];
            } else {
                clocks.splice(index, 1);
            }
        }
        //console.log('after del', clocks);
        this.setState({clocks});
    };

  render () {
      //const {currUserTZ, clocks} = this.state;
      //console.log(currUserTZ);
      return (
          <div className="App">
              <Form addClock={this.addClock}/>
              <div className={'row'}>
                  {this.getClocks()}
              </div>
          </div>
      );
  }
}


