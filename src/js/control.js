(function($,root){
    function bindBtnEvent(render){
        $('.prevBtn').on('click',function(){
            if(index == 0){
                index = songData.length - 1
            } else {
                index--;
            }
            render(songData[index]);
            audio.getAudio()
            audio.play()
        })
        $('.nextBtn').on('click',function(){
            if(index == songData.length - 1){
                index = 0;
            } else {
                index++;
            }
            render(songData[index]);
            audio.getAudio()
            audio.play()
        })
        $('.playBtn').on('click',function(){
            if(audio.status == 'pause'){
                audio.play();
            } else {
                audio.pause();
            }
        })
    }
    
    function bindProEvent(e){
        var offset = $('.pro-line-wrapper').offset();
        $('.pro-line-wrapper').on('touchstart',function(e){
            var distX = e.changedTouches[0].clientX - offset.left;
            var percentNum = (1 - distX / offset.width) * 100;
            var songCurTime = (distX / offset.width) * audio.audio.duration;
            // 将事件解绑，否则在拉进度条过程中播放会触发该事件，导致进度条闪烁。
            audio.audio.ontimeupdate = null;
            root.renderProLine(percentNum)
        })
        .on('touchmove',function(e){
            var distX = e.changedTouches[0].clientX - offset.left;
            var percentNum = (1 - distX / offset.width) * 100;
            root.renderProLine(percentNum)
        })
        .on('touchend',function(e){
            var distX = e.changedTouches[0].clientX - offset.left;
            var songCurTime = (distX / offset.width) * audio.audio.duration;
            audio.setCurrentTime(songCurTime)
            // 将事件重新绑定
            audio.audio.ontimeupdate = function(){
                root.renderCurTime(Math.floor(this.currentTime))
                var percentNum = 100 - (this.currentTime / this.duration) * 100
                root.renderProLine(percentNum)
                if(Math.floor(this.currentTime) == Math.floor(this.duration)) {
                    $('.nextBtn').click()
                }
            }
        })
    }
    root.bindBtnEvent = bindBtnEvent
    root.bindProEvent = bindProEvent
})(window.Zepto,window.root || (window.root = {}))