import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


// const DELAY = 1500;


const ReCaptcha = () => {
    return (
        <div style={{width:'90%'}}>
          <ReCAPTCHA
            style={{  width:'200px', maxWidth:'200px' }}
            width="100px"
            // theme="dark"
            // ref={}
            sitekey={TEST_SITE_KEY }
            // onChange={}
            // asyncScriptOnLoad={}
          />
        </div>
    );
}

export default ReCaptcha;
