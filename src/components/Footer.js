import '../App.css';
import paypal from '../assets/paypal-icon-w.png'

function Footer(){
  return(
    <div className="footer">
      <h1>Contact</h1>
      <p>For booking and information email <a href="mailto:p.luckyinfo@gmail.com">p.luckyinfo@gmail.com</a></p>
      <p></p>
      <p>Thank you for helping to support my music projects in 2021 and beyond!</p>
      <a href="https://www.paypal.com/paypalme/pluckyprojects"><img className="social-icon" src={paypal}/></a>
      <p></p>
      <a href='http://www.freevisitorcounters.com' className="counter-text">freecounter</a> <script type='text/javascript' src='https://www.freevisitorcounters.com/auth.php?id=7a38c9e853c4900287d6182e453819c4e6933356'></script>
      <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/786538/t/5"></script>
      <p>2021</p>
    </div>
  )
}

export default Footer;
