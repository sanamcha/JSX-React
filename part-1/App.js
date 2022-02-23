
const App = () => {
    return (
        <div>
           
            <FirstComponent />
            <NamedComponent name="sam" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
    );