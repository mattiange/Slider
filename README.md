# Slider

jQuery Slideshow


DIRECTORY STRUCTURE
-------------------

      css/            contains css files
      js/             contains javascript files
      images/         contains pictures files
      
      
REQUIREMENTS
-------------------

jQuery 3.2.1+ 

jQuery UI 1.12.1+ 



CONFIGURATION
-------------------

~~~
jQuery('#slider').m_slideshow({
            height : '700px',
            effect : 'fade',
            keyboard : 'no',
            thumbnail_show : 'no',
            thumbnail_type : 'circle',
            controls : 'no',
            autoplay : {
                active : 'yes',
                time_interval : 5000
            }
});
~~~

OPTIONS
----------------------
      width             slideshow width (px or percent)
      height            slideshow height (px)
      thumbnail_show    active thumbnail (yes or no)
      thumbnail_type    thumbnail's type (circle or picture)
      controls          active slideshow controls
      effect            change picture effect (blind|bounce|clip|drop|fade|fold|highlight|puff|pulsate|scale|shake|size|slide)
      autoplay:{
            active          active autoplay slideshow
            time_interval   setInterval time (ms)
      }
