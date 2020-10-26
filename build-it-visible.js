let Visibility = false;

function onChange() {
    Visibility = Visibility;
    render();
};

function render() {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onChange}>
                {Visibility ? 'hide details' : 'show details'}
            </button>
            {Visibility && (
                <div>{<p>qwetr12345 is the code</p>}</div>
            )
            }
        </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
render();