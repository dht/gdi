import Variables from './Variables';

export type VariablesContainerProps = {
  variables: Json;
};

export function VariablesContainer(props: VariablesContainerProps) {
  const { variables } = props;

  return <Variables />;
}

export default VariablesContainer;
