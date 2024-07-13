import API from 'api/Api';
import {isWebRTC, checkAndGetContainerElement} from 'utils/validator';
import _ from "utils/underscore";

/**
 * Main SoftPlayerSDK object
 */
function softPlayerFactory() {

    const SoftPlayerSDK = {};

    const playerList = SoftPlayerSDK.playerList = [];

    /**
     * Create player instance and return it.
     *
     * @param      {string | dom element} container  Id of container element or container element
     * @param      {object} options  The options
     */
    SoftPlayerSDK.create = function (container, options) {

        if (!window.SoftPlayerConsole || Object.keys(window.SoftPlayerConsole).length === 0) {
            window.SoftPlayerConsole = {};
            SoftPlayerConsole['log'] = function () {
            };
        }

        let containerElement = checkAndGetContainerElement(container);

        const playerInstance = API(containerElement);
        playerInstance.init(options);

        playerList.push(playerInstance);

        return playerInstance;
    };

    /**
     * Gets the player instance list.
     *
     * @return     {array}  The player list.
     */
    SoftPlayerSDK.getPlayerList = function () {

        return playerList;
    };

    /**
     * Gets the player instance by container id.
     *
     * @param      {string}  containerId  The container identifier
     * @return     {obeject | null}  The player instance.
     */
    SoftPlayerSDK.getPlayerByContainerId = function (containerId) {

        for (let i = 0; i < playerList.length; i++) {

            if (playerList[i].getContainerId() === containerId) {

                return playerList[i];
            }
        }

        return null;
    };

    /**
     * Gets the player instance by index.
     *
     * @param      {number}  index   The index
     * @return     {object | null}  The player instance.
     */
    SoftPlayerSDK.getPlayerByIndex = function (index) {

        const playerInstance = playerList[index];

        if (playerInstance) {

            return playerInstance;
        } else {

            return null;
        }
    };

    /**
     * Remove the player instance by playerInstance.
     *
     * @param      {playerInstance}  playerInstance
     * @return     {null}
     */
    SoftPlayerSDK.removePlayer = function (playerInstance) {

        for (let i = 0; i < playerList.length; i++) {

            if (playerList[i] === playerInstance) {
                playerList.splice(i, 1);
            }
        }
    };

    /**
     * Generate webrtc source for player source type.
     *
     * @param      {Object | Array}  source   webrtc source
     * @return     {Array}  Player source Object.
     */
    SoftPlayerSDK.generateWebrtcUrls = function (sources) {
        return (_.isArray(sources) ? sources : [sources]).map(function (source, index) {
            if (source.host && isWebRTC(source.host) && source.application && source.stream) {
                return {
                    file: source.host + "/" + source.application + "/" + source.stream,
                    type: "webrtc",
                    label: source.label ? source.label : "webrtc-" + (index + 1)
                };
            }
        });
    };

    /**
     * Whether show the player core log or not.
     *
     * @param      {boolean}  boolean   run debug mode or not.
     * @return     {boolean}  run debug mode or not.
     */
    SoftPlayerSDK.debug = function (isDebugMode) {

        if (isDebugMode) {
            window.SoftPlayerConsole = {log: window['console']['log']};
        } else {
            window.SoftPlayerConsole = {
                log: function () {
                }
            };
        }
        return isDebugMode;
    };

    return SoftPlayerSDK;
}


export default softPlayerFactory();
