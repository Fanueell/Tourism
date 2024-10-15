import './Footer.css'
import fb from'../../assets/fb.webp'
import twitter from'../../assets/insta.webp'
import linkedin from '../../assets/link.webp'
import insta from '../../assets/tw.webp'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sub_links'>
          <div className='sub_footer-links-div'>
            <h4>Explore Ethiopian</h4>
            <div className='dd'>
            <a className='flinks' href="/">
                <p>Home</p>
            </a>

            <a className='flinks' href="/about">
                <p>About</p>
            </a>

            <a className='flinks' href="/explore">
                <p>Explore</p>
            </a>

            <a className='flinks' href="/contact">
                <p>Contact</p>
            </a>
            </div>
          </div>
          <div className='socialmedia'>
            <p><img src={fb} alt=''/></p>
            <p><img src={twitter} alt=''/></p>
            <p><img src={linkedin} alt=''/></p>
            <p><img src={insta} alt=''/></p>
          </div>
        </div>
      </div>
      
      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>@2024.Explore Ethiopian. All right reserved.</p>
        </div>
        
      </div>


    </div>
  )
}

export default Footer
