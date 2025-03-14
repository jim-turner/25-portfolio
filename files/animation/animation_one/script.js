gsap.registerPlugin(Flip, Observer, ScrollToPlugin, Draggable, EaselPlugin, MotionPathPlugin,
    PixiPlugin, TextPlugin, ScrollTrigger);


var tl = gsap.timeline({
    repeat: -1,
    repeatdelay: 3,
    ease: Power2.easeOut
});


tl.to("#sm_sq", {
    duration: -1,
    opacity: 0
});

tl.to("#big_sq", {
    duration: -1,
    opacity: 0
});

tl.to(".c", {
    x: -370,
    y: 170,
    ease: Power2.easeIn,
    duration: 1
}, 1);

tl.to(".o", {
    x: 750,
    y: 170,
    ease: Power2.easeIn,
    duration: 1
}, 1);

tl.to(".d", {
    x: -370,
    y: 670,
    ease: Power2.easeIn,
    duration: 1
}, 1);

tl.to(".e", {
    x: 750,
    y: 670,
    ease: Power2.easeIn,
    duration: 1
}, 1);

tl.to(".v", {
    opacity: 0,
    duration: 2,
    scaleX: .6,
    scaleY: .3,
    transformOrigin: "50% 50%",
    ease: Power2.easeIn
}, 2);

tl.to(".h", {
    opacity: 0,
    duration: 2,
    scaleX: .3,
    scaleY: .7,
    transformOrigin: "50% 50%",
    ease: Power2.easeIn
}, 2);

tl.to("#sm_sq", {
    x: -430,
    y: 60,
    opacity: 0
}, 2);

tl.to("#big_sq", {
    x: -430,
    y: 60,
    opacity: 0
}, 2);

tl.to("#sm_sq", {
    opacity: 1,
    ease: Power2.easeIn,
    duration: 1
}, 3);

tl.to("#big_sq", {
    opacity: 1,
    ease: Power2.easeIn,
    duration: 1
}, 3);

tl.to("#sm_sq", {
    scaleX: 2,
    scaleY: .8,
    ease: Power2.easeIn,
    transformOrigin: "50% 50%",
    duration: .3
}, 3);

tl.to("#big_sq", {
    scaleX: -.8,
    scaleY: .9,
    ease: Power2.easeIn,
    transformOrigin: "50% 50%",
    delay: .2,
    duration: .7
}, 3);

tl.to("#sm_sq", {
    opacity: 0,
    duration: 1
}, 4);

tl.to("#big_sq", {
    opacity: 0,
    duration: 1
}, 4);

tl.to(".c", {
    x: 720,
    y: 630,
    ease: Power2.easeIn,
    duration: .3
});

tl.to(".o", {
    x: 720,
    y: 640,
    ease: Power2.easeIn,
    duration: .2
});

tl.to(".d", {
    x: 720,
    y: 620,
    ease: Power2.easeIn,
    duration: .4
});

tl.to(".e", {
    x: 720,
    y: 650,
    ease: Power2.easeIn,
    duration: .5
});

tl.to(".c", {
    opacity: 0,
    duration: .2
});

tl.to(".o", {
    opacity: 0,
    duration: .5
});

tl.to(".d", {
    opacity: 0,
    duration: .9
});

tl.to(".e", {
    opacity: 0,
    duration: 1
});