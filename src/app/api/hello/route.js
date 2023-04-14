import FormData from 'form-data';

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request) {

  try {
    let data = await request.formData();
  } catch (e) {
    console.log(e)
    return new Response("fail")
  }

  return new Response("success")
}
