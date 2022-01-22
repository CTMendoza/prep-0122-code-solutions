// create your loops here.
let k = 0;
for (k = 0; k < 10; k++) {
  console.log(k);
}

let m = 0;
for (; m < 20; m += 2) {
  console.log(m);
}

for (let t = 100; ; t--) {
  if (t < 0) break;
  console.log('Tim till explosion ', t);
}
