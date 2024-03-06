export default function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__logo">
                <img
                src="/assets/images/logo.png"
                alt="LifeSync Logo"
                className="footer__logo__image"
                />
                <p className="footer__logo__text">LifeSync</p>
            </div>


            <div className="footer__terms">
                <h4>Terms and Conditions</h4>
            </div>

            <div className="footer__contact">
                <h4>Contact Us</h4>
                <p>Email: penguin@lifesync.com</p>
                <p>Phone: +91 8972128592</p>
            </div>
        </div>
    );
};