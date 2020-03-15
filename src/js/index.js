var $ = window.Zepto
console.log($);

var index = 0;
var songData = [];
var audio;
function getData(url){
    $.ajax({
        type:'GET',
        url:url,
        success:function(data){
            songData = data;
            console.log(data);
            render(data[index]);
            audio = new root.audioCtrl();
            audio.getAudio();
            audio.audio.ontimeupdate = function(){
                root.renderCurTime(Math.floor(this.currentTime))
                var percentNum = 100 - (this.currentTime / this.duration) * 100
                root.renderProLine(percentNum)
                if(Math.floor(this.currentTime) == Math.floor(this.duration)) {
                    $('.nextBtn').click()
                }
            }
        },
        error:function(err){
            console.log('Error:' + err);
        }
    })
}

function render(data){
    var renderImg = root.renderImg
    var renderInfo = root.renderInfo
    var renderTotalTime = root.renderTotalTime
    renderImg(data);
    renderInfo(data);
    renderTotalTime(data);
}

function init() {
    var bindBtnEvent = root.bindBtnEvent;
    var bindProEvent = root.bindProEvent;
    getData('../mock/data.json');
    bindBtnEvent(render);
    bindProEvent();
}

init();
