import React from 'react'

export default class Notes extends React.Component {
    render () {
        const {notes, handleDelete} = this.props;

        return (
            <div className={'row'}>
                {
                    notes.map((item, i) => {
                        return (
                            <div key={i} className={'col-3 notes'}>
                                <div className={'notes-close'}>
                                    <i className="fa fa-2x fa-window-close-o" aria-hidden="true" onClick={() => handleDelete(item.id)}></i>
                                </div>
                                <div className={'notes-body'}>
                                    {item.content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}