import React from 'react'
import { useTranslation } from 'react-i18next';
import '../stylesheets/Rules.css'


function Rules() {
  const { t } = useTranslation();
  return (
    <div className='Rules'>
      <div className='TextPartAbout'>
        <div className='TitlePart'>
          <div className='NameTitlePart'>
            <span className=''>
              {t('NameTitlePartF')}
            </span>
          </div>
          <div className='TextTitlePart'>
            <span className=''>
              {t('TextTitlePartF')}
            </span>
          </div>
        </div>
        <div className='TitlePart'>
          <div className='NameTitlePart'>
            <span className=''>
              {t('NameTitlePartS')}
            </span>
          </div>
          <div className='TextTitlePart'>
            <span className=''>
              {t('TextTitlePartS')}
            </span>
          </div>
        </div>
        <div className='TitlePart'>
          <div className='NameTitlePart'>
            <span className=''>
              {t('NameTitlePartT')}
            </span>
          </div>
          <div className='TextTitlePart'>
            <span className=''>
              {t('TextTitlePartT')}
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Rules