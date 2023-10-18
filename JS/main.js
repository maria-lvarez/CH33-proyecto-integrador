function formulaGeneral(a, b, c) {
    let x1 = ((-b) + (Math.sqrt((b**2)-(4*(a)*(c)))))/(2*a);
    let x2 = ((-b) - (Math.sqrt((b**2)-(4*(a)*(c)))))/(2*a);
    //console.log("x1 = " + Math.abs(x1), " x2 = " + Math.abs(x2))
    return (["x1 = " + Math.abs(x1), " x2 = " + Math.abs(x2)])
}