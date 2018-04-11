console.log('app is running')

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// can run with --watch flag to output changes in realtime

class IndecisionApp extends React.Component {
    render() {
        const title = 'Dat app';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['loop', 'zoop'];

        return (
            <div>
                <Header title = {title} subtitle={subtitle}/>
                <Action />
                <Options options = {options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick () {
        alert('The british are coming!')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>what should I do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    // bare minimum to override constructor function
    // and ensure you have access to this.props
    constructor(props) {
        super(props);
        // Ensures the context stays correct and is 
        // only called once before the component renders
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll () {
        alert('trashing your options')
    }

    render() {
        return (
            <div>
                <p>{this.props.options.length}</p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                <button onClick={this.removeAll}>BOOM</button>
                <Option />
            </div>
        );
    }
}



class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option)
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option </button>
                </form>
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));