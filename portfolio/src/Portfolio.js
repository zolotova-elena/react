import React from 'react';
//import ReactDom from 'react-dom';
import Toolbar from './Toolbar';
import ProgectList from './ProgectList';

export default class Portfolio extends React.Component {
    state = {
        filter : 'All'
    };

    items = [{
        id : 1,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards"
    }, {
        id : 2,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
    }, {
        id : 3,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
    }, {
        id : 4,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
    }, {
        id : 5,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards"
    }, {
        id : 6,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites"
    }, {
        id : 7,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
    }, {
        id : 8,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
    }, {
        id : 9,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites"
    }, {
        id : 10,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers"
    }, {
        id : 11,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites"
    }, {
        id : 12,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards"
    }, {
        id : 13,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites"
    }, {
        id : 14,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
    }, {
        id : 15,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
    }, {
        id : 16,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites"
    }, {
        id : 18,
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers"
    }];

    filters = ["All", "Websites", "Flayers", "Business Cards"];

    onSelectFilter = (filter) => {
        this.setState({filter});
        //console.log(filter);
    };

    render(){
        const {filter} = this.state;
        let currItems = [];
        if (filter != 'All') {
            currItems = this.items.filter((item) => {
                return item.category == filter;
            });
        } else {
            currItems = this.items;
        }

        return(
            <div className={'col-md-12'}>
                <div className="container">
                    <div className={'row col-lg-12 col-md-12 col-sm-12 col-xs-12 portfolio-list-item'}>
                        <Toolbar
                            filters={this.filters}
                            selected={filter}
                            onSelectFilter={this.onSelectFilter}/>
                    </div>

                    <ProgectList projects={currItems}/>
                </div>
            </div>
        );
    };
}
