import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();
