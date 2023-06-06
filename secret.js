function getSecret (){
    /* Secret Script */
    let sp = ""

    const b = ["p", "p", "a", "n", "e"]
    const a = ["j", "s", ".", "s", "e"]
    const d = ["m", "a", "i", "l", "."]
    const c = ["n", "8", "3", "@", "g"]
    const m = ["m", "a", "i", "l", "t", "o", ":"]
    const e = ["c", "o", "m"]


    for (let i = 0; i < m.length; i++) {
        sp += m[i];
    }

    for (let i = 0; i < a.length; i++) {
        sp += a[i];
    }
    for (let i = 0; i < b.length; i++) {
        sp += b[i];
    }
    for (let i = 0; i < c.length; i++) {
        sp += c[i];
    }
    for (let i = 0; i < d.length; i++) {
        sp += d[i];
    }
    for (let i = 0; i < e.length; i++) {
        sp += e[i];
    }
    let change = document.getElementById("sposti");
    change.setAttribute("href", sp);
}
