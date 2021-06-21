

import React, {useLayoutEffect} from "react";

const AnalyticsDataConfig = (props) => {
    console.log('In analytics')
    const {container_id, opt_container_id, currency_code} = props;
    const session_id = `${new Date().getTime()}.${Math.random().toString(36).substring(5)}`;
    const original_location =   `${document.location.protocol}//${document.location.hostname + document.location.pathname + document.location.search}`;
    

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'init_dataLayer',
            container_id,
            opt_container_id,
            session_id,
            original_location,
            currency_code
        });
    
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!=dataLayer?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script', 'dataLayer', container_id)



    const DebugMode = () => {
        return (
            document.location.search.includes('debug=true') &&
            <h1>Test</h1>
            
        )

    }
    const debugEnabled = DebugMode();

    if(debugEnabled){
        console.log('🔥 GA Debug mode is Enabled 🔥')
        window.DebugMode = true
    }

    return debugEnabled || '';
}

export default AnalyticsDataConfig;