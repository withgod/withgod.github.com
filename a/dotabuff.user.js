function () {
    var a = 0,
        b = 0,
        c = 0,
        d = 0,
        e = 0;
    $("tr[data-link-to]").each(function () {
        var f = $(this);
        var g = $(f.find("td"));
        if ($(g[2]).find("a").hasClass("won")) {
            d++
        } else {
            e++
        }
        var h = $(g[5]).find("div").first().text().replace(/\s+/, "").split("/");
        a += parseInt(h[0]);
        b += parseInt(h[1]);
        c += parseInt(h[2])
    });
    var f = Math.round(a / b * 100) / 100;
    var g = Math.round(c / b * 100) / 100;
    var h = "k/d: " + f + "\n";
    h += "a/d: " + g + "\n";
    h += "win rate:" + Math.round(d / (d + e) * 100) + "%";
    var elem = document.getElementById('content-header-primary');
    var append = document.createElement("div");
    append.id = 'append-kda';
    append.innerHTML = h;
    elem.appendChild(append);
})();
