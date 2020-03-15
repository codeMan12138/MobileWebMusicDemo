(function($,root){
    // 时间格式 00:00 数字0占位
    function PrefixZero(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }
    // $('.image-wrapper').attr('src','/source/images/1.jpg')
    function renderImg(data){
        $('.singImg').attr('src',data.image)
        $('.bg').css('backgroundImage','url('+ data.image +')')
    }
    function renderInfo(data){
        $('.song-name').text(data.song)
        $('.singer').text(data.singer)
        $('.song-album').text(data.album)
    }
    function renderTotalTime(data){
        var min = Math.floor(data.duration / 60)
        var sec = Math.floor(data.duration % 60)
        var minNum = PrefixZero(min,2)
        var secNum = PrefixZero(sec,2)
        $('.totalTime').text(minNum + ':' + secNum)
    }
    function renderCurTime(time){
        var min = Math.floor(time / 60)
        var sec = Math.floor(time % 60)
        var minNum = PrefixZero(min,2)
        var secNum = PrefixZero(sec,2)
        $('.curTime').text(minNum + ':' + secNum)
    }
    function renderProLine(percentNum){
        $('.cur-line').css('transform','translateX(-'+ percentNum +'%)')
    }
    function renderPlayIcon(){
        if(audio.status == 'play'){
            $('.playBtn').css('backgroundImage','url(../images/pause.png)')
        } else {
            $('.playBtn').css('backgroundImage','url(../images/play.png)')
        }
    }
    root.renderImg = renderImg;
    root.renderInfo = renderInfo;
    root.renderTotalTime = renderTotalTime;
    root.renderCurTime = renderCurTime;
    root.renderPlayIcon = renderPlayIcon;
    root.renderProLine = renderProLine;
})(window.Zepto,window.root || (window.root = {}))