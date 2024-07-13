/**
 * Created by hoho on 2018. 7. 19..
 */
import SoftTemplate from 'view/engine/SoftTemplate';

const TextView = function($container, api, text){
    const onRendered = function($current, template){

    };
    const onDestroyed = function(){
        //Do nothing.
    };
    const events = {
        "click .btn" : function(event, $current, template){
            event.preventDefault();
            alert("Hi!");
        }
    };

    return SoftTemplate($container, "TextView", text, events, onRendered, onDestroyed );

};

export default TextView;
