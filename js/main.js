
    let cursor = $(".cursor");
    let follower = $(".cursor2");

    let posX = 0,
        posY = 0;

    let mouseX = 0,
        mouseY = 0;

    gsap.ticker.add(() => {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
            x: posX - 12,
            y: posY - 12,
        });

        gsap.set(cursor, {
            x: mouseX,
            y: mouseY,
        });
    });

    $(document).on("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    
