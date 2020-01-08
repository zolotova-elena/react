import React from 'react';
//import ReactDom from 'react-dom';

export default class List extends React.Component {

    sortList = (list, deleteTraining) => {
        let newList = list.map((item, i) => {
            return (
                <tr key={i}>
                    <th>{item.date}</th>
                    <td>{item.value}</td>
                    <td>
                        <button type={'button'} className="btn btn-outline-dark"><i className="fa fa-pencil"aria-hidden="true"></i></button> &nbsp;
                        <button type={'button'} onClick={() => deleteTraining(item.date)} className="btn btn-outline-dark"><i className="fa fa-trash"  aria-hidden="true"></i></button></td>
                </tr>
            )
        });
        return newList;
    };

    render(){
        const {list, deleteTraining} = this.props;

        let trs = this.sortList(list, deleteTraining);
        return(
            <div className={'row col-6'}>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Дата (ДД.ММ.ГГ)</th>
                        <th scope="col">Пройдено км</th>
                        <th scope="col">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {trs}

                    </tbody>
                </table>
            </div>
        );
    };
}