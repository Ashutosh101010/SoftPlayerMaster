/**
 * Created by hoho on 2018. 7. 24..
 */
import SoftTemplate from 'view/engine/SoftTemplate';
import {
    STATE_IDLE,
    STATE_PLAYING,
    STATE_COMPLETE,
    STATE_PAUSED
} from "api/constants";

const Thumbnail = function ($container, api, playerState) {

    const onRendered = function ($current, template) {

    };
    const onDestroyed = function () {
        //Do nothing!
    };
    const events = {};

    return SoftTemplate($container, "Thumbnail", api.getConfig(), playerState, events, onRendered, onDestroyed);
};

export default Thumbnail;
