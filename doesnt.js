const edge = require('edge')

const doesnt = edge.func(`
async (dynamic cb) => {
    var timer = new System.Timers.Timer(1000);
    timer.Elapsed += (source, e) => {
        Console.WriteLine("In callback");
        cb("This does not");
    };
    timer.Start();
    while (true)
        Console.ReadLine();
    
    return null;
}
`)

doesnt(ret => {console.log(ret)})

