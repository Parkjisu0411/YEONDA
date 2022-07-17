import '../styles/Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


function Popup(){
    return(
        <div className='container'>
            <div className='popup-wrap'>
                <div className='popup'>
                    <div className='gray-block'>

                    </div>
                    <div className='white-block'>
                        <div className='exit'>
                            <FontAwesomeIcon icon={ faXmark } />
                        </div>
                        <div className='blok-content'>
                            <h2>로그인</h2>
                            <section>
                                <h4>이메일로 로그인</h4>
                                <form className="">
                                    <input className='input-login' placeholder="이메일을 입력하세요." value=""/>
                                    <button className='button-login'>로그인</button>
                                </form>
                            </section>
                        </div>
                        <div className="foot">
                            <span>아직 회원이 아니신가요?</span>
                            <div className="signUp">회원가입</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;