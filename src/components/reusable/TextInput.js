export const TextInput = ({ id, name, type, labelTextBefore, labelTextAfter, placeholder, isRequired }) => {
  return (
    <div className={`text-input ${isRequired && 'text-input_required'}`}>
      <label className='text-input__label text-input__label_before' htmlFor={id}>{labelTextBefore}</label>
      <input
        id={id} className='text-input__input' name={name}
        type={type} placeholder={placeholder} required={isRequired}
      />
      {labelTextAfter && <label className='text-input__label' htmlFor={id}>{labelTextAfter}</label>}
    </div>
  )
}
