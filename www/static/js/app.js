$(function () {
    $(document).ajaxComplete(function (e, xhr, settings) {
        if (xhr.status == 278) {
            var location = xhr.getResponseHeader("Location");
            if (location) {
                window.location.href = xhr.getResponseHeader("Location");
            }
        }
    });

    $(document).on('click', 'a.mmodal', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $body = $('body');
        var $wrapper = $('#wrapper');
        /* Disable double-loading */
        if (!$body.hasClass('mmodal-loading')) {
            $this.addClass('loading');
            $body.addClass('mmodal-loading');
            $wrapper.append("<div class='mmodal-loader'></div>");
            $this.mmodal({
                width: $this.data('width'),
                onAfterOpen: function(){
                    $body.removeClass('mmodal-loading');
                    $this.removeClass('loading');
                    $wrapper.find('.mmodal-loader').remove();
                }
            });
        }
        return false;
    });

    $.mendless({
        appendStrategy: 'afterData'
    });

    $(document).foundation();

    $(document).on('submit', '.mmodal-form', function (e) {
        e.preventDefault();
        var $this = $(this);
        $.ajax({
            type: 'post',
            url: $this.attr('action'),
            data: $this.serialize(),
            success: function (data) {
                if (data.success) {
                    $.mnotify({title: data.title});
                    $this.find('input').val('');
                } else {
                    var message = '';
                    for (var fieldName in data.errors) {
                        message += "<br/>" + data.errors[fieldName].join("<br/>");
                    }
                    $.mnotify({
                        title: data.title,
                        message: message
                    });
                }
            }
        });
        return false;
    });

    /* Fancybox defaults */
    $('.lightview').attr('rel', 'gallery').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            buttons : {}
        }
    });

    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});


$(document).ajaxComplete(function (data, textStatus, jqXHR) {
    if (jqXHR.status == 278) {
        window.location = jqXHR.getResponseHeader("Location");
    }
});