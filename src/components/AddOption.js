import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            err: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const err = this.props.handleAddOption(option);

        this.setState(() => ({err}))

        if (!err) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.err && <p>{this.state.err}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option </button>
                </form>
            </div>
        );
    }
}