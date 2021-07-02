const volume = {
  pi: Math.PI,
  radius: 10,
  height: 10,
  ans: function () {
    return (volume.pi * volume.radius ** 2 * volume.height).toFixed(4)
  },
}

console.log(volume.myVal())
