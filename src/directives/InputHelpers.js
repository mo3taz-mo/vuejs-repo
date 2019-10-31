
import Vue from 'vue'
export default {
    Vue.directive('onlyAr', {
        bind(el) {
            el.addEventListener('keypress', function(e) {
                let key = e.which;
    
                if (key !== 32 && key < 128 && key != 13) {
                    e.preventDefault();
                    //return false;
                } else {
                    return;
                }
            });
        }
    })
    
}