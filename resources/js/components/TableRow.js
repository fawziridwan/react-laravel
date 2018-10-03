import React, { Component } from "react";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.price}</td>
                <td>
                    <button className="btn btn-info" title="Edit">
                        Edit
                    </button>
                </td>
                <td>
                    <button className="btn btn-danger" title="Delete">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
