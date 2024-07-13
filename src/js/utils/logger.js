/**
 * Created by hoho on 2018. 5. 24..
 */

const logger = function(id){
    const that = {};
    let prevConsoleLog = null;

    window.SoftPlayerConsole = {log : window['console']['log']};

    that.enable = () =>{
        if(prevConsoleLog == null){
            return;
        }
        SoftPlayerConsole['log'] = prevConsoleLog;
    };
    that.disable = () =>{
        prevConsoleLog = console.log;
        SoftPlayerConsole['log'] = function(){};
    };
    /*that.log = () => {

    };*/
    that.destroy = () =>{
        window.SoftPlayerConsole = null;
    };

    return that;
};


export default logger;
