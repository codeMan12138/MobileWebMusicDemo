(function($,root){
    function audioCtrl(){
        this.audio = new Audio()
        this.status = 'pause'
    }
    audioCtrl.prototype = {
        play:function(){
            this.audio.play()
            this.status = 'play';
            root.renderPlayIcon();
        },
        pause:function(){
            this.audio.pause()
            this.status = 'pause'
            root.renderPlayIcon();
        },
        getAudio:function(){
            this.audio.src = songData[index].audio
        },
        setCurrentTime:function(curTime){
            this.audio.currentTime = curTime;
        }
    }
    root.audioCtrl = audioCtrl;
})(window.Zepto,window.root || (window.root = {}))