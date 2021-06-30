import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './Approuter/Approuter';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
const Jsx=()=>(
    <div>
        <h1>Thhis is my page</h1>
    </div>
)

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
