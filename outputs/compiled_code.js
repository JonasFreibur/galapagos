let context = document.getElementById('canvas').getContext('2d');

let animator = new Animator();
let g = new Galapagos(context, 0, 10, 500, 500);
let t = new Turtle(context, g, 10, 10, 0);

animator.addToAnimationStack(t.moveStraight.bind(t), 120);
animator.addToAnimationStack(t.turnLeft.bind(t), 30);
animator.addToAnimationStack(t.moveStraight.bind(t), 120);
animator.addToAnimationStack(t.turnRight.bind(t), 50);
animator.addToAnimationStack(t.moveStraight.bind(t), 120);
animator.addToAnimationStack(t.takeOff.bind(t), null);
animator.addToAnimationStack(t.landing.bind(t), null);


animator.animate(null);
