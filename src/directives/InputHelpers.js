// OnlyEn directive
export const onlyEn = {
    bind(el) {
        el.addEventListener('keypress', e => {
            var key = e.which; //firefox

            if (key > 128 || (key > 47 && key < 58)) {
                e.preventDefault();
                return false;
            } else {
                if (key !== 35 && key !== 38) {
                    return;
                } else {
                    e.preventDefault();
                    return false;
                }
            }
        });
    }
};

// OnlyAr directive
export const onlyAr = {
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
};

// stopPasteEn directive
export const stopPasteEn = {
    bind(el, binding) {
        el.addEventListener('paste', function(e) {
            let item = (e.clipboardData || window.clipboardData).getData(
                'text'
            );
            ////gets the paste value in the input
            item.getAsString(function() {
                el.value = binding.value.replace(
                    /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF-#&0-9]/g,
                    ''
                );
                el.value = binding.value.trim();
                // $scope.$apply();
            });
        });
    }
};
