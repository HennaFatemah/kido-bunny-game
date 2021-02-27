import React, { useEffect, useSate, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Pallet = ({link}) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () =>{
        setIsCopied(true);
    }

    useEffect(
        () =>{
            setTimeout(() =>{
                if(isCopied) setIsCopied(false);
            }, 2000);
        }, 
        [isCopied]
    )
    return (
        <CopyToClipboard text={`${link}`} onCopy={handleCopy}>
            <div className="pallet">
                <div className="pallet__color" style={{backgroundColor:`${link}`}}>
                    {isCopied && <small className="pallet__small">copied</small>}
                </div>
            </div>
        </CopyToClipboard>
    );
};

export default Pallet;