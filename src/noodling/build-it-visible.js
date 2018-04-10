console.log('app is running')

let visibility = false;

const toggleVis = () => {
    visibility = !visibility;
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1></h1>
            <button onClick={toggleVis}>
                {visibility ? 'Hide details': 'show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. Look at this.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();

