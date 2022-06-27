import styled from 'styled-components';
import { colors } from '../theme';

import Title from './Title';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import Label from './Label';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 1.5rem 1rem;
  background-color: ${colors.bgPrimary};
  border-radius: 10px;
  padding: 1rem 1rem 1.5rem 1rem;
  height: 100%;
`;

Card.Title = Title;
Card.Label = Label;
Card.Form = Form;
Card.Input = Input;
Card.TextArea = TextArea;

export default Card;
