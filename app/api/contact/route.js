export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Huella Social contact", data);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "No fue posible enviar el formulario." }, { status: 400 });
  }
}
