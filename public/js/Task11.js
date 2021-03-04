
var test1 = new RegExp("ь$")
var text1in = document.getElementById("task-11-1-input").innerHTML;
var text1out = '';
var words = text1in.split(' ');


words.forEach(element => {
    if(element.match(test1)){
        text1out+= "<span style = 'color:red'>" + element + " </span>";
    }else{
        text1out+= element + " ";
    }

});
document.getElementById("task-11-1-output").innerHTML = text1out;

var text2in = document.getElementById("task-11-2-input").innerHTML;
var text2out = '';
words = text2in.split(' ');
var test2 = new RegExp("^255+\\.[0-9]{1,3}\\.[[0-9]{1,3}\\.[[0-9]$")

words.forEach(element => {
    if(element.match(test2)){

        text2out+= "<span style = 'color:red'>" + element + " </span>";
    }else{
        text2out+= element + " ";
    }

});
document.getElementById("task-11-2-output").innerHTML = text2out;

var test3 = new RegExp("^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[[0-9]{4}$")
$('#task-11-3-input').on('change', function(){ 
    var $this = $(this),
    val = $this.val();
    console.log(val)
    if(val.match(test3)){
        console.log("test")
        this.style.color = 'green';
    }else{
        this.style.color = 'red';
    }
})

var test4 = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@ukr\\.net$")
$('#task-11-4-input').on('change', function(){ 
    var $this = $(this),
    val = $this.val();
    console.log(val)
    if(val.match(test4)){
        this.style.color = 'green';
    }else{
        this.style.color = 'red';
    }
})