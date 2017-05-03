"use strict";
import React, { Component, PropTypes } from "react";

class Notes_form extends React.Component{

	handleSubmit(event){
		event.preventDefault();
		if(this.refs.title.value=="") return;
		var newNote={
			title : this.refs.title.value,
			content : this.refs.content.value,
			createTime : new Date()
			//"posted @"+new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
		};
		this.refs.yout_form.reset();
		this.props.onNewNote(newNote);
	}

	render(){
		var style={
			display : this.props.formDisplayed ? "block" : "none"
		};
		return(
			<div className="note_form_wrap">
				<form ref="yout_form" action="#" className="note_form" style={ style } onSubmit={ this.handleSubmit.bind(this) }>
					<h5>笔记</h5>
					<input ref="title" type="text" className="your_title" placeholder="你的笔记的标题"/>
					<textarea ref="content" className="your_content" placeholder="笔记的内容"/>
					<input type="button" value="取消" className="cancel_btn" onClick={ this.props.onToggleForm }/>
					<input type="submit" value="确认" className="confirm_btn"/>
				</form>
			</div>
		);
	}
}

Notes_form.propTypes = {
	onToggleForm : PropTypes.func.isRequired,
	formDisplayed : PropTypes.bool.isRequired,
	onNewNote : PropTypes.func.isRequired
}

export default Notes_form; 