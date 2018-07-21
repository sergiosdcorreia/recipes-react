import React from 'react';

import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

fetch(`${API_URL}/v1/recipes`)
.then(res => res.json())
.then(json => console.log(json));

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <RecipeList style={{ flex: 3 }} />
                    <RecipeDetail style={{ flex: 5 }} />
                </main>
            </div>
        );
    }
}

export default App;