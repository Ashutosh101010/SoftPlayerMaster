/**
 * Created by hoho on 2018. 7. 26..
 */
import SoftTemplate from 'view/engine/SoftTemplate';
import PanelManager from "view/global/PanelManager";
import LA$ from 'utils/likeA$';


const SpeedPanel = function($container, api, data){
    const $root = LA$(api.getContainerElement());
    let panelManager = PanelManager();

    data.setFront = function(isFront){
        if(isFront){
            $root.find("#"+data.id).removeClass("background");
        }else{
            $root.find("#"+data.id).addClass("background");
        }
    };
    const onRendered = function($current, template){
        //Do nothing
    };
    const onDestroyed = function(template){
        //Do nothing
    };
    const events = {
        "click .op-setting-item": function (event, $current, template) {
            event.preventDefault();
            let value = LA$(event.currentTarget).attr("op-data-value");
            api.setPlaybackRate(parseFloat(value));
            panelManager.clear();
        },
        "click .op-setting-title" : function(event, $current, template){
            event.preventDefault();
            panelManager.removeLastItem();
        }
    };

    return SoftTemplate($container, "SpeedPanel", api.getConfig(), data, events, onRendered, onDestroyed );

};

export default SpeedPanel;
