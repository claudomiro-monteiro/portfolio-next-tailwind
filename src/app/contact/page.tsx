'use client'

import { Form } from '@/components/form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Mail, MailOpen, SendHorizonal, User2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { z } from 'zod'

const createFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Digite seu nome.' })
    .min(3, 'Digite um nome válido.'),
  email: z
    .string()
    .nonempty({ message: 'Digite seu email.' })
    .email({ message: 'Digite um email válido.' }),
  message: z
    .string()
    .nonempty({ message: 'Deixe sua mensagem.' })
    .min(10, 'Sua mensagem deve ter no mínimo 10 caracteres.'),
})

type CreateFormData = z.infer<typeof createFormSchema>

export default function Contact() {
  const [spinner, setSpinner] = useState(false)

  const createForm = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  const { handleSubmit, reset } = createForm

  async function newForm(data: CreateFormData) {
    // console.log(JSON.stringify(data, null, 2))
    setSpinner(true)
    try {
      await axios.post('http://localhost:3000/api', data)
      setSpinner(false)
      toast.success('Contato enviado com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
      })
      reset()
    } catch (error) {
      console.error(error)
      setSpinner(false)
      toast.error('Não foi possivel enviar seu contato, tente mais tarde.', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div
        id="skills"
        className="mb-16 flex w-full flex-col items-center justify-center px-8 py-4 text-lg font-normal text-white"
      >
        <h1 className="py-6 text-2xl font-extrabold">Envie sua mensagem!!!</h1>

        <FormProvider {...createForm}>
          <form
            id="send"
            onSubmit={handleSubmit(newForm)}
            className="flex w-full flex-col gap-6"
          >
            <Form.Field>
              <Form.Prefix>
                <User2 />
              </Form.Prefix>
              <Form.Input name="name" id="name" placeholder="Nome" />
            </Form.Field>
            <Form.ErrorMessage field="name" />
            <Form.Field>
              <Form.Prefix>
                <Mail />
              </Form.Prefix>
              <Form.Input name="email" id="email" placeholder="Email" />
            </Form.Field>
            <Form.ErrorMessage field="email" />
            <Form.Field>
              <Form.Prefix>
                <MailOpen />
              </Form.Prefix>
              <Form.TextArea
                name="message"
                id="message"
                rows={5}
                placeholder="Mensagem"
              />
            </Form.Field>
            <Form.ErrorMessage field="message" />
          </form>
          <button
            form="send"
            type="submit"
            className="mt-8 flex h-10 w-48 items-center justify-center gap-4 rounded-md border-none bg-green-500 py-2 font-semibold outline-none transition-all duration-200 hover:brightness-90"
          >
            {!spinner ? (
              <>
                Enviar
                <SendHorizonal size={24} />
              </>
            ) : (
              <Oval
                height={24}
                width={24}
                color="#ffffff"
                // wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#ffffff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )}
          </button>
        </FormProvider>
      </div>
      <div className="hidden items-center justify-center sm:flex">
        <Image
          src="/developer-image.svg"
          alt=""
          width={500}
          height={100}
          quality={100}
          className="flex px-4"
        />
      </div>
      <ToastContainer />
    </div>
  )
}
