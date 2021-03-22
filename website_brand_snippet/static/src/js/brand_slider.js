odoo.define('website_brand_snippet.brand_slider', function(require) {
    'use strict';

    var ajax = require('web.ajax');
//    var publicWidget = require('web.public.widget');

    console.log("================brand_slider=====111111111111===========")

    var sAnimations = require('website.content.snippets.animation');


//    publicWidget.registry.te_brand_slider = publicWidget.Widget.extend({
    sAnimations.registry.te_brand_slider = sAnimations.Class.extend({
        selector: ".te_brand_slider",
        start: function () {
            self = this;
            self.getBrandData();
        },
        getBrandData: function(){
            /* This function is call while load the page and
            it's initialize the brand slider carousel if it's available */
            if($("#wrapwrap .te_brand_slider").length){
                ajax.jsonRpc('/get_brand_slider', 'call').then(function(data) {
                    console.log("====================data============",data)
                    var data_replace = $(data).find(".te_brand_slider");
                    $(".te_brand_slider").replaceWith(data_replace);
                    /* Brand Slider */
                    $(".te_brand_slider").show();
                    console.log("====================data============",$(".te_brand_slider"))
                    $('.brand_carousel').owlCarousel({
                        loop: false,
                        rewind: true,
                        margin: 10,
                        nav: true,
                        lazyLoad:true,
                        dots: false,
                        autoplay: true,
                        autoplayTimeout: 4000,
                        navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                        autoplayHoverPause:true,
                        items: 5,
                        responsive: {
                            0: {
                                items: 2,
                            },
                            576: {
                                items: 4,
                            },
                            991: {
                                items: 5,
                            },
                            1200: {
                                items: 5,
                            }
                        }

                    });
                });
            }
        }
    });
});