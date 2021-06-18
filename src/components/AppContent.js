import { SvgIcon } from './reusable/SvgIcon';
import { TextInput } from './reusable/TextInput';
import { Button } from './reusable/Button';
import { IconWithTitle } from './reusable/IconWithTitle';

export const AppContent = () => {
  return (
    <main className='page__content page-content'>
      <div className='container'>
        <h1>philip1967/my-awesome-repo</h1>
        <SvgIcon id='icon-clock' className='test' width={22} height={22}/>
        <TextInput
          id='some_id' name='test' type='email' placeholder='test'
          labelTextBefore='label' labelTextAfter='label' isRequired
        />
        <Button content='button text' modifiers={['primary', 'small']} type='submit' disabled/>
        <IconWithTitle
          icon={<SvgIcon id='icon-clock' className='test' width={22} height={22}/>}
          title='hello' additionalTitle='hello2'
        />
        <Button
          content={
            <IconWithTitle
              icon={<SvgIcon id='icon-clock' className='test' width={22} height={22}/>}
              title='hello'
            />
          }
          modifiers={['secondary', 'small']}
          type='button'
        />
        <Button
          content={
            <SvgIcon id='icon-settings' className='test' width={22} height={22}/>
          }
          modifiers={['secondary', 'small']}
          type='button'
        />
      </div>
    </main>
  )
}
