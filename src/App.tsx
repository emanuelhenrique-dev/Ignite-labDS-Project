import { Logo } from './logo'
import { Heading } from './components/Heading'
import './styles/global.css'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 overflow-hidden'>
      <div className='w-full h-4/5 max-w-lg flex flex-col items-center justify-center rounded-xl
        bg-gradient-to-br from-gray-600 via-gray-900 to-gray-900  card
        lg:max-w-[1200px] lg:flex-row lg:gap-32'>
        { /* Logo de fundo */ }
        <Logo width={1053.12} height={1200} className= "absolute bg-logo " /> 
        <Logo className= "hidden lg:block"/>

        <div className='w-[400px]'>
          <header className='flex flex-col items-center'>
            <Logo width={106} height={120} className= "lg:hidden" /> 

            <Heading size='lg' className='mt-4 lg:hidden'>Ignite Lab</Heading>
            <Heading size='xlg' className='hidden mt-4 lg:block'>Ignite Lab</Heading>

            <Text size='lg' className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
          </header>

          <form className='flex flex-col gap-4 items-stretch w-full mt-10'>
            <label htmlFor="email" className='flex flex-col gap-3'>
              <Text className='font-semibold'>Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Envelope/>
                </TextInput.Icon>
                <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail'/>
              </TextInput.Root>
            </label>

            <label htmlFor="password" className='flex flex-col gap-3'>
              <Text className='font-semibold'>Sua senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock/>
                </TextInput.Icon>
                <TextInput.Input type="password" id='password' placeholder='**********'/>
              </TextInput.Root>
            </label>

            <label htmlFor="remember" className="flex items-center gap-2">
             <Checkbox id="remember" />
             <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
            </label>

          <Button type="submit" className="mt-4">Entrar na plataforma</Button>
          </form>

          <footer className="flex flex-col items-center gap-4 mt-8">
            <Text asChild size="sm">
              <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
            </Text>
            <Text asChild size="sm">
              <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? 
              <span className='text-blue-500 hover:text-blue-200'> Crie uma agora!</span></a>
            </Text>
          </footer>

        </div>

      </div>
      
    </div>
  )
}

