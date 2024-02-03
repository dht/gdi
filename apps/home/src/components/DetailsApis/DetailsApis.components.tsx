import { SubField } from './DetailsApis.style';

export const JsonMap = (props: any) => {
  const { json } = props;

  function renderField(key: string) {
    return (
      <SubField key={key} className='dependency'>
        <label>{key}</label>
        <span>{json[key]}</span>
      </SubField>
    );
  }

  function renderJson() {
    return Object.keys(json)
      .sort()
      .map((key: string) => renderField(key));
  }

  return renderJson();
};
