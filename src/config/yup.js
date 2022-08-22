import { setLocale } from 'yup'
import { t } from './i18n'

setLocale({
    mixed: {
        required: ({path: attribute}) => t('validation.messages.required', {attribute: t(`validation.attributes.${attribute}`)}),
        oneOf: ({path: attribute}) => attribute === 'passwordConfirmation' ? t('validation.messages.confirmed') : '',
        notType: ({path: attribute}) => t('validation.messages.invalid', {attribute: t(`validation.attributes.${attribute}`)}),
    },
    string: {
        email: t('validation.messages.email'),
        min: ({path: attribute, min}) => t('validation.messages.minString', {attribute: t(`validation.attributes.${attribute}`), min}),
        max: ({path: attribute, max}) => t('validation.messages.maxString', {attribute: t(`validation.attributes.${attribute}`), max}),
        length: ({path: attribute, length}) => t('validation.messages.length', {attribute: t(`validation.attributes.${attribute}`), length}),
    },
    number: {
        min: ({min}) => t('validation.messages.minNumber', {min}),
        max: ({max}) => t('validation.messages.maxNumber', {max}),
    },
})