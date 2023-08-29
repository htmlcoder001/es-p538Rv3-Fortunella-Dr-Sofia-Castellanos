$(function () {
    var change = 0,
        updatePrices = function (item) {
            change = 1;

            $(item.children).each(function () {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'ES';
            }

            if (sel == 'ES') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('.new_price_sig').html('EUR');
                $('select').val('ES').trigger('change');
                initializeMask({
                    mask: "(+34)A99999999", removeMaskOnSubmit: false, definitions: {
                        'A': {
                            validator: "[5-9]",
                            casing: "lower"
                        }
                    }
                })
            }

            change = 0;
        };
  

});