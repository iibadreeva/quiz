import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/home" render={() => <h1>Home page</h1>} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/quiz-creator" component={QuizCreator} />
                    <Route path="/quiz/:id" exact component={Quiz} />
                    <Route path="/" component={QuizList} />
                    <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />
                </Switch>
            </Layout>
        )
    }
}

export default App;

