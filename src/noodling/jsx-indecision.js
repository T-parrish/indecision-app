console.log('app is running')

// JSX -> Javascript XML
// compile to vanilla JS with babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// can run with --watch flag to output changes in realtime

const datas = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer',
    options: []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('form submitted');
    const option = e.target.elements.option.value;

    if (option) {
        datas.options.push(option);
        e.target.elements.option.value = '';
        renderOptionApp();
    };
};

const numbers = [55, 76, 97];

const reset = () => {
    datas.options = [];
    renderOptionApp();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * datas.options.length);
    const option = datas.options[randomNum];
    alert(option);
};

const renderOptionApp = () => {
    const template = (
        <div>
            <h1>{datas.title}</h1>
            {datas.subtitle && <p>{datas.subtitle}</p>}
            <p>{datas.options.length > 0 ? 'Here are your options':'No options available'}</p>
            <p>{datas.options.length}</p>
            <button disabled={datas.options.length === 0} onClick={makeDecision}>Make Decision</button>
            <button onClick={reset}>Reset</button>
            <ol>
                {
                    datas.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );  

    ReactDOM.render(template, appRoot);
};

renderOptionApp();




