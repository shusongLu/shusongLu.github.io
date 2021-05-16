new TypeIt("#zdnlss", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("郑丹妮 && 卢树淞")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("第一次520")
    .pause(3000)
    .go();

new TypeIt('#talkToZDN', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();