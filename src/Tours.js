import React,{useState,useEffect} from 'react'

const Tours = ({ img, title, price, about, removeLocation }) => {
    const [showLink, setShowLink] = useState(false)
    const [text, setText] = useState("Read more")
    const [aboutText, setTextAbout] = useState(about)
    
    const clickShow = () => {
        setShowLink(!showLink)
        showLink ? setText("Read more") : setText("Show less")
    }
    
    useEffect(() => {
        let newAboutText = about.split(" ").slice(0, 35).join(" ")
        showLink ? setTextAbout(about) : setTextAbout(`${newAboutText}...`)
    },[showLink,about])

    return (
        <article className='tour-wrapper'>
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <div className="title">
                    <h4>{title}</h4>
                    <p className='price'>{ price}</p>
                </div>
                <div className="info">
                    <p className="about">{aboutText}</p>
                    <p className="link" onClick={clickShow}>{text}</p>
                </div>
                <div className="btn-wrapper">
                    <button className='btn' onClick={removeLocation}>not interested</button>
                </div>
            </div>
        </article>
    )
}

export default Tours
