'use strict';

$(document).ready(function() {
    $('.mg-container-social').height($('article').height());
    $('#mg-panel-social').stick_in_parent({offset_top: 35});

    $('#tipue_search_input').tipuesearch()
});
