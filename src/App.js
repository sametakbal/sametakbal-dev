import MyRoutes from "./router";
import Header from "./components/Header";

function App() {
    return (<>
        <Header/>
        <div className="container md:mx-auto lg:mx-auto">
            <MyRoutes/>
        </div>
    </>);
}

export default App;
