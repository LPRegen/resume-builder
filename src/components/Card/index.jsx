import styled from 'styled-components';
import { colors } from '../theme';

import Title from './Title';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import Label from './Label';
import Button from './ButtonPages';
import Wrapper from './Wrapper';
import Skill from './Skill';
import ButtonAdd from './ButtonAdd';
import ButtonDelete from './ButtonDelete';
import PrintButton from './PrintButton';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  margin: 1rem;
  background-color: ${colors.bgPrimary};
  border-radius: 10px;
  padding: 1rem;
  height: 730px;
  min-width: 328px;
  flex-basis: 0;
`;

Card.Title = Title;
Card.Label = Label;
Card.Form = Form;
Card.Input = Input;
Card.TextArea = TextArea;
Card.Button = Button;
Card.Wrapper = Wrapper;
Card.Skill = Skill;
Card.ButtonAdd = ButtonAdd;
Card.ButtonDelete = ButtonDelete;
Card.ButtonPrint = PrintButton;

export default Card;
