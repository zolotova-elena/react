import moment from 'moment';

export default class RowTraining {
    constructor (date, value) {
        this.date = date;
        this.value = value;
        this.timeStamp = moment(date, 'DD.MM.YY').unix();
    }
}
