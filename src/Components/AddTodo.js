import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddTodo extends React.Component {
	state = {
		content: null
	}
	handleChange = (e) => {
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state)
		this.setState({
			content: ''
		})
	}
	render() {

		return (
			<div>
				<Container>
					<Form onSubmit={this.handleSubmit}>
						<FormGroup><br />
							<h2 className="text-info text-center">Add your Todo</h2>
							<Label htmlFor="todo">Content</Label>
							<Input type="text" name="todo" id="todo" value={this.state.content}
								onChange={this.handleChange} required />
							<br></br>
							<Button type="submit">Add your todo</Button>
						</FormGroup>
					</Form>
				</Container>
			</div>

		)
	}
}


export default AddTodo;