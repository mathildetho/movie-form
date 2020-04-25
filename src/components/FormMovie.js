import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
    }

    onChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]: value});
    }

    submitForm = (e) => {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Good job, ${res.title} is the best !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Arghhh your film don't work`);
            });
    }

    render() { 
        return (
            <div className="Form">
            <h1>Your favorite movie</h1>

            <form onSubmit={this.submitForm}>
                <div className="form-data">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                    placeholder='Enter your fucking best title movie here'
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="poster">Poster</label>
                    <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                    placeholder="What is his magnificient poster?"
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        type="comment"
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                        placeholder='Tell us why we should definitely watch it?'
                    />
                </div>
                <div className="form-data">
                    <input type="submit" value="Submit" />
                </div>
            </form>
            </div>
        );
    }
}
 
export default FormMovie;