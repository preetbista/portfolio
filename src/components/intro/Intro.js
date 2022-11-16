import "./intro.css"
import Me from "../../img/preet.jpg"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Preet Bista</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Football Player</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design and develop websites and provide web services for the customers.
                        I can create website according to your choice and customize however you want.
                    </p>
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro