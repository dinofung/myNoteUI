"use strict";
import React, { Component, PropTypes } from "react";

class Notes_item extends React.Component{

	handleOver(){
		this.refs.delete.style.display="block";
	}

	handleOut(){
		this.refs.delete.style.display="none";
	}

	handleDelete(){
		var _id=this.props._id;//this.props.date;
		this.props.onDeleteNote(_id);
	}

	render(){
		return(
			<div>
				<div className="notes_item" onMouseOver={ this.handleOver.bind(this) } onMouseOut={ this.handleOut.bind(this) }>
					<h4>{ this.props.title }</h4>
					<p>{ this.props.content }</p>
					<p>{ this.props._id }</p>
					<p>{ this.props.createTime }</p>
					<input className="delete" ref="delete" type="button" value="删除它" onClick={ this.handleDelete.bind(this) }/>
					<span className="date">{ this.props._id }</span>
				</div>
			</div>
		);
	}
}

Notes_item.propTypes = {
	title : PropTypes.string.isRequired,
	content : PropTypes.string.isRequired,
	createTime : PropTypes.string.isRequired,
	_id : PropTypes.string.isRequired,
	onDeleteNote : PropTypes.func.isRequired
}

export default Notes_item;