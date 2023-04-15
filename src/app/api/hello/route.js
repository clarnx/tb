import FormData from 'form-data';

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request) {

  try {
//     let data = await request.formData();
    return new Response(request.body)
  } catch (e) {
    console.log(e)
    return new Response("fail")
  }

  return new Response("success")
}
