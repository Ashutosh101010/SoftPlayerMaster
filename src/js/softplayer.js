import {version} from 'version'
import SoftPlayerSDK from './softplayer.sdk'
import {checkAndGetContainerElement} from 'utils/validator'
import View from './view/view';

function softPlayerFactory() {

    const SoftPlayer = {};

    Object.assign(SoftPlayer, SoftPlayerSDK);

    SoftPlayer.create = function (container, options) {

        let containerElement = checkAndGetContainerElement(container);

        let player = View(containerElement);

        const playerInstance = SoftPlayerSDK.create(player.getMediaElementContainer(), options);

        player.setApi(playerInstance);

        SoftPlayerConsole.log("[SoftPlayer] v."+ version);

        return playerInstance;
    };

    return SoftPlayer;
}

export default softPlayerFactory()
