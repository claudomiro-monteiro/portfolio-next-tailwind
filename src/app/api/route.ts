import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface Transport {
  host: string
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    segure: true,
    port: 465,
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASS_WORD,
    },
  } as Transport)

  const output = `
    <p>Você tem um novo Contato.</p>
    <h3>Detalhes do Contato</h3>
  <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
  </ul>
    <h3>Mensagem</h3>
  <ul>
    <li><p>${message}</p></li>
  </ul>
  `
  try {
    await transporter.sendMail({
      from: process.env.USER_NAME,
      to: process.env.USER_NAME,
      subject: `${name} te enviou uma mensagem`,
      html: output,
    })

    return NextResponse.json({ message: 'Email send' })
  } catch (error) {
    console.log('Erro:', error)
    return NextResponse.json({ message: 'Error' })
  }
}
