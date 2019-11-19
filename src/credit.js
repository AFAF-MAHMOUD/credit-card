import React from 'react';
import { Component } from 'react';
class CreditCard extends Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Chip />
                <Content />
            </div>

        );
    }
}


class Header extends Component {

    render() {
        return (
            <div className="header">
                <h1>CREDIT CARD</h1>
            </div>
        );
    }
}
class Chip extends Component {

    render() {
        return (
            <div className='chip'>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" />
            </div>
        );
    }
}
class Content extends Component {

    render() {
        return (
            <div className="content">
               < div className="info">
                <Number />
                <SecNumValidThru />
                <CardHolder/>
                </div>
                
                <Logo/>
                

            </div>


        );
    }
}
class Number extends Component {

    render() {
        return (
            <div className="main-number">
                <h2>1234  1234  1234     1234</h2>
            </div>
        );
    }
}
class SecNumValidThru extends Component {

    render() {
        return (
            <div className="sec-num-validth">
                < div className="sec-num"><h2> 5422</h2></div>
                <div className="valid-thru">
                    <div className="m-y">
                        <p>
                            MONTH/YEAR
                       </p>
                    </div>
                    <div className="container">
                        <div>
                            <p>VALID <br />THRU</p>
                        </div>
                        <div>
                            <i class="fas fa-caret-right"></i>
                        </div>
                        <div>
                        <h2 className="sec-num">11/50</h2>
                        </div>
                    </div>   
                </div>
            </div>


        );
    }
}
class CardHolder  extends Component {
   
    render() { 
        return ( 
           <div className="card-holder" >
            <h2>Card Holder</h2>
            </div>
         );
    }
}
class Logo  extends Component {
   
    render() { 
        return ( 
           <div className="logo" >
            <img src="https://www.logolynx.com/images/logolynx/e0/e01dbbb3068c7f5135b90b0ce91445f9.png"/>
            </div>
         );
    }
}

export default CreditCard;


