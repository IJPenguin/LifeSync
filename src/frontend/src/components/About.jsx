export default function About() {
    return (
        <div className="aboutus__container">
            <div className="aboutus__box">
                <div className="aboutus__text">
                    <h2 className="aboutus__text__title">About Us</h2>
                    <p className="aboutus__text__description">
                        We are a team of developers who are passionate about
                        providing the best healthcare services to the people. We
                        believe that everyone should have access to the best
                        healthcare services and we are here to make that happen.
                    </p>
                </div>
                <div className="aboutus__images">
                    <img
                        src="/assets/images/aboutus_image.png"
                        alt="Aboutus image"
                        className="aboutus__image"
                    />
                </div>
            </div>
        </div>
    )
}
