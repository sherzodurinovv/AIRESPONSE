import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className='nav'>
                <p>AsilbekAI</p>
                <img src={assets.user} alt="user-icon" />
            </div>
            <div className="main-container">



                {!showResult
                    ? <>


                        <div className="greet">
                            <p><span>Salom Foydalanuvchi</span></p>
                            <p>Sizga qanday yordam bera olaman bugun?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Yaqinlashib kelayotgan sayohatda ko'rish uchun chiroyli joylarni taklif qiling!</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Ushbu kontseptsiyani qisqacha tushuntiring: shaharsozlik!</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Bizning ish chekinish uchun Brainstorm jamoasi ulash faoliyati!</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Quyidagi kodning o'qilishini yaxshilang!</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img className='icon2' src={assets.user} alt="user-icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <figure className='figure'>
                                <img className={`iconGemini ${loading ? 'rotate' : ''}`} src={assets.gemini_icon} alt="gemini_icon" />
                            </figure>
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />

                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }


                <div className="main-buttom">
                    <div className="search-box">
                        {/* using onchange on input state so at every changes it will be updated */}
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Bu yerga yozing!' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}

                        </div>

                    </div>
                    <p className="bottom-info">
                        Suniy intellekt asosida ishlaydigan chatbot saytini Dasturiy injiniring talabasi Geldiyorov Asilbek tomonidan yaratildi!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
