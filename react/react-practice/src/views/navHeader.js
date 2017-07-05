import React from 'react';

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="naviItem">
        <img src='/images/navHeader.png' className='naviHeaderImage' />
      </li>
    );
  }
}
