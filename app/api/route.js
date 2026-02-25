export function GET(request) {
  console.log(request);

  //return Response.json({message: "Hello World"})

  return new Response("Hello World");
}

//export function post(request) {}