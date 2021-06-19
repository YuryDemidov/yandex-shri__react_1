import { useState } from 'react';
import { Button } from '../Button/Button';
import { SvgIcon } from '../Svg/SvgIcon';
import '../../css/components/text-input.css';

export const TextInput = ({
  id,
  className,
  name,
  initialValue = '',
  type = 'text',
  labelTextBefore,
  labelTextAfter,
  placeholder,
  isRequired,
  hasClearButton
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  }

  const clearInput = () => {
    setValue('');
  }

  return (
    <div className={`text-input${isRequired ? ' text-input_required' : ''}${className ? ` ${className}` : ''}`}>
      <label className='text-input__label text-input__label_before' htmlFor={id}>{labelTextBefore}</label>
      <div className='text-input__wrap'>
        <input
          id={id} className={`text-input__input${hasClearButton ? ' text-input__input_clear-button' : ''}`}
          name={name} value={value} type={type}
          autoComplete='off' placeholder={placeholder} required={isRequired} onChange={handleChange}
        />
        {
          hasClearButton && value.trim().length
            ? <Button
              content={
                <SvgIcon id={`icon-clear`} width={16} height={16}/>
              }
              modifiers={['clear']} ariaLabel='Clear input' clickHandler={clearInput}
            />
            : null
        }
      </div>
      {labelTextAfter && <label className='text-input__label' htmlFor={id}>{labelTextAfter}</label>}
    </div>
  )
}
