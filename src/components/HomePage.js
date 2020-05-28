import React, { Component } from 'react';
import HomePageNavBar from './HomePageNavBar'
import Footer from '../components/Footer';


export default class  HomePage extends Component {



  constructor(props) {
    super(props);
    const items = [
      {id: 1, status: 'Now Selling', type: 'Fruits', place: 'Lagos', items_left: '1300', interest: '10', duration: '3'},
      {id: 2, status: 'Now Selling', type: 'Yam', place: 'Lagos', items_left: '500', interest: '5', duration: '2'},
      {id: 3, status: 'Now Selling', type: 'Poultry', place: 'Lagos', items_left: '200', interest: '6', duration: '5'},
      {id: 4, status: 'Now Selling', type: 'Fish Farming', place: 'Lagos', items_left: '1000', interest: '7', duration: '3'},
    ];
    console.log(items);
		this.state = { to_investmts: items};
  }

  componentDidMount() { // <2>
    console.log('I was triggered during render')
  
       
}

  
  
  render() {
  return (
   <div>
        <HomePageNavBar/>
      <section id="showcase"> 
          <div className="container">
            <div className="row">
              <div className=".col-12 col-sm-12 col-md-12  showcase-lt-content">
                <div>
                  <div>
                    <span className="caption">Earn Profit</span>
                  </div>
                  <div>
                    <span className="caption-1">Empower Farmers</span>
                  </div>
                  <div> <a className="btn btn-sponsor mt-3" href="#">Sponsor Now</a> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   
        <section id="jumbotron">
          <div className="text-center d-flex">
            <div className="container">
              <div className="jumbotron-inner">
                <div className="caption">Afafy</div>
                <p className="text ">"Africa 's Largest Agro Investment Platform"</p>
                <p className="text ">"An online marketplace that connects you with realtime agro opportunities and enabling farmers who are ready to farm on a commercial scale for farm expansions, food production increase and promoting job creations."</p>
              </div>
            </div>
          </div>
        </section>
       
        <section id="benefits">
          <div className="container">
            <div className="d-flex">
              <div className="section-title text-center">
                Why Invest With Afafy
              </div>
            </div>
            {/* ICON ROW 1 */}
            <div className="row text-center">
              <div className="box-feature col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <img src="img/investor.png" alt="John Doe" className="ml-0 mr-3 mb-3 rounded-circle" style={{width: '60px'}} />
                <div className="caption">Promising Returns After Harvest</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
              <div className="box-feature col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <img src="img/farmer.png" alt="John Doe" className="ml-0 mr-3 mb-3 rounded-circle" style={{width: '60px'}} />
                <div className="caption">Empowering Farmers</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
              <div className="box-feature col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <img src="img/food.png" alt="John Doe" className="ml-0 mr-3 mb-3 rounded-circle" style={{width: '60px'}} />
                <div className="caption">Strengthening Our Food Security</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
              <div className="box-feature col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <img src="img/farm.png" alt="John Doe" className="ml-0 mr-3 mb-3 rounded-circle" style={{width: '60px'}} />
                <div className="caption">Utilizing Arable Farmlands</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
            {/* ICON ROW 2 */}
          </div>
        </section>
       
        <section id="explore">
          <div className="container">
            <div className="d-flex">
              <div className="section-title m-50 text-center">
                Explore Opportunities
              </div>
            </div>
            <div className="row explore-container mb-3 text-left align-middle">
            <InvestmentList  to_investmts={this.state.to_investmts}/>
               </div>
            <div className="text-center">
              <div className="container">
                <a className="btn btn-see-more mt-3" href="#">See More</a>
              </div>
            </div>
          </div>
        </section>
       
        <Footer/>
   </div>

    )
    }
}

class InvestmentList extends React.Component{
	render() {
  
    const content = this.props.to_investmts.map((item) =>
    
    <div className="col-lg-3 col-sm-4 col-12">
      <div className="explore-box mb-4 box-shadow">
        <div className="explore-header">
      <a href="#" className=" btn explore-status-success stretched-link">{item.status}</a>
        </div>
        <div className="explore-body">
          <br />
          <span className="farm-type">{item.type}</span><br /><br />
          <i className="fa fa-map-marker" /><span className> {item.place}</span><br />
          {/* <span class="farm-place">Green Fold Farm</span><br> */}
          <i className="fas fa-wallet" /><span className="item-left">{item.items_left} items left</span><br />
          <i className="far fa-chart-line" /><span className="roi">{item.interest}% in {item.duration} months</span><br />
        </div>
      
    </div>
    </div>
  );

		return (
      <>
        {content}
      </>
      
		)
	}
}

