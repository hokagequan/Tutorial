import React from 'react';
import signals from 'signals';
import ShotsItem from './shotsItem';
import '../css/shots.css';

const filterSignal = new signals.Signal()

let tempData = [
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
	{
		image: "http://image5.tuku.cn/wallpaper/Space%20Wallpapers/1393_2560x1600.jpg",
	},
]

export default class ShotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	shotsData: []
    }
  }

  componentDidMount() {
  	this.setState({
  		shotsData: tempData 
  	});
  }

  render() {
    return (
      <div>
      	<ShotsFilterHeader />
      	<ShotsContent shotsData={this.state.shotsData} />
      </div>
    );
  }
}

export class ShotsFilterHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterSelected = this.handleFilterSelected.bind(this);
  }

  handleFilterSelected(filterTag) {
  	filterSignal.dispatch(filterTag);
  }

  render() {
    return (
      <div>
      	<nav className="navbar navbar-default">
      		<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav navbar-center">
      				<li className="dropdown">
      					<a>Popular<span className="caret"></span></a>
      					<ul className="dropdown-menu">
      						<li>
      							<a onClick={this.handleFilterSelected.bind(this, "recent")}>Recent</a>
      						</li>
      						<li>
      							<a onClick={this.handleFilterSelected.bind(this, "most-viewed")}>Most Viewed</a>
      						</li>
      						<li>
      							<a onClick={this.handleFilterSelected.bind(this, "most-commented")}>Most Commented</a>
      						</li>
      					</ul>
      				</li>
      				<li className="dropdown">
      					<a>Shots<span className="caret"></span></a>
      					<ul className="dropdown-menu">
      					</ul>
      				</li>
      				<li className="dropdown">
      					<a>Now<span className="caret"></span></a>
      					<ul className="dropdown-menu">
      					</ul>
      				</li>
      			</ul>
      			<ul className="nav navbar-nav pull-right">
      				<img alt="Brand" src="..." />
      			</ul>
      		</div>
      	</nav>
      </div>
    );
  }
}

export class ShotsContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  	filterSignal.add(this.handleFilterChanged);
  }

  componentWillUnmount() {
	filterSignal.remove(this.handleFilterChanged);
  }

  handleFilterChanged(filterTag) {
	// TODO: Filter
  }

  render() {
    return (
      <div className="row cardContainer">
      {
      	this.props.shotsData.map((data) => {
      		return (
				<div className="col-md-2 col-sm-4 col-xs-4 cardItemSpacing">
				  <ShotsItem item={data} />
				</div>
      		);
      	})	
      }
      </div>
    );
  }
}


