/**
 * 
 * @author Mattia Leonardo Angelillo
 * @version 1.0.0
 * @site computerizzandogioia.altervista.org
 * @copyright computerizzandogioia.altervista.org
 * @param {Object} o
 * @returns {jQuery.fn@call;each}
 */
jQuery.fn.slider = function(o) {
    o = jQuery.extend({
        /**
         * Show thumbnail
         */
        thumbnail_show : 1,
        /**
         * circle|picture
         */
        thumbnail_type : 'circle',
        /**
         * Show/Hide event
         * 
         * blind|bounce|clip|drop|fade|fold|
         * highlight|puff|pulsate|scale|shake|
         * size|slide
         */
        effect : 'clip',
        /**
         * Effect duration
         */
        duration : 1000,
        /**
         * Slider height
         */
        height: '500px',
        /**
         * Slider width
         */
        width : '100%',
        /**
         * Start autoplay
         * 
         * yes|no
         */
        autoplay : 'no',
        /**
         * Use keyboard
         * 
         * yes|no
         */
        keyboard : 'yes'
    }, o);
    
    
    /**
     * 
     * @type jQuery.fn.slider.slider_L159
     */
    var that;
    /**
     * Controls class
     * 
     * @type String
     */
    var controls = '.controls .arrow';
    /**
     * Thumbnail class
     * 
     * @type String
     */
    var thumbnail = '.thumbnail';
    /**
     * Slide class
     * 
     * @type String
     */
    var slide = '.slide';
    /**
     * Action next button
     * 
     * @type String
     */
    var next = '[data-action="next"]';
    /**
     * Action prev button
     * 
     * @type String
     */
    var prev = '[data-action="prev"]';
    /**
     * Number of pictures
     * 
     * @type int
     * @call jQuery
     * @pro length
     */
    var n_pictures;    
    
    
    
    
    /**
     * Add thumbnail
     * 
     * @param {string} type
     * @param {object HTMLDivElement} el
     * @returns {null}
     */
    var add_thumbnail = function(type, el){
        if(type==='picture')
            add_thumbnail_picture(el);
        else
            add_thumbnail_circle(el);
    };
    
    /**
     * 
     * @param {object HTMLDivElement} el
     * @returns {null}
     */
    var add_thumbnail_circle = function (el){
        var size = size_pictures(el);//Numero delle immagini
        
        for(i=1;i<=size;i ++){
            jQuery('.thumbnail', el).addClass('circle').append(
                        '<div class="thumbnail-circle" data-item="'+i+'" data-selected="no">\n\
                        </div>'
                    );
        }
    };
    /**
     * 
     * @param {object HTMLDivElement} el
     * @returns {null}
     */
    var add_thumbnail_picture = function (el){
        jQuery('.thumbnail', el).addClass('picture');
        jQuery('.slide > img').each(function (i, e){
            jQuery(e).clone().appendTo('.thumbnail');
        });
        jQuery('.thumbnail img').removeAttr('data-description').show();
    };
    
    /**
     * AGGIUNGERE DESCRIZIONE QUANDO GIRA L'IMMAGINE
     */
    var add_description = function(el){
        jQuery(slide, el).append();
    };
    
    /**
     * Number of pictures
     * 
     * @param {object HTMLDivElement} el
     * @returns {jQuery.length}
     */
    var size_pictures = function (el){
        return jQuery(' .slide img', el).length;
    };
    
    /**
     * 
     * @param {object HTMLDivElement} el
     * @returns {null}
     */
    var set_controls_position = function(el){
        var slider_height = jQuery(el).height();
        var controls_height = jQuery(controls, el).height();
        var top = (slider_height-controls_height)/2;
        jQuery(controls, el).css('top', top);
    };
    
    /**
     * 
     * @param {object HTMLDivElement} el
     * @returns {null}
     */
    var set_thumbnail_position = function(el){
        var slider_width = jQuery(el).width();
        var thumbnail_width = jQuery(thumbnail, el).width();
        var left = (slider_width-thumbnail_width)/2;
        jQuery(thumbnail, el).css('left', left);
    };
    /**
     * Show controls
     * 
     * @param {object} selected_item
     * @returns {null}
     */
    var show_controls = function(selected_item){
        switch(selected_item){
            case 1:
                jQuery(next).show();
                
                break;
            case n_pictures:
                jQuery(prev).show();
                
                break;
            default :
                jQuery(next+', '+prev).show();
                
                break;
        }
    };
    /**
     * Next item
     * 
     * @param {int} selected_item
     * @param {int} n_pictures
     * @param {object} that
     * @returns {null}
     */
    var next_item = function (selected_item, n_pictures, that){
        /*Next item*/
        jQuery('.slide > [data-selected="yes"').hide(o.effect, o.duration);
        jQuery('.slide [data-selected="yes"]', that).attr('data-selected', 'no');
        jQuery('.slide [data-item="'+selected_item+'"]', that).attr('data-selected', 'yes');
        jQuery('.slide > [data-selected="yes"').show(o.effect, o.duration);
        /*-----------------------------------------------------------------------------------------*/
        show_controls(selected_item);
    };
    /**
     * Prev item
     * 
     * @param {int} selected_item
     * @param {int} n_pictures
     * @returns {null}
     */
    var prev_item = function (selected_item, n_pictures, that){
        /*Prev item*/
        jQuery('.slide > [data-selected="yes"').hide(o.effect, o.duration);
        jQuery('.slide [data-selected="yes"]', that).attr('data-selected', 'no');
        jQuery('.slide [data-item="'+selected_item+'"]', that).attr('data-selected', 'yes');
        jQuery('.slide > [data-selected="yes"').show(o.effect, o.duration);
        /*-----------------------------------------------------------------------------------------*/
        show_controls(selected_item);
    };
    
    /**
     * 
     */
    return this.each(function() {
        if(o.effect === 'explode' || o.effect === 'Explode'){
            o.effect = 'clip';
        }
        
        that = this;
        n_pictures = size_pictures(that);
        /**
         * Selected item
         * 
         * @type object
         * @call jQuery
         */
        var selected = jQuery('.slide [data-selected="yes"]', that);
        /**
         * Selected item number
         * 
         * @type int
         * @call jQuery
         * @call attr
         */
        var selected_item = Number(jQuery(selected).attr('data-item'));
        /**
         * 
         * @param {type} selected_item
         * @param {type} n_pictures
         * @returns {undefined}
         */
        
        jQuery(that).css({
            'height' : o.height,
            'width'  : o.width
        });
        jQuery('.pictures .slide', that).css({
            'height' : o.height,
            'width'  : o.width
        });
        jQuery('.pictures .slide img', that).css({
            'height'  : o.height,
            'width'   : o.width,
            'display' : 'none'
        });
        jQuery(prev+', '+next).hide();
        
        show_controls(selected_item);
        add_thumbnail(o.thumbnail_type, that);
        set_controls_position(that);
        set_thumbnail_position(that);
        
        jQuery('.thumbnail [data-item="'+selected_item+'"]', that).attr('data-selected', 'yes');
        jQuery(selected).show();
        /**
         * NEXT ITEM
         */
        jQuery(next, that).click(function (){
            selected_item ++;
            if(selected_item===n_pictures+1){
                selected_item = 1;
            }
            next_item(selected_item, n_pictures, that);
        });
        /**
         * PREV ITEM CLICK
         */
        jQuery(prev, that).click(function (){
            selected_item --;
            if(selected_item===0){
                selected_item = n_pictures;
            }
            prev_item(selected_item, n_pictures, that);
        });
        /**
         * THUMBNAIL CLICK
         */
        jQuery('.thumbnail img, .thumbnail div', that).click(function (){
            selected_item = jQuery(this).attr('data-item');
            
            jQuery(controls, that).show();
            
            jQuery('.slide > [data-selected="yes"').hide(o.effect, o.duration);
            jQuery('.slide [data-selected="yes"]', that).attr('data-selected', 'no');
            jQuery('.slide [data-item="'+selected_item+'"]', that).attr('data-selected', 'yes');
            jQuery('.slide > [data-selected="yes"').show(o.effect, o.duration);
            
        });
        /**
         * KEYBOARD EVENT
         */
        if(o.keyboard === 'yes'){
            var i = 0;
            var j = 0;
            jQuery('body').keyup(function(event){
                if(event.keyCode === 39){
                    //i ++;
                    //if((i%2)===0){//next
                        selected_item ++;
                        if(selected_item===n_pictures+1){
                            selected_item = 1;
                        }
                        next_item(selected_item, n_pictures, that);   
                    //}
                }else if(event.keyCode === 37){
                    //j ++;
                    //if((j%2)===0){//prev
                        selected_item --;
                        if(selected_item===0){
                            selected_item = n_pictures;
                        }
                        prev_item(selected_item, n_pictures, that);   
                    //}
                }
            });
        }
    });
};