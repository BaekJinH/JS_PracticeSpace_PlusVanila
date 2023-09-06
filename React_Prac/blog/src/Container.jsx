import './css/App.css';
import './css/reset.css';
import Layout from './Layout'
import SubLayout from './SubLayout'

function Container () {
    return (
        <div id="container">
            <main>
                <Layout />
                <SubLayout />
            </main>
        </div>
    );
}


export default Container