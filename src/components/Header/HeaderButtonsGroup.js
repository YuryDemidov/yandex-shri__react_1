import { Button } from '../Button/Button';
import { IconWithTitle } from '../IconWithTItle/IconWithTitle';
import { SvgIcon } from '../Svg/SvgIcon';
import { Link } from 'react-router-dom';

export const HeaderButtonsGroup = ({ buttonsSet }) => {
  return (
    <div className='page-header__buttons-group'>
      {buttonsSet.map(buttonType => {
        let iconId = buttonType;
        let iconTitle = buttonType[0].toUpperCase() + buttonType.substring(1);
        let titleClass = 'hidden_mobile';

        if (buttonType === 'build') {
          iconId = 'play';
          iconTitle = 'Run Build';
        }

        if (buttonType === 'settings' && buttonsSet.length > 1) {
          titleClass = 'hidden';
        }

        const buttonContent = (<IconWithTitle
            icon={<SvgIcon id={`icon-${iconId}`} width={12} height={12}/>}
            title={iconTitle} titleClass={titleClass} ariaHidden
          />);

        return buttonType === 'settings'
          ? <Link to='/settings' key={buttonType} className='button button_secondary button_small button_link-flex'>
              <span className='visually-hidden'>{iconTitle}</span>
              {buttonContent}
            </Link>
          : <Button
            key={buttonType}
            content={buttonContent}
            modifiers={['secondary', 'small']}
            ariaLabel={iconTitle}
          />
      })}
    </div>
  )
}
