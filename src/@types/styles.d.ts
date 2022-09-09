// Arquivos de definição de TextInputProps
import 'styled-components'
import { defaultTheme } from '../styles/Theme/default'

// Ao pasar o mause em defaultTheme ele exibes tipagem feita automatica

// vamos copias essa tipagem para um typo que vamos criar
type ThemeTypes = typeof defaultTheme

// Vamos Criar uma Tipagem para o modulo especificado no NPM
// Vamos sobrescrever uma typagem nova
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
