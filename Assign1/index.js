'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return '“You have Like!”';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Click to Like'
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));