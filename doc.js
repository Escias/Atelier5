function details(n) {
    console.log(n);
    if (document.getElementById(n).requestFullscreen) {
        document.getElementById(n).requestFullscreen();
    }
}
