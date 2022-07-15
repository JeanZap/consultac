import 'styled-components';
import { ITema } from './src/models/ITema';

declare module 'styled-components' {
  export interface DefaultTheme extends ITema {}
}
