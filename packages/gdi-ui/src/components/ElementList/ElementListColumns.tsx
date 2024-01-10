import Icon from '../Icon/Icon';
import { Text, Text1, Text2 } from './ElementList.style';

export const ColumnIcon = (props: any) => {
  const { data } = props;
  const { value } = data;

  return <Icon name={value} />;
};

export const ColumnSingle = (props: any) => {
  const { data } = props;
  const { value } = data;

  return <Text>{value}</Text>;
};

export const ColumnDouble = (props: any) => {
  const { data } = props;
  const { value, value2 } = data;

  return (
    <>
      <Text1>{value}</Text1>
      <Text2>{value2}</Text2>
    </>
  );
};

export const allColumns: any = {
  icon: ColumnIcon,
  single: ColumnSingle,
  double: ColumnDouble,
};
