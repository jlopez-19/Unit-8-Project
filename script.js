let count = 0;

$("button").click(function() {
    let choice = $(".user-choice").val();
    let time = $(".time").val();
    count = count + 1;
    $(".counter").text("~This quiz has been taken " + count + " times~");

    if (time < 12 && choice === "blades") {
        $(".sv").show();
    } else if (time >= 12 && choice === "blades") {
        $(".ks").show();
    } else if (time >= 12 && choice === "poison") {
        $(".rats").show();
    } else if (time < 12 && choice === "poison") {
        $(".preps").show();
    } else if (time >= 12 && choice === "guns") {
        $(".fwo").show();
    } else if (time < 12 && choice === "guns") {
        $(".dm").show();
    }


    $(".fullSentence").text("");
    $(".fullSentence").append("<br>" + "Your weapon preference is: " + choice);
    $(".fullSentence").append("<br>" + "You usually wake up at " + time + ":00 hours");
});