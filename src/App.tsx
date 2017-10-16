import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import RootStore from './stores/RootStore';
import { Container } from './components';

class App extends React.Component {
    render() {
        return (
            <Provider store={RootStore}>
                <Router>
                    <div>
                        <Route path="/" component={Container} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
