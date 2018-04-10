console.log('app is running')

// JSX -> Javascript XML
// compile to vanilla JS with babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// can run with --watch flag to output changes in realtime

const datas = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{datas.title}</h1>
        {datas.subtitle && <p>{datas.subtitle}</p>}
        <p>{datas.options.length > 0 ? 'Here are your options':'No options available'}</p>
    </div>
);

const User = {
    name: 'James May',
    age: '28',
    location: 'japan'
};

function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>
    }
};

// class -> classname in JSX
let count = 0;
const addOne = () => {
    count+=1;
    renderCounterApp();
};
const minusOne = () => {
    count -=1;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');
const testRoot = document.getElementById('testApp');

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, testRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>	
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();