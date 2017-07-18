import React from 'react';
import NavMenuItemBs from './navMenuItemBs';

export default class NavMenuBs extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
      	<div className="container-fluid">
      		<div className="navbar-header">
      			<a href="/" className="navbar-brand">Dribbble</a>
      		</div>

      		<div className="collapse navbar-collapse" id="bs-navbar-collapse">
      			<ul className="nav navbar-nav">
      			{
      				this.props.menuItems.map((item) => {
      					return (
      						<NavMenuItemBs link={item.url} title={item.text} subItems={item.subItems}></NavMenuItemBs>
      					);
      				})
      			}
      			</ul>
      			<form className="navbar-form pull-right">
      				<input type="text" className="form-control" placeholder="search" />
      			</form>
      			<ul className="nav navbar-nav pull-right">
      				<li>
      					<a href="/SignUp">Sign up</a>
      				</li>
      				<li>
      					<a href="/SignIn">Sign in</a>
      				</li>
      			</ul>
      		</div>
      	</div>
      </nav>
    );
  }
}
