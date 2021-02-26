import React from 'react';
import {FacebookShareButton, FacebookIcon} from "react-share";
import {TwitterShareButton, TwitterIcon} from "react-share";
import {WhatsappShareButton, WhatsappIcon} from "react-share";
import {PinterestShareButton, PinterestIcon} from "react-share";
import './Share.scss';

const Share = () => {
    return (
        <div className="social-icons">
            <FacebookShareButton
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
            >
                <FacebookIcon
                    size={28}
                    borderRadius={8}
                />
            </FacebookShareButton>
            <TwitterShareButton
                url={"http://www.camperstribe.com"}
                title={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
            >
                <TwitterIcon
                    size={28}
                    borderRadius={8}
                />
            </TwitterShareButton>
            <WhatsappShareButton
                url={"http://www.camperstribe.com"}
                separator=":: "
            >
                <WhatsappIcon
                    size={28}
                    borderRadius={8}
                />
            </WhatsappShareButton>
            <PinterestShareButton
                url={"http://www.camperstribe.com"}
                title={"CampersTribe - World is yours to explore"}
                separator=":: "
            >
                <PinterestIcon
                    size={28}
                    borderRadius={8}
                />
            </PinterestShareButton>
            <div className="social-icons__clipboard"></div>
        </div>
    );
};

export default Share;