function loadAboutMe() {
    var a = document.getElementById("aboutMeSection");
    $("html,body").scrollTop(0),
    $("#title-text").css("height", window.innerHeight),
    $("#dialogue-text").css("margin-top", window.innerHeight / 4),
    $("#resumeDiv").css("margin-top", window.innerHeight / 4),
    $("#techArticle").css("margin-top", window.innerHeight / 4),
    portfolioSection.className = "fadeOut",
    contactSection.className = "fadeOut",
    a.style.display = "initial",
    a.className = "fadeIn",
    portfolioSection.style.zIndex = 0,
    contactSection.style.zIndex = 0,
    a.style.zIndex = 1
}
function loadPortfolio() {
    $("html,body").scrollTop(0);
    var a = document.getElementById("portfolioSection");
    $("#portfolioSection").css("height", window.innerHeight),
    aboutMeSection.className = "fadeOut",
    contactSection.className = "fadeOut",
    a.style.display = "initial",
    a.className = "fadeIn",
    a.style.zIndex = 1,
    contactSection.style.zIndex = 0,
    aboutMeSection.style.zIndex = 0
}
function loadContactMe() {
    $("html,body").scrollTop(0);
    var a = document.getElementById("contactSection");
    portfolioSection.className = "fadeOut",
    aboutMeSection.className = "fadeOut",
    a.style.display = "initial",
    a.className = "fadeIn",
    portfolioSection.style.zIndex = 0,
    a.style.zIndex = 1,
    aboutMeSection.style.zIndex = 0
}
$(".resume").attr("href", portfolio.resume.url),
!!document.createElement("video").canPlayType == !0,
loadAboutMe(),
document.getElementById("dropdown").addEventListener("click", function(a) {
    var b = document.getElementById("dropdown").getBoundingClientRect();
    console.log("pos: ", b);
    var c = b.left;
    document.getElementById("menu").style.left = c + "px"
}),
$(".portfolioPics").on("click", function(a) {
    var b = a.target.alt,
        c = b.split(" ", 1);
    c = c.join(),
    $("#modalTemplate").modal();
    var d = $("#modalTitle");
    d.text(portfolio[c].name);
    var e = $("#modalImg");
    e.attr("src", portfolio[c].photo),
    e.attr("alt", portfolio[c].name + " color image."),
    $("#modalList").html("");
    var f = $("<li>"),
        g = portfolio[c].tech.join();
    if (g = g.replace(/,/g, ", "), f.text("Technologies: " + g), $("#modalList").append(f), portfolio[c].hasOwnProperty("npm") && portfolio[c].npm.length > 0) {
        var h = $("<li>"),
            i = portfolio[c].npm.join();
        i = i.replace(/,/g, ", "),
        h.text("NPM Packages: " + i),
        $("#modalList").append(h)
    }
    $("#modalDesc").text(portfolio[c].description),
    $("#modalGithub").attr("href", portfolio[c].github),
    $("#modalHeroku").attr("href", portfolio[c].heroku)
}),
$("#sendButton").on("click", function() {
    var a = $("#nameInput").val().trim(),
        b = $("#emailInput").val().trim(),
        c = $("#messageInput").val().trim();
    $.ajax({
        url: "/mail",
        type: "POST",
        data: {
            name: a,
            email: b,
            message: c
        }
    }).done(function(a) {
        vex.dialog.alert("Thank you for sending me a message! I'll get back to you soon."),
        $("#nameInput").val(""),
        $("#emailInput").val(""),
        $("#messageInput").val("")
    }).fail(function() {
        vex.dialog.alert("Oops. Something went wrong. Please try again.")
    })
});
