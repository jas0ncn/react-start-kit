import { RouteComponentProps } from 'react-router';
import { RootState } from './';

export interface RootProps extends RootState, RouteComponentProps<any> {}