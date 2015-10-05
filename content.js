(function () {

    $(document).on("mouseenter", ".audio", function () {

        var audio = $(this).find(".play_btn_wrap");
        var mp3url = audio.parent().find("input").val().split(/[?,]/)[0];
        var trackName = _.trim(audio.parent().parent().find('.title_wrap').text()) + ".mp3";

        var buttonTemplate = _.template('<div data-url="<%= mp3url %>" data-name="<%= trackName %>" class="ext_download_audio" style="z-index:999; position: absolute; color: white; font-weight: bolder; background-color: #5f7e9d; right:28px; top:4px; cursor: pointer; width: 55px; border-radius: 4px; padding: 4px;">СКАЧАТЬ</div>');

        $(this).append(buttonTemplate({
            mp3url: mp3url,
            trackName: trackName
        }));

        $('.ext_download_audio').on("click", function (e) {

            var url = $(this).data('url');
            var name = $(this).data('name');

            chrome.runtime.sendMessage({file: {
                url: url,
                name: name
            }}, function(response) {
                //do nothing
            });

            return false;
        })
    });

    $(document).on("mouseleave", ".audio", function () {
        $(this).find(".ext_download_audio").remove();
    });

})();

