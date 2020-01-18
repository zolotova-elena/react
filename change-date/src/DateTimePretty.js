import React from 'react';
import DateTime from './DateTime'
import moment from 'moment'
import 'moment/locale/ru';

function withDateTime (Component) {
    return class extends React.Component {
        state = {
            date: ''
        };

        componentDidMount() {
            this.showDateTime()
        };

        showDateTime () {
            const {date} = this.props;
            const days = moment().diff(moment(date), 'd');
            const hours = moment().diff(moment(date), 'H');
            let dt = days > 1 ? `${days} дней назад` : (hours > 1 ? '5 часов назад' : '12 минут назад')

            //console.log('date',date);
            this.setState({date: dt})
        };
        render() {
            return (
                <Component {...this.props} date={this.state.date} />
            );
        };
    }
}

const DateTimePretty = withDateTime(DateTime);
export default DateTimePretty