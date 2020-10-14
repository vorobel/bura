import React, { useState } from 'react';
import './funcComp.css';


const FuncComp = ({ todos }) => {
    const [done, setDone] = useState(false);

    console.log(done);
    let classNames = 'todo-list-item-label test-label';

    function onLabelClick () {
        return (
            classNames += ' done'
        )
        }


    return (

        <div>
            {todos.map((item, index) => {
                return (
                    <span className={done ? 'todo-list-item test done' : 'todo-list-item test'} key={index}>
                        <span
                            className={classNames}
                            onClick={onLabelClick}
                        >
                            {item.label}
                        </span>

                        <button type="button"
                            className="btn btn-outline-success btn-sm float-right">
                            <i className="fa fa-exclamation" />
                        </button>

                        <button type="button"
                            className="btn btn-outline-danger btn-sm float-right">
                            <i className="fa fa-trash-o" />
                        </button>
                    </span>
                )
            })}



        </div>
    )
}

export default FuncComp;