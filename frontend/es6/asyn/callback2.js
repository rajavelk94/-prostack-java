
function add(a, b, c,d) {
    console.log(a)
    console.log(b)
    d()
}
add(10, 20, 30,() => {
    console.log("Hello,GM")
});
