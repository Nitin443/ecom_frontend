import './Footer.css';
import { Link, withRouter } from 'react-router-dom';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='divStyle'>
    <div>
      <h1></h1>
    </div>
      <div className='text'>
        <p>Made By Nitin Kumar</p>
          © 2022 Copyright
      </div>
      <div className='logo'>
       <a  href="https://github.com/Nitin443/ecom_frontend"><GithubOutlined className='logoDe'/></a>
       <a  href="https://www.linkedin.com/in/nitin-kumar-6522591b2/"><LinkedinOutlined className='logoDe'/></a>
      </div>
    </div>
  );

}

export default Footer;