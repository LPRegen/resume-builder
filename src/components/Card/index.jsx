import styled from 'styled-components';
import { colors } from '../theme';

import Title from './Title';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import Label from './Label';
import Button from './ButtonPages';
import Wrapper from './Wrapper';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 1.5rem 1rem;
  background-color: ${colors.bgPrimary};
  border-radius: 10px;
  padding: 1rem 1rem 1.5rem 1rem;
  height: 100%;
  min-height: 730px;
`;

Card.Title = Title;
Card.Label = Label;
Card.Form = Form;
Card.Input = Input;
Card.TextArea = TextArea;
Card.Button = Button;
Card.Wrapper = Wrapper;

export default Card;
