import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CommentList extends Component {
    renderComments() {
        return this.props.comments.map(comment => {
            return<li key={comment} >{comment}</li>
        })
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}
function mapStateToProps({comments}){
    return{comments}
}
export default connect(mapStateToProps, {})(CommentList)
