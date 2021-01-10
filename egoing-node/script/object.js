var members = ["hyuzni", "alice", "array"]

console.log(members[1])

var i = 0
while (i < members.length) {
  console.log("array loof", members[i])
  i++
}

var roles = { "fe-dev": "hyuzni", "w-designer": "alice", " manager": "hyunjin" }

for (var name in roles) {
  console.log("object =>", name, "value=>", roles[name])
}

var f = function () {
  console.log(1 + 2)
  console.log(2 + 3)
}

var a = [f]
a[0]()

var o = {
  func: f,
}

o.func()

var o = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1)
  },
  f2: function () {
    console.log(this.v2)
  },
}
o.f1()
o.f2()
